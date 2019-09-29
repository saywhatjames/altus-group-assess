import Tenant from './Tenant';

export default class Property {
  constructor(
    public name: string,
    public rentableArea: number,
    public tenants?: Tenant[]
  ) {}
}
