(function() {
	'use strict';
	angular.module('app').controller('EditSongController', EditSongController);
	EditSongController.$inject = ['$state', '$stateParams', 'HomeFactory'];

	function EditSongController($state, $stateParams, HomeFactory) {
		var vm = this;
		if(!$stateParams.id) $state.go('Home');
		HomeFactory.getSong($stateParams.id).then(function(res) {
			vm.song = res;
			vm.songCopy = angular.copy(res);
		}, function() {
			$state.go('Home')
		});

		vm.submitSong = function() {
			HomeFactory.editSong(vm.song, vm.songCopy).then(function(res) {
				$state.go('Home');
			})
		}
	}
})();