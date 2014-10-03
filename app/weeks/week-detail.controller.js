(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app.controllers')
    .controller('WeekDetailCtrl', WeekDetailCtrl);

  /* @ngInject */
  function WeekDetailCtrl ($scope, $routeParams, Week, Days, Page) {
    Page.setTitle('Week');
    this.week = Week.get({ id: $routeParams.id });
    this.days = Days.query({ id: $routeParams.id });
    $scope.currentDate = new Date();
  }

})();
