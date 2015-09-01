(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ['HomeFactory'];

	function HomeController(HomeFactory) {
		var vm = this;
		vm.title = 'Welcome to our App!';
		vm.cats = HomeFactory.cats;
		
		vm.deleteCat = function(cat) {
			HomeFactory.deleteCat(cat);
		}
	}
})();