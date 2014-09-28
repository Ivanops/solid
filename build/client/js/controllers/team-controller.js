angularModule.controller('TeamCtrl', function($scope, $location) {
  var checkDuplicates, nameReduction, refreshTranslate, validation;
  $scope.players = [];
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
  $scope.back = function() {
    return $location.path('/');
  };
  validation = function(number) {
    var aNumber;
    aNumber = parseInt(number);
    if (typeof aNumber === 'number' && aNumber < 19) {
      return true;
    } else {
      return false;
    }
  };
  nameReduction = function(name) {
    var aName;
    aName = null;
    if (name.length > 12) {
      aName = name.substring(0, 12);
    } else {
      aName = name;
    }
    return aName;
  };
  checkDuplicates = function(newItem) {
    var player, _i, _len, _ref;
    _ref = $scope.players;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      player = _ref[_i];
      if (player.number === newItem.number) {
        alert($scope.translated.duplicated);
        return;
      }
    }
    return $scope.players.push(newItem);
  };
  $scope.addPlayer = function() {
    var name, number, player;
    if ($scope.number && $scope.playerName) {
      number = $scope.number;
      name = $scope.playerName;
      if (number !== '' && name !== '') {
        if (validation(number)) {
          name = nameReduction(name);
          player = {
            number: number,
            name: name
          };
          checkDuplicates(player);
          $scope.number = '';
          $scope.playerName = '';
          return;
        }
      }
    }
    $scope.number = '';
    $scope.playerName = '';
    return alert($scope.translated.wrongData);
  };
  return $scope.doneTeam = function() {
    var owner;
    if ($scope.players) {
      if ($scope.players.length > 0) {
        owner = prompt($scope.translated.enterName);
        if (owner) {
          if (owner !== '') {
            if (owner.length > 12) {
              owner = owner.substring(0, 12);
            }
            localStorage.setItem('Team', JSON.stringify($scope.players));
            localStorage.setItem('Owner', owner);
          }
        }
        return $location.path('/');
      }
    }
  };
});
