(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app.controllers')
    .controller('WeeksCtrl', WeeksCtrl);

  /* @ngInject */
  function WeeksCtrl (Week, $scope, Page) {
    Page.setTitle('Weeks');
    this.weeks = Week.query();

    var currentWeekFirstDayDate = function() {
      var d = new Date();
      var day = d.getDay();
      var diff = d.getDate() - day;
      return d.setDate(diff);
    };

    $scope.currentWeekFirstDayDate = currentWeekFirstDayDate();

    $scope.createWeek = function() {
      var week = new Week();
      week.$save(
        {},
        function(){
          $scope.weeklist.weeks.push(week);    
        }
      );
    }

    $scope.destroyWeek = function(weekId, position) {
      Week.delete(
        { id: weekId },
        function() {
          $scope.weeklist.weeks.splice(position, 1);
        }
      );
    }

  }

})();
