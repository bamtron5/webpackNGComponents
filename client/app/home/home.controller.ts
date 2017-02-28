import {SessionServiceClass} from '../services/session.service';

class HomeController {
  public title: string;
  public user;
  constructor(
    HOME_CONFIG,
    private SessionService: SessionServiceClass
  ) {
    this.title = HOME_CONFIG.title;
    this.user = SessionService.getUser();
  }
}

HomeController.$inject = [
  'HOME_CONFIG',
  'SessionService'
];

export default HomeController;
