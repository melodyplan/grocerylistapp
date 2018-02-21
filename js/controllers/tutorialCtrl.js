var module = angular
  .module('tutorialCtrlModule', [])

  .controller('TutorialCtrl', [
    '$scope',
    function($scope) {
      $scope.tutorialObject = {};
      $scope.tutorialObject.title = 'Main Page';
      $scope.tutorialObject.subTitle = 'Sub title';

      $scope.tutorialObject.bindOutput = 2;

      $scope.tutorialObject.firstname = 'Melody';
      $scope.tutorialObject.lastname = 'P';

      $scope.timesTwo = function() {
        $scope.tutorialObject.bindOutput = Calculations.timesTwo(
          $scope.tutorialObject.bindOutput
        );
      };

      // Calculations.pythagoreanTheorum();
    }
  ])

  .controller('TutorialCtrl', [
    '$scope',
    function($scope) {
      $scope.secondTutorial = 'This is the second tutorial!';
    }
  ]);

/*  .factory('Calculations', function() {
    var calculations = {};

    calculations.timesTwo = function(a) {
      return a * 2;
    };

    calculations.pythagoreanTheorum = function(a, b) {
      return a * a + b * b;
    };

    return calculations;
  });
*/
