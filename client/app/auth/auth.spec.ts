/// <reference types="jasmine" />
/// <reference types="angular-mocks" />
import AuthController from './auth.controller';

// Do not import twice, just declare
declare var angular: ng.IAngularStatic;

// import controller from './auth.controller';
export default describe('Auth Controller', function() {
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
  let deferred;
  let $httpBackend;
  let promise;
  let resolvedValue;
  let $rootScope;
  let token;
  let response;
  let $state;
  let controller;
  let AUTHENTICATION_STATUS;

  var module = angular.mock.module;
  // DEFINE MODULE MOCKS
  beforeEach(module('app'));

  // COMPONENT MODULE
  beforeEach(module('app.auth'));

  // console.log(module('app.auth')._invokeQueue[0][2][1].controller);

  // DEFINE SERVICE MOCKS
  beforeEach(module(function($provide) {
    let UserServiceMock = {
      login: () => {
        let q = $q.defer();
        return q.promise;
      },

      register: (user: { username: string, password: string, email: string}) => {
        let q = $q.defer();
        return q.promise;
      },

      getCurrentUser: () => {
        let q = $q.defer();
        return q.promise;
      },

      logout: () => {
        let q = $q.defer();
        return q.promise;
      },

      getUser: (name: string) => {
        let q = $q.defer();
        return q.promise;
      }
    };

    $provide.value('UserService', UserServiceMock);
  }));

  // INJECT CONTROLLER w/ $controller, fresh $scope, and services
  beforeEach(inject(
  function (
    _$controller_,
    _$rootScope_,
    _$compile_,
    _UserService_,
    _$q_,
    _$httpBackend_,
    _$state_,
    _AUTHENTICATION_STATUS_
  ) {
    $q = _$q_;
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    UserService = _UserService_;
    $httpBackend = _$httpBackend_;
    $state = _$state_;
    scope = $rootScope.$new();
    AUTHENTICATION_STATUS = _AUTHENTICATION_STATUS_;
    $httpBackend.whenGET(/views.*/).respond(200, '');
    createCtrl = function(login){
      return $controller(AuthController, {
        $scope: scope,
        UserService,
        $state
      });
    };

    scope.$digest();
  }));

  it('should exist', function() {
    let ctrl = createCtrl();
    expect(ctrl).toBeDefined();
  });

  describe('.login method', function() {
    beforeEach(function(){
      $state.go('auth', null, {reload: true, notify: true});

      // NOTE will trigger digest cycle and execute the above
      scope.$apply();

      // NOTE mock promises and new ctrl
      deferred = $q.defer();
      promise = deferred.promise;

      ctrl = new createCtrl();
      ctrl.user = {
        username: 'username',
        password: 'password'
      };
      spyOn(ctrl.$state, 'go').and.callThrough();
      spyOn(ctrl.UserService, 'login').and.returnValue(promise);
      spyOn(ctrl, 'login').and.callThrough();
      ctrl.login(ctrl.user);
    });

    xit('should set thing to false', function () {
      expect(ctrl.thing).toBe(false);
    });

    it('spy should call login', function () {
      expect(ctrl.login).toHaveBeenCalled();
    });

    it('should call UserService.login', function () {
      expect(ctrl.UserService.login).toHaveBeenCalled();
    });

    it('state should set state to home', function () {
      // spyOn($state, 'go');
      deferred.resolve({ message:  AUTHENTICATION_STATUS.success });
      // $q.flush();
      $rootScope.$apply();
      // $httpBackend.flush();
      scope.$digest();
      expect($state.go).toHaveBeenCalledWith('reload');
    });

    xit('should run toastr error on error', function () {
      deferred.reject();
      // $httpBackend.flush();
      // expect(alert).toHaveBeenCalled();
    });
  });
});
