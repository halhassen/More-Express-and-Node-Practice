(function() {
  'use strict';
  angular.module('app')
    .factory('HomeFactory', HomeFactory);

  HomeFactory.$inject = ['$http', '$q'];

  function HomeFactory($http, $q) {
    var o = {};

    o.getCats = function() {
      $http.get('/cats').success(function(res) {
        console.log(res);
      });
    };
		
		o.createCat = function() {
			$http.post('/cats', {name: 'ashes', breed:'Black Cat', color: "Trip over the darn thing because you can't see at night, black"}).success(function(res) {
				console.log(res);
			});
		}
		
		$http.get('/dogs').success(function(res) {
			console.log(res);
		});
		o.getCats();
    return o;
  }
})();