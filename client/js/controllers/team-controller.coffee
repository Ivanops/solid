angularModule.controller 'TeamCtrl', ($scope, $location) ->

  $scope.players = []


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

  $scope.back = ->

    $location.path '/'

  validation = (number) ->

    aNumber = parseInt(number)

    if typeof aNumber is 'number' and aNumber < 19
      return true
    else
      return false

  nameReduction = (name) ->

    aName = null

    if name.length > 12

      aName = name.substring 0, 12
    else
      aName = name

    aName

  checkDuplicates = (newItem)->

    for player in $scope.players
      if player.number is newItem.number
        alert $scope.translated.duplicated
        return

    $scope.players.push newItem

  $scope.addPlayer = ->

    if $scope.number and $scope.playerName

      number = $scope.number
      name = $scope.playerName

      if number isnt '' and name isnt ''

        if validation(number)

          name = nameReduction(name)

          player =
            number: number
            name: name

          checkDuplicates(player)
          $scope.number = ''
          $scope.playerName = ''
          return

    $scope.number = ''
    $scope.playerName = ''
    alert $scope.translated.wrongData

  $scope.doneTeam = ->

    if $scope.players

      if $scope.players.length > 0

        owner = prompt $scope.translated.enterName
        if owner
          if owner isnt ''
            if owner.length > 12
              owner = owner.substring 0, 12

            localStorage.setItem 'Team', JSON.stringify $scope.players
            localStorage.setItem 'Owner', owner

        $location.path '/'

