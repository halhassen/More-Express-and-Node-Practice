(function() {
	'use strict';
	angular.module('app', ['ui.router'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home', {
			url: '/',
			templateUrl: 'views/home.html'
		}).state('CreateSong', {
			url: '/Song',
			templateUrl: 'views/create_song.html',
			controller: 'CreateSongController',
			controllerAs: 'vm'
		}).state('EditSong', {
			url: '/Song/Edit/:id',
			templateUrl: 'views/create_song.html',
			controller: 'EditSongController',
			controllerAs: 'vm'
		});
		$urlRouterProvider.otherwise('/');
	}
})();