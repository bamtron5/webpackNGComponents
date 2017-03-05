import * as angular from 'angular';

export class CarServiceC {
  public CarResource;

  constructor(
    private $resource: ng.resource.IResourceService
  ) {
    this.CarResource = $resource('/api/car'
      // { query: { method: 'GET', isArray: true }}
    );
  }

  public getCars(query) {
    return this.CarResource.query(query).$promise;
  }
}

CarServiceC.$inject = ['$resource'];

export const CarServiceModule = angular.module('app.services.car', [])
  .service('CarService', CarServiceC)
  .name;
