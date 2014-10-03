(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app.controllers')
    .directive('pnpWeekCreate', ['Week', pnpWeekCreate]);

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

})();
