(function() {
	'use strict';
	angular.module('app').controller('HomeController', HomeController);

	HomeController.$inject = ['HomeFactory'];

	function HomeController(HomeFactory) {
		var vm = this;
		vm.title = 'Welcome to your Playlist!';
		vm.songs = HomeFactory.songs;

		vm.deleteSong = function(song) {
			HomeFactory.deleteSong(song);
		}
	}
})();