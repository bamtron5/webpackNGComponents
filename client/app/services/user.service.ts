import * as angular from 'angular';

export class UserServiceClass {
  public UserResource;
  public AuthResource;

  constructor(
    private $resource: ng.resource.IResourceService,
    private $http: ng.IHttpService
  ) {
    this.UserResource = $resource('/api/user/:name');
    this.AuthResource = $resource('/api/auth/:action');
  }

  public login(user: {username: string, password: string}) {
    return this.AuthResource.save({action: 'login'}, user).$promise;
  }

  public register(user: { username: string, password: string, email: string}) {
    return this.AuthResource.save({action: 'register'}, user).$promise;
  }

  public getCurrentUser() {
    return this.$http.get('/api/auth/currentuser');
  }

  public logout() {
    return this.AuthResource.get({action: 'logout'}).$promise;
  }

  public getUser(name: string) {
    return this.UserResource.get({name}).$promise;
  }
}

UserServiceClass.$inject = ['$resource', '$http'];

export const UserServiceModule = angular.module('app.services.user', [])
  .service('UserService', UserServiceClass)
  .name;
