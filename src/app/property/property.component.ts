import {Component, OnInit} from '@angular/core';
import Tenant from '../Tenant';
import Property from '../Property';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PropertyService} from './property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  argusForm: FormGroup;
  occupancy = 0;
  prevOcc;

  // initialize values for error checking
  maxFlag = false;

  // initialize objects as per exercise
  tenant = new Tenant('Ashridge Fine Foods', 63500);
  property = new Property('23 Cannon Place', 305000, [this.tenant]);


  constructor(private fb: FormBuilder, private ps: PropertyService) {
    this.createForm();
  }

  /**
   * Initialize reactive form method
   */

  createForm() {
    this.argusForm = this.fb.group({
      propertyName: [this.property.name, Validators.required],
      propertyArea: [this.property.rentableArea,
        [Validators.required,
          (control: AbstractControl) => Validators.min(this.tenant.rentableArea)(control),
          this.zeroCheck]],
      tenantName: [this.tenant.name, Validators.required],
      tenantArea: [this.tenant.rentableArea, [Validators.required,
        (control: AbstractControl) => Validators.max(this.property.rentableArea)(control),
        this.zeroCheck]],
    });
  }

  /**
   * Custom Validator for zero checking
   * returns zeroCheck Object if input is zero
   * null otherwise;
   */

  zeroCheck(c: FormControl) {
    return (c.value === 0) ? {
      zeroCheck: {
        valid: false
      }
    } : null;
  }


  /**
   * Subscribe to observer for value changes
   * if property area is greater than tenant area throw
   * an error flag for validation. If passed calculate occupancy;
   */

  onChanges(): void {
    this.argusForm.valueChanges.subscribe(val => {
      // change values to number
      const npropertyArea = +val.propertyArea;
      const ntenantArea = +val.tenantArea;

      // apply changes to the name model
      this.property.name = val.propertyName;

      // check for errors
      if (npropertyArea < ntenantArea) {
        this.maxFlag = true;
      } else {
        this.maxFlag = false;
        this.tenant.rentableArea = ntenantArea;
        this.property.rentableArea = npropertyArea;
        this.calculateOccupancy(this.property.rentableArea, this.tenant.rentableArea);
      }
    });
  }

  /**
   * Calculate resulting Occupancy after a valid model
   * change of either tenant area or property area and calls for property service
   * then number increment animation.
   */

  calculateOccupancy(propertyArea: number, tenantArea: number) {
    this.prevOcc = (this.occupancy) ? this.occupancy : 0;
    this.occupancy = this.ps.calculateOccupancy(propertyArea, tenantArea);
  }


  /**
   * Initialize component
   */

  ngOnInit(): void {
    this.calculateOccupancy(this.property.rentableArea, this.tenant.rentableArea);
    this.onChanges();
  }

}
