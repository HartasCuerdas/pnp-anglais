(function () {

  /* @ngInject */
  angular
    .module('app.services')
    .factory('Ods', Ods)
    .factory('OdToggleO', OdToggleO)
    .factory('OdToggleD', OdToggleD);

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

})();
