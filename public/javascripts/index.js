(function(){
  'use strict';

  angular.module('myapp', [])
  .controller('IndexController', ['$scope', function($scope){
    $scope.name="Wiley";
  }]);
})();