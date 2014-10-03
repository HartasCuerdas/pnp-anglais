(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app.controllers')
    .directive('pnpDayToggleWr', ['DayToggleWr', pnpDayToggleWr]);

  /* @ngInject */
  function pnpDayToggleWr(DayToggleWr) {
    return {
      scope: {
        day: '=pnpDay',
        week: '=pnpWeek'
      },
      restrict: "A",
      link: function(scope, element, attrs ) {
        element.bind("click", function() {
          (DayToggleWr.toggleWr({ id: scope.day.id }))
            .$promise
              .then(function(data) {
                scope.week = data;
                scope.day.well_registered = !scope.day.well_registered;
              })
              .catch(function(response) {
                console.log(response);
              });
        });
      }
    }
  }

})();
