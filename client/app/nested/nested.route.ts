const route = function route($stateProvider) {
  $stateProvider
    .state('nested', {
      parent: 'main',
      url: '/nested/:type/:id',
      template: '<nested></nested>'
    });
};
route.$inject = ['$stateProvider'];

export default route;
