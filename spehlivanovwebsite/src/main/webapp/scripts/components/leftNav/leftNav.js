'use strict';



angular.module('spehlivanovwebsiteApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('articles', {
                parent: 'account',
                url: '/articles',
                data: {
                    roles: []
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/articles/articles.html',
                        controller: 'KnowledgeCtrl'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('knowledge');
                        return $translate.refresh();
                    }]
                }
            });
    });
