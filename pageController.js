angular.module('recipe_ingredients');

.controller('LinksController', function ($scope, Links) {
  $scope.getLinks = function() {
    console.log('hello');
    return 'blah';
  }
})