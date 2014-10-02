(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app.controllers', ['app.services'])
    .controller('MainCtrl', MainCtrl);

  /* @ngInject */
  function MainCtrl ($scope, Page) {
    $scope.Page = Page;
  }

})();
