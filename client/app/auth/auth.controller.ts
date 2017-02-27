import {UserServiceClass} from '../services/user.service';

export class AuthController {
  user;
  constructor(
    private UserService:UserServiceClass,
    private AUTHENTICATION_STATUS,
    private $state:ng.ui.IStateService
  ) {

  }

  login() {
    this.UserService.login(this.user)
      .then((response) => {
        if (response.message === this.AUTHENTICATION_STATUS.success) {
          this.$state.go('reload');
        } else {
          //toastr response
        }
      }).catch((e) => {
        console.log(e);
      });
  }
}
AuthController.$inject = ['UserService', 'AUTHENTICATION_STATUS', '$state'];


export default AuthController;
