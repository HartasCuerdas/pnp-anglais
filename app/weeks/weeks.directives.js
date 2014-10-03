(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app.controllers')
    .directive('pnpWeekCreate', ['Week', pnpWeekCreate])
    .directive('pnpWeekDestroy', ['Week', pnpWeekDestroy]);

  /* @ngInject */
  function pnpWeekCreate(Week) {
    return {
      scope: {
        weeks: '=pnpWeekCreate'
      },
      restrict: "A",
      link: function(scope, element, attrs ) {
        element.bind("click", function() {
          var week = new Week();
          week.$save(
            {},
            function(){
              scope.weeks.push(week);    
            }
          );
        });
      }
    }
  }

  /* @ngInject */
  function pnpWeekDestroy(Week) {
    return {
      scope: {
        week: '=pnpWeekDestroy',
        weeks: '=pnpWeeks',
        index: '=pnpRowIndex'
      },
      restrict: "A",
      link: function(scope, element, attrs ) {
        element.bind("click", function() {
          Week.delete(
            { id: scope.week.id },
            function() {
              scope.weeks.splice(scope.index, 1);
            }
          );
        });
      }
    }
  }

})();
