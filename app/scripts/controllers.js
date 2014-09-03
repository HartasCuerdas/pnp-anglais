(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app.controllers', ['app.services'])
    .controller('WeekListCtrl', WeekListCtrl)
    .controller('WeekDetailCtrl', WeekDetailCtrl);

  /* @ngInject */
  function WeekListCtrl (Weeks) {
    this.weeks = Weeks.query();
  }

  /* @ngInject */
  function WeekDetailCtrl ($routeParams, Weeks) {
    this.week = Weeks.get({ id: $routeParams.id });
  }


})();
