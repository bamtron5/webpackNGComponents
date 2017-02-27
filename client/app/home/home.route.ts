const route = function route($stateProvider) {
  $stateProvider
    .state('home', {
      parent: 'main',
      url: '/',
      template: '<home></home>'
    });
};

route.$inject = ['$stateProvider'];

export default route;
