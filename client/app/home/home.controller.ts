import {SessionServiceClass} from '../services/session.service';

class HomeController {
  title:string;
  user;
  constructor(
    HOME_CONFIG,
    private SessionService:SessionServiceClass
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
