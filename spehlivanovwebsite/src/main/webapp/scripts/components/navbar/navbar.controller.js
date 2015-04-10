'use strict';

angular.module('spehlivanovwebsiteApp')
.controller('NavbarController',
		function($scope, $location, $state, Auth, Principal, $mdSidenav, $log) {
			$scope.isAuthenticated = Principal.isAuthenticated;
			$scope.isInRole = Principal.isInRole;
			$scope.$state = $state;

			$scope.logout = function() {
				Auth.logout();
				$state.go('home');
			};

			//			$scope.toggleLeft = function(e) {
			//				console.log("toggle men");
			//
			//				$("#wrapper").toggleClass("toggled");
			//
			//			};

			$scope.toggleLeft = function() {
				$mdSidenav('left').toggle().then(function() {
					$log.debug("toggle left is done");
				});
			};
			$scope.toggleRight = function() {
				$mdSidenav('right').toggle().then(function() {
					$log.debug("toggle RIGHT is done");
				});
			};

		});
