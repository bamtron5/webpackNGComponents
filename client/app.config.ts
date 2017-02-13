const Config = ['$locationProvider', '$stateProvider', ($locationProvider, $stateProvider) => {
  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    })

  $locationProvider.html5Mode(true);
}];

export default Config;
