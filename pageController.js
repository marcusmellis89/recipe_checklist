angular.module('recipe_ingredients', [])

.controller('LinksController', function ($scope, Links) {

  $scope.savedRecipes = [];
  // Links.retrieve().success(function(data){

  //       console.log('in success of retrieve in controller and data for');
  //       for(var key in data){
  //         console.log('data['+key+'] is ',data[key]);
  //       } 
         
  //     });
  $scope.init = function(){

    console.log('inside the init function at the top');
    Links.retrieve().success(function(data){

        console.log('in success of retrieve in controller and data for');
        for(var key in data){
          console.log('data['+key+'] is ',data[key]);
        } 

        $scope.savedRecipes = data.data;
         
      });

    console.log('at the bottom of init and saveRecipes is ', $scope.savedRecipes);

  }

  $scope.getLinks = function(data) {
  $scope.recipes = [];
  $scope.links = [];
  $scope.ingredients = [];
  $scope.imgs = [];
    Links.getRecipes(data)
      .success(function(data) {
        console.log('on success api and data is', data);
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

        for(var i=0; i < data.matches.length; i++) {
          if($scope.ingredients.indexOf(data.matches[i].imageUrlsBySize) === -1) {
            $scope.imgs.push(data.matches[i].imageUrlsBySize);
          }
        }      
        $scope.repeatData = $scope.recipes.map(function(value, index) {
          return {
            recipes: value,
            links: $scope.links[index],
            ingredients: $scope.ingredients[index],
            img: $scope.imgs[index],
            saved: $scope.savedRecipes[index]
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

    $scope.saveRecipes = function(data) {
      console.log('in saveRecipes fcn in controller and data is :' + data);

      // for(var key in data){
      //   console.log('data['+key+'] is ',data[key]);
      // }      
      // console.log('in saved recipes and data is :' + data['img'][90]);
      var imgData = data['img'][90];
      var imgUrl = data['links'];
      //instead of pushing to an array I want to insert into mongo
      Links.saveRecipes({image:imgData, url:imgUrl}).success(function(){
        $scope.init();
      })

      // Links.retrieve().success(function(data){

      //   console.log('in success of retrieve in controller and data for');
      //   for(var key in data){
      //     console.log('data['+key+'] is ',data[key]);
      //   } 

      // })

      // $scope.savedRecipes.push({image:imgData, url:imgUrl});
      // $('.saved-recipes').append('  <img class="pic" src=' + imgData + '>  ');
    }
  }

  
})