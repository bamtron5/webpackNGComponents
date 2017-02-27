export default [
  '$rootScope',
  'UserService',
  '$sessionStorage',
  'SessionService',
  '$state',
  'AUTH_EVENTS',
  function run(
    $rootScope,
    UserService,
    $sessionStorage,
    SessionService,
    $state,
    AUTH_EVENTS
  ) {
    $rootScope.$on('$stateChangeStart', (event, next) => {
      UserService.getCurrentUser().then((user) => {
        $sessionStorage.user = user.data;
      }).catch((user) => {
        $sessionStorage.user = user.data;
      });

      if (next.data) {
        let authorizedRoles = next.data['authorizedRoles'] ? next.data['authorizedRoles'] : false;
        if (authorizedRoles && !SessionService.isAuthorized(authorizedRoles)) {
          event.preventDefault();
          $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
        }
      }
    });
  }
];
