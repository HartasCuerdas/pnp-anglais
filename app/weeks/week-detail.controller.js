(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app.controllers')
    .controller('WeekDetailCtrl', WeekDetailCtrl);

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

})();
