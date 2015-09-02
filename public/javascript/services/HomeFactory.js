(function() {
  'use strict';
  angular.module('app').factory('HomeFactory', HomeFactory);
  HomeFactory.$inject = ['$http', '$q'];

  function HomeFactory($http, $q) {
    var o = {};
    o.songs = [];

    o.getSong = function(id) {
      var q = $q.defer();
      $http.get('/songs/' + id).success(function(res) {
        q.resolve(res);
      }).error(function() {
        q.reject()
      });
      return q.promise;
    };

    o.getSongs = function() {
      $http.get('/songs').success(function(res) {
        o.songs.push.apply(o.songs, res)
      });
    };

    o.createSong = function(song) {
      var q = $q.defer();
      $http.post('/songs', song).success(function(res) {
        song._id = res.name;
        o.songs.push(song);
        q.resolve;
      })
      return q.promise;
    };

    o.editSong = function(newSong, oldSong) {
      var q = $q.defer();
      $http.put('/songs/' + oldSong._id, newSong).success(function(res) {
        o.songs.splice(o.songs.indexOf(oldSong) - 2, 1, newSong);
        q.resolve();
      });
      return q.promise;
    };

    o.deleteSong = function(song) {
      $http.delete('/songs/' + song._id).success(function(res) {
        o.songs.splice(o.songs.indexOf(song), 1);
      });
    };

    o.getSongs();
    return o;
  };
})();