(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app.controllers')
    .controller('DayDetailCtrl', DayDetailCtrl);

  /* @ngInject */
  function DayDetailCtrl ($routeParams, Day, Ods, Page) {
    Page.setTitle('Day');
    this.day = Day.get({ id: $routeParams.id });
    this.ods = Ods.query({ id: $routeParams.id });
  }

})();
