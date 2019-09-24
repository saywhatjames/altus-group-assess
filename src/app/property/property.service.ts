import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor() {
  }

  static calculateOccupancy(propertyArea: number, tenantArea: number): number {
    if (propertyArea === 0) {
      return 0;
    } else {
      return Math.round((tenantArea * 100) / propertyArea);
    }
  }
}
