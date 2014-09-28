angularModule.controller 'MenuCtrl', ($scope, $location) ->



  $scope.translate = ->
    if window.TRANSLATE
      window.TRANSLATE = false
      localStorage.setItem 'Translate', window.TRANSLATE
      refreshTranslate()
    else
      window.TRANSLATE = true
      localStorage.setItem 'Translate', window.TRANSLATE
      refreshTranslate()


  refreshTranslate = ->
    if window.TRANSLATE
      $scope.translated = SPANISH
    else
      $scope.translated = ENGLISH

  refreshTranslate()
  $scope.name = $scope.translated.newMember

  load = ->

    if localStorage.getItem 'Owner'

      $scope.name = localStorage.getItem 'Owner'

  load()

  $scope.createTeam = ->

    if localStorage.getItem 'Owner'

      newTeam = confirm $scope.translated.createNewTeam

      if newTeam

        $location.path '/team'

    else

      $location.path '/team'


  $scope.startMatch = ->

    if localStorage.getItem 'Owner'

      $location.path '/match'
