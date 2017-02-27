const route = function route($stateProvider) {
  $stateProvider
    .state('d3Demo', {
      parent: 'main',
      url: '/d3Demo',
      template: '<d3-demo></d3-demo>'
    });
};

route.$inject = ['$stateProvider'];

export default route;
