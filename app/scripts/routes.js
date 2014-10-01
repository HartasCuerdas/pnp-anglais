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
        templateUrl: 'views/week-list.tpl.html',
        controller: 'WeekListCtrl',
        controllerAs: 'weeklist'
      })
      .when('/:id', {
        templateUrl: 'views/week-detail.tpl.html',
        controller: 'WeekDetailCtrl',
        controllerAs: 'weekdetail'
      })
      .when('/day/:id', {
        templateUrl: 'views/day-detail.tpl.html',
        controller: 'DayDetailCtrl',
        controllerAs: 'daydetail'
      });
  }

})();