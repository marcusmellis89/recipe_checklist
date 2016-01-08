var APIKEY = '74f79c67e773f3a1bb29ae4d2cecc50b';
var APPID = 'd2272e81';
searchRecipe = 'http://api.yummly.com/v1/api/recipes?_app_id=' + APPID + '&_app_key=' + APIKEY + '&q=';
angular.module('services', [])

.factory('Links', function($http) {
	
  var getRecipes = function (data) {
    return $http({
      method:'GET',
      url: searchRecipe + data
    })
  };

  var saveRecipes = function (data) {
  	console.log('inside saveRecipes in factory and data is ', JSON.stringify(data));
    return $http({
      method:'POST',
      // url: searchRecipe + data
      url: '/saverecipe',
      data: {info: data}

    })
  };

  var retrieve = function () {
    return $http({
      method:'GET',
      url: '/retrieve'
    })
  };



  return {
    getRecipes: getRecipes,
    saveRecipes: saveRecipes,
    retrieve: retrieve
  }
})