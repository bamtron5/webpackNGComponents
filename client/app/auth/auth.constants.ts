import * as angular from 'angular';

export default angular.module('app.auth.constants', [])
  .constant('AUTHENTICATION_STATUS', {
    success: 'login successful'
  })
  .name;
