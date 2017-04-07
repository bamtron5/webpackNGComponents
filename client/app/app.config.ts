import * as angular from 'angular';

const Config = [
  '$locationProvider',
  '$stateProvider',
  '$urlRouterProvider',
  '$httpProvider',
  (
    $locationProvider: ng.ILocationProvider,
    $stateProvider: angular.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $httpProvider: ng.IHttpProvider
  ) => {
 
  $stateProvider
    .state('main', {
      url: '',
      abstract: true,
      template: '<layout></layout>',
      resolve: {
        currentSession: ['UserService', '$sessionStorage', '$timeout',
          (UserService, $sessionStorage, $timeout) => {
            return UserService.getCurrentUser().then((user) => {
              $sessionStorage.user = user.data;
              return;
            }).catch((user) => {
              $sessionStorage.user = user.data;
              return;
            });
          }
        ]
      }
    })
    .state('reload', {
      url: '/reload',
      template: 'Reloading... <i class="fa fa-spinner infinite rotateIn"></i>',
      resolve: {
        reload: [
          '$state',
          '$timeout',
          ($state, $timeout) => $timeout(() => $state.go('home', {}, {reload: true, inherit: false, notify: true}), 100)
        ]
      }
    });

  $httpProvider.defaults.withCredentials = true;
  $httpProvider.interceptors.push([
    '$injector',
    function ($injector) {
      return $injector.get('authInterceptor');
    }
  ]);

  $httpProvider.interceptors.push([
    '$injector',
    function ($injector) {
      return $injector.get('tokenIntereptor');
    }
  ]);

  $httpProvider.interceptors.push([
    '$injector',
    function ($injector) {
      return $injector.get('addAuthorization');
    }
  ]);

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true, // because of a karma.conf issue
    rewriteLinks: false
  });

  $urlRouterProvider.otherwise('/');
}];

export default Config;
