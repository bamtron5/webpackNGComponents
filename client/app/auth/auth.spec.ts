/// <reference types="jasmine" />
/// <reference types="angular" />

import controller from './auth.controller';
describe('Auth Controller', function() {
  var creds,
  createCtrl,
  scope,
  $controller,
  $compile,
  fetchedLogin,
  UserService,
  $q,
  login,
  ctrl,
  $cookies,
  deferred,
  $httpBackend,
  promise,
  resolvedValue,
  $rootScope,
  token,
  response,
  $state;

  var module = angular.mock.module;
  // DEFINE MODULE MOCKS
  beforeEach(angular.mock.module('app'));

  // DEFINE SERVICE MOCKS
  beforeEach(module(function($provide) {
    let UserServiceMock = {
      login: () => {
        let q = $q.defer();
        return q.promise;
      }
    };

    let $cookiesMock = {
      get: () => {},
      set: () => {},
      put: () => {}
    }

    $provide.value('UserService', UserServiceMock);
    $provide.value('$cookies', $cookiesMock);
  }));

  //INJECT CONTROLLER w/ $controller, fresh $scope, and services
  beforeEach(inject(
  function (
    _$controller_,
    _$rootScope_,
    _$compile_,
    _UserService_,
    _$cookies_,
    _$q_,
    _$httpBackend_,
    _$state_
  ) {
    $q = _$q_;
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    UserService = _UserService_;
    $cookies = _$cookies_;
    $httpBackend = _$httpBackend_;
    $state = _$state_;
    scope = $rootScope.$new();
    $httpBackend.whenGET(/views.*/).respond(200, '');
    createCtrl = function(login){
      return $controller(controller, {
        $scope: scope,
        UserService: UserService,
        $cookies: $cookies
      });
    }
    token = 'faketoken';
    creds = {username: 'username', password: 'password'};
    scope.$digest();
  }));

  it('should exist', function() {
    let ctrl = createCtrl();
    expect(ctrl).toBeDefined();
  });
});
