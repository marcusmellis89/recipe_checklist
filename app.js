angular.module('yummly', ['services', 'recipe_ingredients', 'ngRoute'])

.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'index.html',
    controller: 'LinksController'
  })
})

