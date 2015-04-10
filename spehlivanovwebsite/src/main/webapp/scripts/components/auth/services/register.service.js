'use strict';

angular.module('spehlivanovwebsiteApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


