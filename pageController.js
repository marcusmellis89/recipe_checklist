angular.module('recipe_ingredients', [])

.controller('LinksController', function ($scope, Links) {

  $scope.getLinks = function(data) {
  // $scope.recipeGet = '';
  $scope.recipes = [];
  $scope.links = [];
  $scope.ingredients = [];
    Links.getRecipes(data)
      .success(function(data) {
        for(var i = 0; i < data.matches.length; i++) {
          if($scope.recipes.indexOf(data.matches[i].recipeName) === -1) {
          $scope.recipes.push(data.matches[i].recipeName);
          }
        }
        for(var i =0; i < data.matches.length; i++) {
          if($scope.links.indexOf(data.matches[i].id) ===-1) {
            $scope.links.push(data.matches[i].id);
          }
        }
        for(var i=0; i < data.matches.length; i++) {
          if($scope.ingredients.indexOf(data.matches[i].ingredients)=== -1) {
            $scope.ingredients.push(data.matches[i].ingredients);
          }
        }        
        $scope.repeatData = $scope.recipes.map(function(value, index) {
          return {
            recipes: value,
            links: $scope.links[index],
            ingredients: $scope.ingredients[index]
          }
        })
      
      });

    $scope.getIngredients = function(data) {
      $('.ingredient-list').html('');
      console.log('data is: ' + data.ingredients)
      for(var i =0; i < data.ingredients.length; i++) {
          $('.ingredient-list').append('<br>' + '<center>' + '<input type="checkbox" name="ingredient">' + data.ingredients[i] + '</center>' + '</br>');
        // }
      }
    }
  }

  // $scope.addRecipes = function (array) {

  // }
  
})