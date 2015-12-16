var APIKEY = '74f79c67e773f3a1bb29ae4d2cecc50b';
var APPID = 'd2272e81';
var searchRecipe = 'http://api.yummly.com/v1/api/recipes?_app_id=' + APPID + '&_app_key=' + APIKEY + '&q=';
angular.module('services', [])

.factory('Links', function($http) {
  var getRecipes = function (data) {
    return $http({
      method:'GET',
      url: searchRecipe + data
    })
  };

  return {
    getRecipes: getRecipes
  }
})