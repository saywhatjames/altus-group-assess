import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PropertyComponent} from './property.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('PropertyComponent', () => {
  let component: PropertyComponent;
  let fixture: ComponentFixture<PropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [PropertyComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Property name field validity', () => {
    const name = component.argusForm.controls['propertyName'];
    name.setValue('23 Cannon Place');
    expect(name.valid).toBeTruthy();

    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();

  });

  it(' Tenant name field validity', () => {
    const name = component.argusForm.controls['tenantName'];
    name.setValue('Ashridge Fine Foods');
    expect(name.valid).toBeTruthy();

    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();

  });

  it('Property Area field validity', () => {
    const propertyArea = component.argusForm.controls['propertyArea'];
    propertyArea.setValue(3050000);
    const tenantArea = component.argusForm.controls['tenantArea'];
    tenantArea.setValue(63500);
    expect(propertyArea.valid).toBeTruthy();

    propertyArea.setValue('');
    expect(propertyArea.hasError('required')).toBeTruthy();

    propertyArea.setValue(0);
    expect(propertyArea.hasError('zeroCheck')).toBeTruthy();

    propertyArea.setValue(60000);
    expect(propertyArea.hasError('min')).toBeTruthy();
  });
});
