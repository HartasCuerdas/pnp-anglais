(function () {

  /* @ngInject */
  angular
    .module('app.services', ['ngResource'])
    /*.constant('BaseUrl', 'http://jsonplaceholder.typicode.com')*/
    .constant('BaseUrl', 'http://localhost:3000')
    .factory('Week', Week)
    .factory('Days', Days)
    .factory('Day', Day)
    .factory('Ods', Ods)
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
  function Ods ($resource, BaseUrl) {
    return $resource(BaseUrl + '/days/:id/ods.json',
      { id: '@_id' }
    );
  }

  /* @ngInject */
  function Page() {
    var title = 'pnp Anglais';
    return {
      title: function() { return title; },
      setTitle: function(newTitle) { title = newTitle; }
    };
  }

})();
