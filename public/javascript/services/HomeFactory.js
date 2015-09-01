(function() {
  'use strict';
  angular.module('app')
    .factory('HomeFactory', HomeFactory);

  HomeFactory.$inject = ['$http', '$q'];

  function HomeFactory($http, $q) {
    var o = {};
    o.cats = [];
    
    //get an individual cat
    o.getCat = function(id) {
      var q = $q.defer();
      $http.get('/cats/' + id).success(function(res) {
        q.resolve(res);
      }).error(function() {
        q.reject();
      });
      return q.promise;
    }
    
    o.getCats = function() {
      $http.get('/cats').success(function(res) {
        //pushes res array into cat array
				o.cats.push.apply(o.cats, res);        
      });
    };
		
		o.createCat = function(cat) {
      var q = $q.defer();
			$http.post('/cats', cat).success(function(res) {
        cat._id = res.name;
        o.cats.push(cat);
        q.resolve();
			});
      return q.promise;
		}
    
    o.editCat = function(newCat, oldCat) {
      var q = $q.defer();
      $http.put('/cats/'+ oldCat._id, newCat).success(function(res) {
        o.cats.splice(o.cats.indexOf(oldCat) - 1, 1, newCat);
        q.resolve();
      });
      return q.promise;
    };
    
    o.deleteCat = function(cat) {
      $http.delete('/cats/' + cat._id).success(function(res) {
        o.cats.splice(o.cats.indexOf(cat), 1);
      });
    }
    
		o.getCats();
    return o;
  }
})();