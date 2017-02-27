import * as angular from 'angular';
/// <reference types="angular-toastr" />
class LayoutController {
  user;
  constructor(
    SessionService,
    private UserService,
    private $state:ng.ui.IStateService,
    private toastr
  ) {
    this.user = SessionService.getUser();
  }

  logout() {
    this.UserService.logout()
      .then((response) => {
        this.toastr.info(`${this.user.username} has logged out.`, 'Goodbye')
        this.$state.go('reload');
      })
      .catch((e) => {
        this.toastr.error('Unable to logout.','Error');
      });
  }
}

LayoutController.$inject = [
  'SessionService',
  'UserService',
  '$state',
  'toastr'
];

export default LayoutController;
