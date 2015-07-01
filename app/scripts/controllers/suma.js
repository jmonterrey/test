'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('SumaCtrl', function ($scope) {

    $scope.things = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.persona = {
      nombre: '',
      edadmax: 88,
      edadmin: 1
    };

    $scope.a1 = 5;
    $scope.a2 = 8;

    $scope.add = function(){
      console.log($scope.persona);
    };

  });