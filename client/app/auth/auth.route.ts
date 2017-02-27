const route = function route($stateProvider) {
  $stateProvider
    .state('auth', {
      parent: 'main',
      url: '/auth',
      template: '<auth></auth>'
    });
};

route.$inject = ['$stateProvider'];

export default route;
