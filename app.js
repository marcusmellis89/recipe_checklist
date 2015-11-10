angular.module('yummly', ['services', 'recipe_ingredients', 'ngRoute', 'ngResource'])

.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'index.html',
    controller: 'LinksController'
  })
})

