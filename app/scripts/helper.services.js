(function () {

  /* @ngInject */
  angular
    .module('app.services')
    .service('Page', Page);

  function Page() {
    var title = 'pnp Anglais';
    return {
      title: function() { return title; },
      setTitle: function(newTitle) { title = newTitle; }
    };
  }

})();