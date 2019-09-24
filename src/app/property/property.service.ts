import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  occupancy: number;

  constructor() {
  }

   calculateOccupancy(propertyArea: number, tenantArea: number): number {
    if (propertyArea === 0) {
      return 0;
    } else {
      return this.occupancy = Math.round((tenantArea * 100) / propertyArea);
    }
  }
}
