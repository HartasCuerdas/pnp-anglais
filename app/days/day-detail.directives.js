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
                updateO(scope.od, scope.day);
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
                updateD(scope.od, scope.day);
              })
              .catch(function(response) {
                console.log(response);
              });
        });
      }
    }
  }

  function updateO(od, day) {
    od.o = !od.o;
    if (od.o == true) {
      day.oTotal += 1;
    } else {
      day.oTotal -= 1;
    }
  }

  function updateD(od, day) {
    od.d = !od.d;
    if (od.d == true) {
      day.dTotal += 1;
    } else {
      day.dTotal -= 1;
    }
  }

})();
