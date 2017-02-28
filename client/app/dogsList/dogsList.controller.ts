import {DogsServiceClass} from '../services/dogs.service';

export class DogsListController {
  public dogs;
  public loaded: boolean = false;
  // host = 'http://giphy.com'
  constructor(
    private DogsService: DogsServiceClass,
    $timeout: ng.ITimeoutService
  ) {
    $timeout(() => {
      this.getDogs();
    }, 2000);
  }

  public getDogs() {
    this.DogsService.getDogs()
      .then((dogs) => {
        this.dogs = dogs.data.data;
      }).catch((e) => {
        console.log(e);
      }).finally(() => {
        this.loaded = true;
      });
  }
}
DogsListController.$inject = ['DogsService', '$timeout'];

export default DogsListController;
