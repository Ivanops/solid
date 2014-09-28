
window.angularModule = angular.module 'StatApp', ['ngRoute', 'ngResource']

angularModule.config ($routeProvider) ->
  $routeProvider.when('/', {

    templateUrl: '/menu'
    controller: 'MenuCtrl'
  })
  .when( '/team', {

      templateUrl: '/team'
      controller: 'TeamCtrl'

    })
  .when( '/match', {

      templateUrl: '/match'
      controller: 'MatchCtrl'

    })
  .otherwise {redirect: '/'}

  return
