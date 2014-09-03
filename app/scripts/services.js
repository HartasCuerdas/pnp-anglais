(function () {
  'use strict';

  /* @ngInject */
  angular
    .module('app.services', ['ngResource'])
    /*.constant('BaseUrl', 'http://jsonplaceholder.typicode.com')*/
    .constant('BaseUrl', 'http://localhost:3000')
    .factory('Weeks', Weeks);

  /* @ngInject */
  function Weeks ($resource, BaseUrl) {
    return $resource(BaseUrl + '/weeks/:id.json',
      { id: '@_id' }
    );
  }

  /* @ngInject */
  function Comment ($resource, BaseUrl) {
    return $resource(BaseUrl + '/comments/:commentId',
      { commentId: '@_id' }
    );
  }

  /* @ngInject */
  function User ($resource, BaseUrl) {
    return $resource(BaseUrl + '/users/:userId',
      { userId: '@_id' }
    );
  }

})();
