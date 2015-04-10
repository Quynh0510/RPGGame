'use strict';

angular.module('spehlivanovwebsiteApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
