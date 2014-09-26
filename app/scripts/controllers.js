(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app.controllers', ['app.services'])
    .controller('WeekListCtrl', WeekListCtrl)
    .controller('WeekDetailCtrl', WeekDetailCtrl)
    .controller('WeekDeleteCtrl', WeekDeleteCtrl)
    .controller('DayDetailCtrl', DayDetailCtrl)
    .controller('MainCtrl', MainCtrl);

  /* @ngInject */
  function WeekListCtrl (Week, $scope, Page) {
    Page.setTitle('Weeks');
    this.weeks = Week.query();

    var currentWeekFirstDayDate = function() {
      var d = new Date();
      var day = d.getDay();
      var diff = d.getDate() - day;
      return d.setDate(diff);
    };

    $scope.currentWeekFirstDayDate = currentWeekFirstDayDate();

    $scope.destroyWeek = function(weekId, position) {
      Week.delete(
        { id: weekId },
        function() {
          $scope.weeklist.weeks.splice(position, 1);
        }
      );
    }

  }

  /* @ngInject */
  function WeekDetailCtrl ($routeParams, Week, Days, DayToggleWr, $scope, Page) {
    Page.setTitle('Week');
    this.week = Week.get({ id: $routeParams.id });
    this.days = Days.query({ id: $routeParams.id });
    $scope.togglewr = function(dayId, position) {
      (DayToggleWr.toggleWr({ id: dayId }))
        .$promise
          .then(function(data) {
            $scope.weekdetail.week = data;
            $scope.weekdetail.days[position].well_registered = !$scope.weekdetail.days[position].well_registered;
          })
          .catch(function(response) {
            console.log(response);
          });
    };

    $scope.currentDate = new Date();

  }

  /* @ngInject */
  function WeekDeleteCtrl ($routeParams, Week) {
    Week.remove({ id: $routeParams.id });
  }

  /* @ngInject */
  function DayDetailCtrl ($routeParams, Day, Ods, OdToggleO, OdToggleD, $scope, Page) {
    Page.setTitle('Day');
    this.day = Day.get({ id: $routeParams.id });
    this.ods = Ods.query({ id: $routeParams.id });
    $scope.toggle_o = function(odId, position) {
      (OdToggleO.toggle_o({ id: odId }))
        .$promise
          .then(function(data) {
            $scope.daydetail.ods[position].o = !$scope.daydetail.ods[position].o;
          })
          .catch(function(response) {
            console.log(response);
          });
    };
    $scope.toggle_d = function(odId, position) {
      (OdToggleD.toggle_d({ id: odId }))
        .$promise
          .then(function(data) {
            $scope.daydetail.ods[position].d = !$scope.daydetail.ods[position].d;
          })
          .catch(function(response) {
            console.log(response);
          });
    };
  }

  /* @ngInject */
  function MainCtrl ($scope, Page) {
    $scope.Page = Page;
  }

})();
