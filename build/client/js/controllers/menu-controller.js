angularModule.controller('MenuCtrl', function($scope, $location) {
  var load, refreshTranslate;
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
  $scope.name = $scope.translated.newMember;
  load = function() {
    if (localStorage.getItem('Owner')) {
      return $scope.name = localStorage.getItem('Owner');
    }
  };
  load();
  $scope.createTeam = function() {
    var newTeam;
    if (localStorage.getItem('Owner')) {
      newTeam = confirm($scope.translated.createNewTeam);
      if (newTeam) {
        return $location.path('/team');
      }
    } else {
      return $location.path('/team');
    }
  };
  return $scope.startMatch = function() {
    if (localStorage.getItem('Owner')) {
      return $location.path('/match');
    }
  };
});
