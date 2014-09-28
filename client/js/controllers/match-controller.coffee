angularModule.controller 'MatchCtrl', ($scope) ->

  $scope.teamMap = {}
  $scope.showPlayer = {}


  $scope.matchScore = {}
  $scope.matchScore.we = 0
  $scope.matchScore.them = 0

  $scope.teamError = ->
    $scope.matchScore.them++


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

  $scope.changePlayer = (playerNumber) ->
    $scope.teamMap[$scope.showPlayer.number] = $scope.showPlayer
    $scope.showPlayer = $scope.teamMap[playerNumber]

  load = ->
    $scope.team = JSON.parse(localStorage.getItem 'Team')
    if $scope.team
      for player in $scope.team
        playerStats =
          number: player.number
          name: player.name
          spike:
            point: 0
            normal: 0
            error: 0
            total:
              pos: 0
              neg: 0
          block:
            point: 0
            normal: 0
            error: 0
            total:
              pos: 0
              neg: 0
          service:
            point: 0
            normal: 0
            error: 0
            total:
              pos: 0
              neg: 0
          pass:
            perfect: 0
            normal: 0
            error: 0
            total:
              pos: 0
              neg: 0
          set:
            perfect: 0
            normal: 0
            error: 0
            total:
              pos: 0
              neg: 0
          dig:
            perfect: 0
            normal: 0
            error: 0
            total:
              pos: 0
              neg: 0


        $scope.teamMap[player.number] = playerStats
        $scope.showPlayer = $scope.teamMap[$scope.team[0].number]


  load()
  total = (a, b, c) ->

    a + b + c

  $scope.addSpikePoint = ->
    $scope.showPlayer.spike.point++
    a = $scope.showPlayer.spike.point
    b = $scope.showPlayer.spike.normal
    c = $scope.showPlayer.spike.error

    totalRes = total(a, b, c)
    pos = a / totalRes * 100
    neg = c / totalRes * 100
    $scope.showPlayer.spike.total.pos = pos|0
    $scope.showPlayer.spike.total.neg = neg|0

    $scope.matchScore.we++

  $scope.addSpikeNormal = ->
    $scope.showPlayer.spike.normal++
    a = $scope.showPlayer.spike.point
    b = $scope.showPlayer.spike.normal
    c = $scope.showPlayer.spike.error

    totalRes = total(a, b, c)
    pos = a / totalRes * 100
    neg = c / totalRes * 100
    $scope.showPlayer.spike.total.pos = pos|0
    $scope.showPlayer.spike.total.neg = neg|0

  $scope.addSpikeError = ->
    $scope.showPlayer.spike.error++
    a = $scope.showPlayer.spike.point
    b = $scope.showPlayer.spike.normal
    c = $scope.showPlayer.spike.error

    totalRes = total(a, b, c)
    pos = a / totalRes * 100
    neg = c / totalRes * 100
    $scope.showPlayer.spike.total.pos = pos|0
    $scope.showPlayer.spike.total.neg = neg|0

    $scope.matchScore.them++

  $scope.addBlockPoint = ->
    $scope.showPlayer.block.point++
    a = $scope.showPlayer.block.point
    b = $scope.showPlayer.block.normal
    c = $scope.showPlayer.block.error

    totalRes = total(a, b, c)
    pos = a / totalRes * 100
    neg = c / totalRes * 100
    $scope.showPlayer.block.total.pos = pos|0
    $scope.showPlayer.block.total.neg = neg|0

    $scope.matchScore.we++

  $scope.addBlockNormal = ->
    $scope.showPlayer.block.normal++
    a = $scope.showPlayer.block.point
    b = $scope.showPlayer.block.normal
    c = $scope.showPlayer.block.error

    totalRes = total(a, b, c)
    pos = a / totalRes * 100
    neg = c / totalRes * 100
    $scope.showPlayer.block.total.pos = pos|0
    $scope.showPlayer.block.total.neg = neg|0

  $scope.addBlockError = ->
    $scope.showPlayer.block.error++
    a = $scope.showPlayer.block.point
    b = $scope.showPlayer.block.normal
    c = $scope.showPlayer.block.error

    totalRes = total(a, b, c)
    pos = a / totalRes * 100
    neg = c / totalRes * 100
    $scope.showPlayer.block.total.pos = pos|0
    $scope.showPlayer.block.total.neg = neg|0

    $scope.matchScore.them++

  $scope.addServicePoint = ->
    $scope.showPlayer.service.point++
    a = $scope.showPlayer.service.point
    b = $scope.showPlayer.service.normal
    c = $scope.showPlayer.service.error

    totalRes = total(a, b, c)
    pos = a / totalRes * 100
    neg = c / totalRes * 100
    $scope.showPlayer.service.total.pos = pos|0
    $scope.showPlayer.service.total.neg = neg|0

    $scope.matchScore.we++

  $scope.addServiceNormal = ->
    $scope.showPlayer.service.normal++
    a = $scope.showPlayer.service.point
    b = $scope.showPlayer.service.normal
    c = $scope.showPlayer.service.error

    totalRes = total(a, b, c)
    pos = a / totalRes * 100
    neg = c / totalRes * 100
    $scope.showPlayer.service.total.pos = pos|0
    $scope.showPlayer.service.total.neg = neg|0

  $scope.addServiceError = ->
    $scope.showPlayer.service.error++
    a = $scope.showPlayer.service.point
    b = $scope.showPlayer.service.normal
    c = $scope.showPlayer.service.error

    totalRes = total(a, b, c)
    pos = a / totalRes * 100
    neg = c / totalRes * 100
    $scope.showPlayer.service.total.pos = pos|0
    $scope.showPlayer.service.total.neg = neg|0

    $scope.matchScore.them++

  $scope.addSetPerfect = ->
    $scope.showPlayer.set.perfect++
    a = $scope.showPlayer.set.perfect
    b = $scope.showPlayer.set.normal
    c = $scope.showPlayer.set.error

    totalRes = total(a, b, c)
    pos = a / totalRes * 100
    neg = c / totalRes * 100
    $scope.showPlayer.set.total.pos = pos|0
    $scope.showPlayer.set.total.neg = neg|0

  $scope.addSetNormal = ->
    $scope.showPlayer.set.normal++
    a = $scope.showPlayer.set.perfect
    b = $scope.showPlayer.set.normal
    c = $scope.showPlayer.set.error

    totalRes = total(a, b, c)
    pos = a / totalRes * 100
    neg = c / totalRes * 100
    $scope.showPlayer.set.total.pos = pos|0
    $scope.showPlayer.set.total.neg = neg|0

  $scope.addSetError = ->
    $scope.showPlayer.set.error++
    a = $scope.showPlayer.set.perfect
    b = $scope.showPlayer.set.normal
    c = $scope.showPlayer.set.error

    totalRes = total(a, b, c)
    pos = a / totalRes * 100
    neg = c / totalRes * 100
    $scope.showPlayer.set.total.pos = pos|0
    $scope.showPlayer.set.total.neg = neg|0

    $scope.matchScore.them++

  $scope.addPassPerfect = ->
    $scope.showPlayer.pass.perfect++
    a = $scope.showPlayer.pass.perfect
    b = $scope.showPlayer.pass.normal
    c = $scope.showPlayer.pass.error

    totalRes = total(a, b, c)
    pos = a / totalRes * 100
    neg = c / totalRes * 100
    $scope.showPlayer.pass.total.pos = pos|0
    $scope.showPlayer.pass.total.neg = neg|0

  $scope.addPassNormal = ->
    $scope.showPlayer.pass.normal++
    a = $scope.showPlayer.pass.perfect
    b = $scope.showPlayer.pass.normal
    c = $scope.showPlayer.pass.error

    totalRes = total(a, b, c)
    pos = a / totalRes * 100
    neg = c / totalRes * 100
    $scope.showPlayer.pass.total.pos = pos|0
    $scope.showPlayer.pass.total.neg = neg|0

  $scope.addPassError = ->
    $scope.showPlayer.pass.error++
    a = $scope.showPlayer.pass.perfect
    b = $scope.showPlayer.pass.normal
    c = $scope.showPlayer.pass.error

    totalRes = total(a, b, c)
    pos = a / totalRes * 100
    neg = c / totalRes * 100
    $scope.showPlayer.pass.total.pos = pos|0
    $scope.showPlayer.pass.total.neg = neg|0

    $scope.matchScore.them++

  $scope.addDigPerfect = ->
    $scope.showPlayer.dig.perfect++
    a = $scope.showPlayer.dig.perfect
    b = $scope.showPlayer.dig.normal
    c = $scope.showPlayer.dig.error

    totalRes = total(a, b, c)
    pos = a / totalRes * 100
    neg = c / totalRes * 100
    $scope.showPlayer.dig.total.pos = pos|0
    $scope.showPlayer.dig.total.neg = neg|0

  $scope.addDigNormal = ->
    $scope.showPlayer.dig.normal++
    a = $scope.showPlayer.dig.perfect
    b = $scope.showPlayer.dig.normal
    c = $scope.showPlayer.dig.error

    totalRes = total(a, b, c)
    pos = a / totalRes * 100
    neg = c / totalRes * 100
    $scope.showPlayer.dig.total.pos = pos|0
    $scope.showPlayer.dig.total.neg = neg|0

  $scope.addDigError = ->
    $scope.showPlayer.dig.error++
    a = $scope.showPlayer.dig.perfect
    b = $scope.showPlayer.dig.normal
    c = $scope.showPlayer.dig.error

    totalRes = total(a, b, c)
    pos = a / totalRes * 100
    neg = c / totalRes * 100
    $scope.showPlayer.dig.total.pos = pos|0
    $scope.showPlayer.dig.total.neg = neg|0

    $scope.matchScore.them++
