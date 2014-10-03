(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app.controllers')
    .directive('pnpToggleWr', ['DayToggleWr', pnpToggleWr])
    .directive('pnpToggleO', ['OdToggleO', pnpToggleO])
    .directive('pnpToggleD', ['OdToggleD', pnpToggleD]);

  /* @ngInject */
  function pnpToggleWr(DayToggleWr) {
    return {
      scope: {
        day: '=pnpToggleWr',
        week: '=pnpWeek'
      },
      restrict: "A",
      link: function(scope, element, attrs ) {
        element.bind("click", function() {
          (DayToggleWr.toggleWr({ id: scope.day.id }))
            .$promise
              .then(function(data) {
                if (attrs.pnpWeek) {
                  scope.week = data;
                }
                scope.day.well_registered = !scope.day.well_registered;
              })
              .catch(function(response) {
                console.log(response);
              });
        });
      }
    }
  }

  /* @ngInject */
  function pnpToggleO(OdToggleO) {
    return {
      scope: {
        od: '=pnpToggleO',
        day: '=pnpDay'
      },
      restrict: "A",
      link: function(scope, element, attrs ) {
        element.bind("click", function() {
          (OdToggleO.toggle_o({ id: scope.od.id }))
            .$promise
              .then(function(data) {
                scope.od.o = !scope.od.o;
                scope.day = data;
              })
              .catch(function(response) {
                console.log(response);
              });
        });
      }
    }
  }

  /* @ngInject */
  function pnpToggleD(OdToggleD) {
    return {
      scope: {
        od: '=pnpToggleD',
        day: '=pnpDay'
      },
      restrict: "A",
      link: function(scope, element, attrs ) {
        element.bind("click", function() {
          (OdToggleD.toggle_d({ id: scope.od.id }))
            .$promise
              .then(function(data) {
                scope.od.d = !scope.od.d;
                scope.day = data;
              })
              .catch(function(response) {
                console.log(response);
              });
        });
      }
    }
  }

})();
