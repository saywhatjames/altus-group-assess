import {TestBed} from '@angular/core/testing';

import {PropertyService} from './property.service';


describe('PropertyService', () => {
  let propertyService: PropertyService; // Add this
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertyService]
    });

    propertyService = TestBed.get(PropertyService); // Add this
  });

  it('should be created', () => { // Remove inject()
    expect(propertyService).toBeTruthy();
  });
});
