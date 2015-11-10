angular.module('recipe_ingredients', [])

.controller('LinksController', function ($scope, Links) {
  $scope.formData = {};
  $scope.recipeGet = '';
  $scope.recipes = [];
  $scope.links = []

  $scope.getLinks = function(data) {
    console.log('data is:' + data);
    console.log('are you inside?')
    // $scope.formData.
    Links.getRecipes(data)
      .success(function(data) {
        for(var i = 0; i < data.matches.length; i++) {
          if($scope.recipes.indexOf(data.matches[i].recipeName) === -1) {
          $scope.recipes.push(data.matches[i].recipeName);
          console.log('scope recipes is currently:', $scope.recipes)
          }
        }
        for(var i =0; i < data.matches.length; i++) {
          if($scope.recipes.indexOf(data.matches[i].id) ===-1) {
            $scope.links.push(data.matches[i].id);
          }
        }
        console.log($scope.links);
      });
  }

  // $scope.addRecipes = function (array) {

  // }
  
})