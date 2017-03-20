class NestedController {
  constructor(
    private $stateParams
  ) {
    console.log(this.$stateParams);
  }
}

NestedController.$inject = [
  '$stateParams'
];

export default NestedController;
