const route = function route($stateProvider) {
  $stateProvider
    .state('moAnimation', {
      parent: 'main',
      url: '/mo-antimation',
      template: '<mo-animation></mo-animation>'
    });
};

route.$inject = ['$stateProvider'];

export default route;
