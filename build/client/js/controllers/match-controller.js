angularModule.controller('MatchCtrl', function($scope) {
  var load, refreshTranslate, total;
  $scope.teamMap = {};
  $scope.showPlayer = {};
  $scope.matchScore = {};
  $scope.matchScore.we = 0;
  $scope.matchScore.them = 0;
  $scope.teamError = function() {
    return $scope.matchScore.them++;
  };
  $scope.translate = function() {
    if (window.TRANSLATE) {
      window.TRANSLATE = false;
      localStorage.setItem('Translate', window.TRANSLATE);
      return refreshTranslate();
    } else {
      window.TRANSLATE = true;
      localStorage.setItem('Translate', window.TRANSLATE);
      return refreshTranslate();
    }
  };
  refreshTranslate = function() {
    if (window.TRANSLATE) {
      return $scope.translated = SPANISH;
    } else {
      return $scope.translated = ENGLISH;
    }
  };
  refreshTranslate();
  $scope.changePlayer = function(playerNumber) {
    $scope.teamMap[$scope.showPlayer.number] = $scope.showPlayer;
    return $scope.showPlayer = $scope.teamMap[playerNumber];
  };
  load = function() {
    var player, playerStats, _i, _len, _ref, _results;
    $scope.team = JSON.parse(localStorage.getItem('Team'));
    if ($scope.team) {
      _ref = $scope.team;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        player = _ref[_i];
        playerStats = {
          number: player.number,
          name: player.name,
          spike: {
            point: 0,
            normal: 0,
            error: 0,
            total: {
              pos: 0,
              neg: 0
            }
          },
          block: {
            point: 0,
            normal: 0,
            error: 0,
            total: {
              pos: 0,
              neg: 0
            }
          },
          service: {
            point: 0,
            normal: 0,
            error: 0,
            total: {
              pos: 0,
              neg: 0
            }
          },
          pass: {
            perfect: 0,
            normal: 0,
            error: 0,
            total: {
              pos: 0,
              neg: 0
            }
          },
          set: {
            perfect: 0,
            normal: 0,
            error: 0,
            total: {
              pos: 0,
              neg: 0
            }
          },
          dig: {
            perfect: 0,
            normal: 0,
            error: 0,
            total: {
              pos: 0,
              neg: 0
            }
          }
        };
        $scope.teamMap[player.number] = playerStats;
        _results.push($scope.showPlayer = $scope.teamMap[$scope.team[0].number]);
      }
      return _results;
    }
  };
  load();
  total = function(a, b, c) {
    return a + b + c;
  };
  $scope.addSpikePoint = function() {
    var a, b, c, neg, pos, totalRes;
    $scope.showPlayer.spike.point++;
    a = $scope.showPlayer.spike.point;
    b = $scope.showPlayer.spike.normal;
    c = $scope.showPlayer.spike.error;
    totalRes = total(a, b, c);
    pos = a / totalRes * 100;
    neg = c / totalRes * 100;
    $scope.showPlayer.spike.total.pos = pos | 0;
    $scope.showPlayer.spike.total.neg = neg | 0;
    return $scope.matchScore.we++;
  };
  $scope.addSpikeNormal = function() {
    var a, b, c, neg, pos, totalRes;
    $scope.showPlayer.spike.normal++;
    a = $scope.showPlayer.spike.point;
    b = $scope.showPlayer.spike.normal;
    c = $scope.showPlayer.spike.error;
    totalRes = total(a, b, c);
    pos = a / totalRes * 100;
    neg = c / totalRes * 100;
    $scope.showPlayer.spike.total.pos = pos | 0;
    return $scope.showPlayer.spike.total.neg = neg | 0;
  };
  $scope.addSpikeError = function() {
    var a, b, c, neg, pos, totalRes;
    $scope.showPlayer.spike.error++;
    a = $scope.showPlayer.spike.point;
    b = $scope.showPlayer.spike.normal;
    c = $scope.showPlayer.spike.error;
    totalRes = total(a, b, c);
    pos = a / totalRes * 100;
    neg = c / totalRes * 100;
    $scope.showPlayer.spike.total.pos = pos | 0;
    $scope.showPlayer.spike.total.neg = neg | 0;
    return $scope.matchScore.them++;
  };
  $scope.addBlockPoint = function() {
    var a, b, c, neg, pos, totalRes;
    $scope.showPlayer.block.point++;
    a = $scope.showPlayer.block.point;
    b = $scope.showPlayer.block.normal;
    c = $scope.showPlayer.block.error;
    totalRes = total(a, b, c);
    pos = a / totalRes * 100;
    neg = c / totalRes * 100;
    $scope.showPlayer.block.total.pos = pos | 0;
    $scope.showPlayer.block.total.neg = neg | 0;
    return $scope.matchScore.we++;
  };
  $scope.addBlockNormal = function() {
    var a, b, c, neg, pos, totalRes;
    $scope.showPlayer.block.normal++;
    a = $scope.showPlayer.block.point;
    b = $scope.showPlayer.block.normal;
    c = $scope.showPlayer.block.error;
    totalRes = total(a, b, c);
    pos = a / totalRes * 100;
    neg = c / totalRes * 100;
    $scope.showPlayer.block.total.pos = pos | 0;
    return $scope.showPlayer.block.total.neg = neg | 0;
  };
  $scope.addBlockError = function() {
    var a, b, c, neg, pos, totalRes;
    $scope.showPlayer.block.error++;
    a = $scope.showPlayer.block.point;
    b = $scope.showPlayer.block.normal;
    c = $scope.showPlayer.block.error;
    totalRes = total(a, b, c);
    pos = a / totalRes * 100;
    neg = c / totalRes * 100;
    $scope.showPlayer.block.total.pos = pos | 0;
    $scope.showPlayer.block.total.neg = neg | 0;
    return $scope.matchScore.them++;
  };
  $scope.addServicePoint = function() {
    var a, b, c, neg, pos, totalRes;
    $scope.showPlayer.service.point++;
    a = $scope.showPlayer.service.point;
    b = $scope.showPlayer.service.normal;
    c = $scope.showPlayer.service.error;
    totalRes = total(a, b, c);
    pos = a / totalRes * 100;
    neg = c / totalRes * 100;
    $scope.showPlayer.service.total.pos = pos | 0;
    $scope.showPlayer.service.total.neg = neg | 0;
    return $scope.matchScore.we++;
  };
  $scope.addServiceNormal = function() {
    var a, b, c, neg, pos, totalRes;
    $scope.showPlayer.service.normal++;
    a = $scope.showPlayer.service.point;
    b = $scope.showPlayer.service.normal;
    c = $scope.showPlayer.service.error;
    totalRes = total(a, b, c);
    pos = a / totalRes * 100;
    neg = c / totalRes * 100;
    $scope.showPlayer.service.total.pos = pos | 0;
    return $scope.showPlayer.service.total.neg = neg | 0;
  };
  $scope.addServiceError = function() {
    var a, b, c, neg, pos, totalRes;
    $scope.showPlayer.service.error++;
    a = $scope.showPlayer.service.point;
    b = $scope.showPlayer.service.normal;
    c = $scope.showPlayer.service.error;
    totalRes = total(a, b, c);
    pos = a / totalRes * 100;
    neg = c / totalRes * 100;
    $scope.showPlayer.service.total.pos = pos | 0;
    $scope.showPlayer.service.total.neg = neg | 0;
    return $scope.matchScore.them++;
  };
  $scope.addSetPerfect = function() {
    var a, b, c, neg, pos, totalRes;
    $scope.showPlayer.set.perfect++;
    a = $scope.showPlayer.set.perfect;
    b = $scope.showPlayer.set.normal;
    c = $scope.showPlayer.set.error;
    totalRes = total(a, b, c);
    pos = a / totalRes * 100;
    neg = c / totalRes * 100;
    $scope.showPlayer.set.total.pos = pos | 0;
    return $scope.showPlayer.set.total.neg = neg | 0;
  };
  $scope.addSetNormal = function() {
    var a, b, c, neg, pos, totalRes;
    $scope.showPlayer.set.normal++;
    a = $scope.showPlayer.set.perfect;
    b = $scope.showPlayer.set.normal;
    c = $scope.showPlayer.set.error;
    totalRes = total(a, b, c);
    pos = a / totalRes * 100;
    neg = c / totalRes * 100;
    $scope.showPlayer.set.total.pos = pos | 0;
    return $scope.showPlayer.set.total.neg = neg | 0;
  };
  $scope.addSetError = function() {
    var a, b, c, neg, pos, totalRes;
    $scope.showPlayer.set.error++;
    a = $scope.showPlayer.set.perfect;
    b = $scope.showPlayer.set.normal;
    c = $scope.showPlayer.set.error;
    totalRes = total(a, b, c);
    pos = a / totalRes * 100;
    neg = c / totalRes * 100;
    $scope.showPlayer.set.total.pos = pos | 0;
    $scope.showPlayer.set.total.neg = neg | 0;
    return $scope.matchScore.them++;
  };
  $scope.addPassPerfect = function() {
    var a, b, c, neg, pos, totalRes;
    $scope.showPlayer.pass.perfect++;
    a = $scope.showPlayer.pass.perfect;
    b = $scope.showPlayer.pass.normal;
    c = $scope.showPlayer.pass.error;
    totalRes = total(a, b, c);
    pos = a / totalRes * 100;
    neg = c / totalRes * 100;
    $scope.showPlayer.pass.total.pos = pos | 0;
    return $scope.showPlayer.pass.total.neg = neg | 0;
  };
  $scope.addPassNormal = function() {
    var a, b, c, neg, pos, totalRes;
    $scope.showPlayer.pass.normal++;
    a = $scope.showPlayer.pass.perfect;
    b = $scope.showPlayer.pass.normal;
    c = $scope.showPlayer.pass.error;
    totalRes = total(a, b, c);
    pos = a / totalRes * 100;
    neg = c / totalRes * 100;
    $scope.showPlayer.pass.total.pos = pos | 0;
    return $scope.showPlayer.pass.total.neg = neg | 0;
  };
  $scope.addPassError = function() {
    var a, b, c, neg, pos, totalRes;
    $scope.showPlayer.pass.error++;
    a = $scope.showPlayer.pass.perfect;
    b = $scope.showPlayer.pass.normal;
    c = $scope.showPlayer.pass.error;
    totalRes = total(a, b, c);
    pos = a / totalRes * 100;
    neg = c / totalRes * 100;
    $scope.showPlayer.pass.total.pos = pos | 0;
    $scope.showPlayer.pass.total.neg = neg | 0;
    return $scope.matchScore.them++;
  };
  $scope.addDigPerfect = function() {
    var a, b, c, neg, pos, totalRes;
    $scope.showPlayer.dig.perfect++;
    a = $scope.showPlayer.dig.perfect;
    b = $scope.showPlayer.dig.normal;
    c = $scope.showPlayer.dig.error;
    totalRes = total(a, b, c);
    pos = a / totalRes * 100;
    neg = c / totalRes * 100;
    $scope.showPlayer.dig.total.pos = pos | 0;
    return $scope.showPlayer.dig.total.neg = neg | 0;
  };
  $scope.addDigNormal = function() {
    var a, b, c, neg, pos, totalRes;
    $scope.showPlayer.dig.normal++;
    a = $scope.showPlayer.dig.perfect;
    b = $scope.showPlayer.dig.normal;
    c = $scope.showPlayer.dig.error;
    totalRes = total(a, b, c);
    pos = a / totalRes * 100;
    neg = c / totalRes * 100;
    $scope.showPlayer.dig.total.pos = pos | 0;
    return $scope.showPlayer.dig.total.neg = neg | 0;
  };
  return $scope.addDigError = function() {
    var a, b, c, neg, pos, totalRes;
    $scope.showPlayer.dig.error++;
    a = $scope.showPlayer.dig.perfect;
    b = $scope.showPlayer.dig.normal;
    c = $scope.showPlayer.dig.error;
    totalRes = total(a, b, c);
    pos = a / totalRes * 100;
    neg = c / totalRes * 100;
    $scope.showPlayer.dig.total.pos = pos | 0;
    $scope.showPlayer.dig.total.neg = neg | 0;
    return $scope.matchScore.them++;
  };
});
