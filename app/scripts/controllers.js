(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app.controllers', ['app.services'])
    .controller('WeekListCtrl', WeekListCtrl)
    .controller('WeekDetailCtrl', WeekDetailCtrl)
    .controller('WeekDeleteCtrl', WeekDeleteCtrl)
    .controller('DayDetailCtrl', DayDetailCtrl);

  /* @ngInject */
  function WeekListCtrl (Week) {
    this.weeks = Week.query();
  }

  /* @ngInject */
  function WeekDetailCtrl ($routeParams, Week, Days) {
    this.week = Week.get({ id: $routeParams.id });
    this.days = Days.query({ id: $routeParams.id });
  }

  /* @ngInject */
  function WeekDeleteCtrl ($routeParams, Week) {
    Week.remove({ id: $routeParams.id });
  }

  /* @ngInject */
  function DayDetailCtrl ($routeParams, Day, Ods) {
    this.day = Day.get({ id: $routeParams.id });
    this.ods = Ods.query({ id: $routeParams.id });
  }

})();
