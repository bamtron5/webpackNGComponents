import * as angular from 'angular';
export default [
  '$rootScope',
  'UserService',
  '$sessionStorage',
  'SessionService',
  '$state',
  'AUTH_EVENTS',
  'toastr',
  '$localStorage',
  function run(
    $rootScope,
    UserService,
    $sessionStorage,
    SessionService,
    $state,
    AUTH_EVENTS,
    toastr,
    $localStorage
  ) {
    $rootScope.$on('$stateChangeStart', (event, next) => {
      UserService.getCurrentUser().then((user) => {
        $sessionStorage.user = user.data;
        !user.data['username'] ? $localStorage['token'] = {} : angular.noop();
      }).catch((user) => {
        $sessionStorage.user = user.data;
        !user.data['username'] ? $localStorage['token'] = {} : angular.noop();
      });

      if (next.data) {
        let authorizedRoles = next.data['authorizedRoles'] ? next.data['authorizedRoles'] : false;
        if (authorizedRoles && !SessionService.isAuthorized(authorizedRoles)) {
          event.preventDefault();
          toastr.warning('I can\'t let you do that.', `I'm sorry Michael`);
        }
      }
    });
  }
];
