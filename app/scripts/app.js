(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app', ['ngRoute', 'app.controllers'])
    .config(config);

  /* @ngInject */
  function config ($locationProvider, $routeProvider) {
    //var authToken = "T/zjNTdVoWGocrCbEylftiIU4Uc+q5ZtTZaoOH35gqc=";
    //$httpProvider.defaults.headers.post['X-CSRF-Token'] = authToken;
    //$httpProvider.defaults.headers.post['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

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
      })
      .when('/wok/:id', {
        templateUrl: 'views/week-list.tpl.html',
        controller: 'WokCtrl',
        controllerAs: 'wok'
      });
  }

})();
