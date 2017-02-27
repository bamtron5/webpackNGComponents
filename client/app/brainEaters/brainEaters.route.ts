const route = function route($stateProvider) {
  $stateProvider
    .state('brainEaters', {
      parent: 'main',
      url: '/brain-eaters',
      template: '<brain-eaters></brain-eaters>'
    });
};

route.$inject = ['$stateProvider'];

export default route;
