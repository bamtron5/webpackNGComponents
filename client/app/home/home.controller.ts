import {SessionServiceClass} from '../services/session.service';

class HomeController {
  public title: string;
  public user;
  constructor(
    HOME_CONFIG,
    private SessionService: SessionServiceClass,
    private $stateParams
  ) {
    this.title = HOME_CONFIG.title;
    this.user = SessionService.getUser();
    console.log(this.$stateParams);
  }
}

HomeController.$inject = [
  'HOME_CONFIG',
  'SessionService'
];

export default HomeController;
