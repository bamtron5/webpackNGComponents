import * as angular from 'angular';

function authInterceptor($rootScope, $q, AUTH_EVENTS) {
  return {
    responseError: function (response) {
      console.log(response);
      $rootScope.$broadcast({
        401: AUTH_EVENTS.notAuthenticated,
        403: AUTH_EVENTS.notAuthorized,
        419: AUTH_EVENTS.sessionTimeout,
        440: AUTH_EVENTS.sessionTimeout
      }[response.status], response);
      return $q.reject(response);
    }
  }
}

authInterceptor.$inject = ['$rootScope', '$q', 'AUTH_EVENTS'];

export default angular.module('app.interceptor', [])
  .factory('authInterceptor', authInterceptor)
  .name;
