'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', function ($scope) {

    $scope.things = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.add = function(){
    	console.log('agregar');
    };

  });
