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
        controller: 'PostListCtrl',
        controllerAs: 'postlist'
      })
      .when('/:postId', {
        templateUrl: 'views/week-detail.tpl.html',
        controller: 'PostDetailCtrl',
        controllerAs: 'postdetail'
      });
  }

})();
