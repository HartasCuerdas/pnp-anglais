(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app.services', ['ngResource'])
    /*.constant('BaseUrl', 'http://jsonplaceholder.typicode.com')*/
    .constant('BaseUrl', 'http://localhost:3000')
    .factory('Wok', Wok)
    .factory('Weeks', Weeks);


  function Wok ($resource, BaseUrl) {
    return $resource(BaseUrl + "/weeks/:id", { id: "@id" },
    {
      'create':  { method: 'POST' },
      'index':   { method: 'GET', isArray: true },
      'show':    { method: 'GET', isArray: false },
      'update':  { method: 'PUT' },
      'destroy': { method: 'DELETE' }
    });
  }

  /* @ngInject */
  function Weeks ($resource, BaseUrl) {
    return $resource(BaseUrl + '/weeks/:id.json',
      { id: '@_id' }
    );
  }

})();
