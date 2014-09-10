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
  }

  /* @ngInject */
  function WeekDetailCtrl ($routeParams, Week, Days, $scope, Page) {
    Page.setTitle('Week');
    this.week = Week.get({ id: $routeParams.id });
    this.days = Days.query({ id: $routeParams.id });
  }

  /* @ngInject */
  function WeekDeleteCtrl ($routeParams, Week) {
    Week.remove({ id: $routeParams.id });
  }

  /* @ngInject */
  function DayDetailCtrl ($routeParams, Day, Ods, $scope, Page) {
    Page.setTitle('Day');
    this.day = Day.get({ id: $routeParams.id });
    this.ods = Ods.query({ id: $routeParams.id });
  }

  /* @ngInject */
  function DayToggleWrCtrl ($routeParams, DayToggleWr) {
    DayToggleWr.toggleWr({ id: $routeParams.id }); 
  }

  /* @ngInject */
  function MainCtrl ($scope, Page) {
    $scope.Page = Page;
  }

})();
