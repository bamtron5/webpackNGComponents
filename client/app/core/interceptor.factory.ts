import * as angular from 'angular';

function authInterceptor($rootScope, $q, AUTH_EVENTS) {
  return {
    responseError: function responseError (response) {
      let selection = {
        401: AUTH_EVENTS.notAuthenticated,
        403: AUTH_EVENTS.notAuthorized,
        419: AUTH_EVENTS.sessionTimeout,
        440: AUTH_EVENTS.sessionTimeout
      }[ response.status ];

      $rootScope.$broadcast(selection, response);
      return $q.reject(response);
    }
  };
}
authInterceptor.$inject = ['$rootScope', '$q', 'AUTH_EVENTS'];

function tokenIntereptor($rootScope, $q, $localStorage) {
  return {
    response: function response (result) {
      if (result['data'].token) {
        $localStorage.token = result['data'].token;
      }
      return $q.resolve(result);
    }
  };
}
tokenIntereptor.$inject = ['$rootScope', '$q', '$localStorage'];

function addAuthorization($rootScope, $q, $localStorage) {
  return {
    request: function response (config) {
      if ($localStorage['token']) {
        config.headers['Authorization'] = `JWT ${$localStorage['token']}`;
      }
      return $q.resolve(config);
    }
  };
}
addAuthorization.$inject = ['$rootScope', '$q', '$localStorage'];

export default angular.module('app.interceptor', [])
  .factory('authInterceptor', authInterceptor)
  .factory('tokenIntereptor', tokenIntereptor)
  .factory('addAuthorization', addAuthorization)
  .name;
