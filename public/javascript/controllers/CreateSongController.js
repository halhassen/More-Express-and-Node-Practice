(function() {
	"use strict";
	angular.module("app").controller('CreateSongController', CreateSongController);
	CreateSongController.$inject = ['$state', 'HomeFactory'];

	function CreateSongController($state, HomeFactory) {
		var vm = this;
		vm.song = {};
		vm.submitSong = function() {
			HomeFactory.createSong(vm.song).then(function() {
				$state.go('Home')
			});
		};
	}
})();