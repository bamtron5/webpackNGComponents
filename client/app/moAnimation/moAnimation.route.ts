const route = function route($stateProvider) {
  $stateProvider
    .state('moAnimation', {
      parent: 'main',
      url: '/mo-antimation',
      template: '<mo-animation></mo-animation>',
      data: {
        authorizedRoles: ['admin']
      }
    });
};

route.$inject = ['$stateProvider'];

export default route;
