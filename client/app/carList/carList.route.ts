const route = function route($stateProvider) {
  $stateProvider
    .state('carList', {
      parent: 'main',
      url: '/car-list',
      template: '<car-list></car-list>'
    });
};

route.$inject = ['$stateProvider'];

export default route;
