const route = function route($stateProvider) {
  $stateProvider
    .state('dogsList', {
      parent: 'main',
      url: '/dogs-list',
      template: '<dogs-list></dogs-list>'
    });
};

route.$inject = ['$stateProvider'];

export default route;
