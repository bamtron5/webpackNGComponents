import * as angular from 'angular';
/// <reference types="angular-toastr" />
class LayoutController {
  user;
  constructor(
    SessionService,
    private UserService,
    private $window,
    private $state:ng.ui.IStateService,
    private toastr
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
  '$state',
  'toastr'
];

export default LayoutController;
