import {UserServiceClass} from '../services/user.service';

export class AuthController {
  public user;
  public newUser;
  constructor(
    private UserService: UserServiceClass,
    private AUTHENTICATION_STATUS,
    private $state: ng.ui.IStateService,
    private toastr
  ) {

  }
  public register () {
    this.UserService.register(this.newUser)
      .then((response) => {
        this.toastr.success(`Please sign in ${this.newUser.username}`, `Fantastic.`);

      })
      .catch((e) => {
        this.toastr.warning(`${e.message}`, `Nope.`);
      });
  }
  public login() {
    this.UserService.login(this.user)
      .then((response) => {
        if (response.message === this.AUTHENTICATION_STATUS.success) {
          this.toastr.success(`Welcome, ${this.user.username}`, this.AUTHENTICATION_STATUS.success);
          this.$state.go('reload');
        } else {
          this.toastr.error('Your credentials are wrong.', 'Error');
        }
      }).catch((e) => {
        this.toastr.error('Authentication failed.', 'Error:401');
      });
  }
}
AuthController.$inject = ['UserService', 'AUTHENTICATION_STATUS', '$state', 'toastr'];

export default AuthController;
