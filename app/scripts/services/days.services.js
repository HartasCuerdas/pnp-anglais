(function () {

  /* @ngInject */
  angular
    .module('app.services')
    .factory('Days', Days)
    .factory('Day', Day)
    .factory('DayToggleWr', DayToggleWr);

  /* @ngInject */
  function Days ($resource, BaseUrl) {
    return $resource(BaseUrl + '/weeks/:id/days.json',
      { id: '@_id' }
    );
  }

  /* @ngInject */
  function Day ($resource, BaseUrl) {
    return $resource(BaseUrl + '/days/:id.json',
      { id: '@_id' }
    );
  }

  /* @ngInject */
  function DayToggleWr ($resource, BaseUrl) {
    return $resource(BaseUrl + '/days/:id/toggle_wr.json',
      { id: '@id' }, {
        toggleWr: {method:'PATCH'}
      }
    );
  }

})();
