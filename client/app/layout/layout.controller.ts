import * as angular from 'angular';

class LayoutController {
  public user;
  constructor(
    private SessionService,
    private UserService,
    private $state: ng.ui.IStateService,
    private toastr,
    private $localStorage
  ) {
    this.user = SessionService.getUser();
  }

  public logout() {
    this.UserService.logout()
      .then((response) => {
        delete this.$localStorage.token;
        this.SessionService.destroy();
        this.toastr.info(`${this.user.username} has logged out.`, 'Goodbye');
        this.$state.go('reload');
      })
      .catch((e) => {
        this.toastr.error('Unable to logout.', 'Error');
      });
  }
}

LayoutController.$inject = [
  'SessionService',
  'UserService',
  '$state',
  'toastr',
  '$localStorage'
];

export default LayoutController;
