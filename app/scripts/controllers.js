(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app.controllers', ['app.services'])
    .controller('WeekListCtrl', WeekListCtrl)
    .controller('WeekDetailCtrl', WeekDetailCtrl)
    .controller('WokCtrl', WokCtrl)
    .controller('WeekDeleteCtrl', WeekDeleteCtrl);

  /* @ngInject */
  function WeekListCtrl (Weeks) {
    this.weeks = Weeks.query();
  }

  /* @ngInject */
  function WeekDetailCtrl ($routeParams, Weeks) {
    this.week = Weeks.get({ id: $routeParams.id });
  }

  /* @ngInject */
  function WeekDeleteCtrl ($routeParams, Weeks) {
    Weeks.remove({ id: $routeParams.id });
  }

  /* @ngInject */
  function WokCtrl ($routeParams, Wok) {
    Wok.delete({ id: $routeParams.id, authenticity_token: 'T/zjNTdVoWGocrCbEylftiIU4Uc+q5ZtTZaoOH35gqc=', _method: 'delete' });
  }


})();
