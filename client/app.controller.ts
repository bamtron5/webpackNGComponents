class AppController {
  public name;
  constructor(
    $stateParams,
    $state
  ) {
    this.name = 'core';
    console.log($stateParams);
    console.log($state);
  }
}

AppController.$inject = ['$stateParams', '$state'];

export default AppController;
