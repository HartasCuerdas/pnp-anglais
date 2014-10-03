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
        day: '=pnpDay'
      },
      restrict: "A",
      link: function(scope, element, attrs ) {
        element.bind("click", function() {
          (DayToggleWr.toggleWr({ id: scope.day.id }))
            .$promise
              .then(function(data) {
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
        od: '=pnpOd',
        day: '=pnpDay'
      },
      restrict: "A",
      link: function(scope, element, attrs ) {
        element.bind("click", function() {
          (OdToggleO.toggle_o({ id: scope.od.id }))
            .$promise
              .then(function(data) {
                scope.od.o = !scope.od.o;
                if (scope.od.o == true) {
                  scope.day.oTotal += 1;
                } else {
                  scope.day.oTotal -= 1;
                };
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
        od: '=pnpOd',
        day: '=pnpDay'
      },
      restrict: "A",
      link: function(scope, element, attrs ) {
        element.bind("click", function() {
          (OdToggleD.toggle_d({ id: scope.od.id }))
            .$promise
              .then(function(data) {
                scope.od.d = !scope.od.d;
                if (scope.od.d == true) {
                  scope.day.dTotal += 1;
                } else {
                  scope.day.dTotal -= 1;
                };
              })
              .catch(function(response) {
                console.log(response);
              });
        });
      }
    }
  }

})();
