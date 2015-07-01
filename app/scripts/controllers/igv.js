'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('IGVCtrl', function ($scope) {


    $scope.ProductsAdition = function(){
      var sumaTotal = $scope.p1 + $scope.p2 + $scope.p3;
      var v_igv = sumaTotal*0.18;
      var v_monto = sumaTotal-v_igv;
      $scope.igv=v_igv;
      $scope.monto=v_monto;

    };

  });