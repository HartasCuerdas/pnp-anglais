(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app', ['ngRoute', 'app.controllers'])
    .config(config);

  /* @ngInject */
  function config ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

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
      });
  }

})();
