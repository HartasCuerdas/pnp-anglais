(function () {

  /* @ngInject */
  angular
    .module('app.services', ['ngResource'])
    .constant('BaseUrl', 'http://localhost:3000')
    .factory('Week', Week)
    .factory('Days', Days)
    .factory('Day', Day)
    .factory('DayToggleWr', DayToggleWr)
    .factory('Ods', Ods)
    .factory('OdToggleO', OdToggleO)
    .factory('OdToggleD', OdToggleD)
    .factory('Page', Page);

  /* @ngInject */
  function Week ($resource, BaseUrl) {
    return $resource(BaseUrl + '/weeks/:id.json',
      { id: '@_id' }
    );
  }

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

  /* @ngInject */
  function Ods ($resource, BaseUrl) {
    return $resource(BaseUrl + '/days/:id/ods.json',
      { id: '@_id' }
    );
  }

  /* @ngInject */
  function OdToggleO ($resource, BaseUrl) {
    return $resource(BaseUrl + '/ods/:id/toggle_o.json',
      { id: '@id' }, {
        toggle_o: {method:'PATCH'}
      }
    );
  }

  /* @ngInject */
  function OdToggleD ($resource, BaseUrl) {
    return $resource(BaseUrl + '/ods/:id/toggle_d.json',
      { id: '@id' }, {
        toggle_d: {method:'PATCH'}
      }
    );
  }

  function Page() {
    var title = 'pnp Anglais';
    return {
      title: function() { return title; },
      setTitle: function(newTitle) { title = newTitle; }
    };
  }

})();
