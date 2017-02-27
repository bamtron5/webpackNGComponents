import * as angular from 'angular';

const Config = [
  '$locationProvider',
  '$stateProvider',
  '$urlRouterProvider',
  '$httpProvider',
  (
    $locationProvider:ng.ILocationProvider,
    $stateProvider:angular.ui.IStateProvider,
    $urlRouterProvider:ng.ui.IUrlRouterProvider,
    $httpProvider:ng.IHttpProvider
  ) => {

  $stateProvider
    .state('main', {
      url: '',
      abstract: true,
      template: '<layout></layout>'
    })

  $httpProvider.interceptors.push([
    '$injector',
    function ($injector) {
      return $injector.get('authInterceptor');
    }
  ]);
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}];

export default Config;
