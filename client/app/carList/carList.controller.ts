import {CarServiceC} from '../services/car.service';

export class CarListController {
  public cars;
  public query = {};
  public test = '12345';
  constructor(
    private CarService: CarServiceC,
    private toastr
  ) {

  }

  public getCars() {
    this.CarService.getCars(this.query)
      .then((cars) => {
        this.cars = cars;
      }).catch((e) => {
        this.toastr.error('Unable to retrieve cars.', 'Error');
      });
  }
}
CarListController.$inject = ['CarService', 'toastr'];

export default CarListController;
