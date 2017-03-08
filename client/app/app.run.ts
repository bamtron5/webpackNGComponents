export default [
  '$rootScope',
  'UserService',
  '$sessionStorage',
  'SessionService',
  '$state',
  'AUTH_EVENTS',
  'toastr',
  function run(
    $rootScope,
    UserService,
    $sessionStorage,
    SessionService,
    $state,
    AUTH_EVENTS,
    toastr
  ) {
    $rootScope.$on('$stateChangeStart', (event, next) => {
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
