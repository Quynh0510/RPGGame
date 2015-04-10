'use strict';

angular.module('spehlivanovwebsiteApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
            	
                parent: 'site',
                url: '/',
                data: {
                    roles: []
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/main/main.html',
                        controller: 'MainController'
                    }
                },
                resolve: {
                    mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('main');
                        return $translate.refresh();
                    }]
                }
            })
//            .state('knowledge', {
//                parent: 'site',
//                url: '/',
//                data: {
//                    roles: []
//                },
//                views: {
//                    'content@': {
//                        templateUrl: 'scripts/app/leftMenus/knowledge/knowledgeLeftMenu.html',
//                        controller: 'AppCtrl'
//                    }
//                },
//                resolve: {
//                    mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
//                        $translatePartialLoader.addPart('knowledge');
//                        return $translate.refresh();
//                    }]
//                }
//            });
    });


