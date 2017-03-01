/// <reference types="jasmine" />
/// <reference types="angular-mocks" />

// Do not import twice, just declare
declare var angular: ng.IAngularStatic;

import controller from './auth.controller';
describe('Auth Controller', function() {
  let creds;
  let createCtrl;
  let scope;
  let $controller;
  let $compile;
  let fetchedLogin;
  let UserService;
  let $q;
  let login;
  let ctrl;
  let $cookies;
  let deferred;
  let $httpBackend;
  let promise;
  let resolvedValue;
  let $rootScope;
  let token;
  let response;
  let $state;

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
    };

    $provide.value('UserService', UserServiceMock);
    $provide.value('$cookies', $cookiesMock);
  }));

  // INJECT CONTROLLER w/ $controller, fresh $scope, and services
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
