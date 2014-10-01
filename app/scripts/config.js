(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app')
    .config(config);

  /* @ngInject */
  function config ($locationProvider) {

    $locationProvider.html5Mode(true);

  }

})();