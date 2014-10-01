(function () {

  /* @ngInject */
  angular
    .module('app.services')
    .factory('Week', Week);

  /* @ngInject */
  function Week ($resource, BaseUrl) {
    return $resource(BaseUrl + '/weeks/:id.json',
      { id: '@_id' }
    );
  }

})();
