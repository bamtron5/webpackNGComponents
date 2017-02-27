class LayoutController {
  user;
  constructor(
    SessionService,
    private UserService,
    private $window,
    private $state:ng.ui.IStateService
  ) {
    this.user = SessionService.getUser();
  }

  logout() {
    this.UserService.logout()
      .then((response) => {
        this.$window.location.href = '/';
      })
      .catch((e) => {
        console.log(e);
      });
  }
}

LayoutController.$inject = [
  'SessionService',
  'UserService',
  '$window',
  '$state'
];

export default LayoutController;
