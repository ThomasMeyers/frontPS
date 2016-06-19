(function() {
  'use strict';

  angular
    .module('frontProjetScola')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
