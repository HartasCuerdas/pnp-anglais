(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app.controllers')
    .controller('DayDetailCtrl', DayDetailCtrl);

  /* @ngInject */
  function DayDetailCtrl ($routeParams, Day, Ods, OdToggleO, OdToggleD, $scope, Page) {
    Page.setTitle('Day');
    this.day = Day.get({ id: $routeParams.id });
    this.ods = Ods.query({ id: $routeParams.id });
    $scope.toggle_o = function(odId, position) {
      (OdToggleO.toggle_o({ id: odId }))
        .$promise
          .then(function(data) {
            $scope.daydetail.ods[position].o = !$scope.daydetail.ods[position].o;
          })
          .catch(function(response) {
            console.log(response);
          });
    };
    $scope.toggle_d = function(odId, position) {
      (OdToggleD.toggle_d({ id: odId }))
        .$promise
          .then(function(data) {
            $scope.daydetail.ods[position].d = !$scope.daydetail.ods[position].d;
          })
          .catch(function(response) {
            console.log(response);
          });
    };
  }

})();
