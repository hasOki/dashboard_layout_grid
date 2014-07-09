'use strict';

angular.module('dashboardLayoutGridApp')

  .directive('flipCard',
  ['ngAnimate'],
  function ($animate) {
    return function postLink(scope, element, attrs) {
      scope.$watch(attrs.flipCard, function(showBackSide){
        if( showBackSide){
          $animate.addClass(element, 'show-back-side');
        } else {
          $animate.removeClass(element, 'show-back-side');
        }
      });
    }
  });

