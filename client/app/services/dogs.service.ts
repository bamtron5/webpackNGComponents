import * as angular from 'angular';

export class DogsServiceClass {
  constructor(
    private $http
  ) {

  }
  getDogs():ng.IHttpPromise<any> {
    return this.$http.get('http://api.giphy.com/v1/gifs/search?q=dogs&api_key=dc6zaTOxFJmzC&limit=10')
  }
}

DogsServiceClass.$inject = ['$http'];


export const DogsServiceModule = angular.module('app.services.dogs', [])
  .service('DogsService', DogsServiceClass)
  .name;
