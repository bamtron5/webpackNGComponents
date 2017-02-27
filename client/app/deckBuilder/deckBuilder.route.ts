const route = function route($stateProvider) {
  $stateProvider
    .state('deckBuilder', {
      parent: 'main',
      url: '/deck-builder',
      template: '<deck-builder></deck-builder>'
    });
};

route.$inject = ['$stateProvider'];

export default route;
