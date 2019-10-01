import {Injectable} from '@angular/core';
import Property from './Property';
import {PROPERTY} from './mock-property';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  occupancy: number;

  constructor() {
  }

  getProperty(): Observable<Property> {
    return new Observable((observer) => {
      try {
        observer.next(PROPERTY);
        observer.complete();
      } catch (err) {
        observer.error(err);
      }
    });
  }


  calculateOccupancy(propertyArea: number, tenantArea: number): number {
    if (propertyArea === 0) {
      return 0;
    } else {
      return this.occupancy = Math.round((tenantArea * 100) / propertyArea);
    }
  }
}
