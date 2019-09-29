import Property from './Property';
import Tenant from './Tenant';


export const TENANT: Tenant = {
  name: 'Ashridge Fine Foods',
  rentableArea: 63500
};

export const PROPERTY: Property = {
  name: '23 Cannon Place',
  rentableArea: 305000,
  tenants: [TENANT]
};
