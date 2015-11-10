var APIKEY = '7f72361e4257e404e24102199fee2ef9';
var APPID = '3672105a';
var searchRecipe = 'http://api.yummly.com/v1/api/recipes?_app_id=' + APPID + '&_app_key=' + APIKEY + '&q=';
angular.module('services', [])

.factory('Links', function($http) {
  var getRecipes = function (data) {
    return $http({
      method:'GET',
      url: searchRecipe + data
    })
  };

  // var addRecipes = function () {
  //   return $http({
  //     method:'POST',
  //     url: searchRecipe + data,
  //     data: link
  //   }).then(function(resp) {
  //     return resp.data;
  //   })

  // var getIngredients = function () {
  //   return $http({
  //     method: 'GET',
  //     url: ,
  //   })

  // }

  // var addIngredients = function () {
  //   return $http({
  //     method: 'POST',
  //     url: ,
  //   })
  // };

return {
  getRecipes: getRecipes
}
})