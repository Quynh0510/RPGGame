'use strict';

angular.module('spehlivanovwebsiteApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('login', {
                parent: 'account',
                url: '/login',
                data: {
                    roles: []
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/account/login/login.html',
                        controller: 'LoginController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('login');
                        return $translate.refresh();
                    }]
                }


//			    onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
//			        $modal.open({
//			            templateUrl: "scripts/app/account/login/sign-in-modal.html",
////			            controller: "LoginController",
//			            resolve: {
//			              item: function() { new Item(123).get(); }
//			            },
//			            controller: ['$scope', 'item', function($scope, item) {
//			              $scope.dismiss = function() {
//			                $scope.$dismiss();
//			              };
//			
//			              $scope.save = function() {
//			                item.update().then(function() {
//			                  $scope.$close(true);
//			                });
//			              };
//			            }]
//			        }).result.finally(function() {
//			            $state.go('^');
//			        });
//			    }]


            });
    });
