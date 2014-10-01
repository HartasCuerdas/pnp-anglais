(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app')
    .config(config);

  /* @ngInject */
  function config ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'weeks/week-list.tpl.html',
        controller: 'WeekListCtrl',
        controllerAs: 'weeklist'
      })
      .when('/:id', {
        templateUrl: 'weeks/week-detail.tpl.html',
        controller: 'WeekDetailCtrl',
        controllerAs: 'weekdetail'
      })
      .when('/day/:id', {
        templateUrl: 'days/day-detail.tpl.html',
        controller: 'DayDetailCtrl',
        controllerAs: 'daydetail'
      });
  }

})();