(function() {
  'use strict';
  angular.module('app')
    .factory('HomeFactory', HomeFactory);

  HomeFactory.$inject = ['$http', '$q'];

  function HomeFactory($http, $q) {
    var o = {};
    o.cats = [];

    o.getCats = function() {
      $http.get('/cats').success(function(res) {
        //pushes res array into cat array
				o.cats.push.apply(o.cats, res);        
      });
    };
		
		o.createCat = function(cat) {
      var q = $q.defer();
			$http.post('/cats', cat).success(function(res) {
        o.cats.push(cat);
        q.resolve();
			});
      return q.promise;
		}
		o.getCats();
    return o;
  }
})();