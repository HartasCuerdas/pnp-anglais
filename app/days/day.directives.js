(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app.controllers')
    .directive('pnpToggleWr', ['DayToggleWr', pnpToggleWr]);

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
                  scope.week = data['week'];
                }
                scope.day.wr = !scope.day.wr;
              })
              .catch(function(response) {
                console.log(response);
              });
        });
      }
    }
  }

})();
