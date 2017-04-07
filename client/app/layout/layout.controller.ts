import * as angular from 'angular';

class LayoutController implements ng.IController {
  public user;
  public $onInit;
  constructor(
    private SessionService,
    private UserService,
    private $state: ng.ui.IStateService,
    private toastr,
    private $localStorage,
    private $cookies
  ) {
    this.$onInit = function() {
      this.user = SessionService.getUser();
    };
  }

  public logout() {
    this.UserService.logout()
      .then((response) => {
        delete this.$localStorage.token;
        this.$cookies.remove('access_token');
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
  '$localStorage',
  '$cookies'
];

export default LayoutController;
