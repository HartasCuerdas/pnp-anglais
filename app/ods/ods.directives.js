(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app.controllers')
    .directive('pnpToggleO', ['OdToggleO', pnpToggleO])
    .directive('pnpToggleD', ['OdToggleD', pnpToggleD]);

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
                scope.day = data['day'];
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
                scope.day = data['day'];
              })
              .catch(function(response) {
                console.log(response);
              });
        });
      }
    }
  }

})();
