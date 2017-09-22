'use strict';

angular.module('carrito')
  .filter('formatPermission', function() {
    return function(input) {
      switch (input) {
        case 'ROLE_ADMIN':
          return 'Administrator';
        break;

        case 'ROLE_USER':
          return 'User';
        break;

        default:
          return 'Unknown';
        break;
      };
    };
  });
