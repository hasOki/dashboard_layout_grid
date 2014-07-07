'use strict';

angular.module('dashboardLayoutGridApp')
  .controller('MainCtrl', function ($scope) {

    // options from angular gridster
    $scope.gridsterOpts = {
      columns: 2, // the width of the grid, in columns
      pushing: true, // whether to push other items out of the way on move or resize
      floating: true, // whether to automatically float items up so they stack (you can temporarily disable if you are adding unsorted items with ng-repeat)
      width: 'auto', // can be an integer or 'auto'. 'auto' scales gridster to be the full width of its containing element
      colWidth: 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
      rowHeight: 200, // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
      margins: [10, 10], // the pixel distance between each widget
      isMobile: false, // stacks the grid items if true
      minColumns: 1, // the minimum columns the grid must have
      minRows: 2, // the minimum height of the grid, in rows
      maxRows: 100,
      defaultSizeX: 2, // the default width of a gridster item, if not specifed
      defaultSizeY: 1, // the default height of a gridster item, if not specified
      mobileBreakPoint: 600, // if the screen is not wider that this, remove the grid layout and stack the items
      resizable: {
        enabled: true,
        handles: 'n, e, s, w, ne, se, sw, nw'
      },
      draggable: {
        enabled: true, // whether dragging items is supported
        handle: '.move-handle' // optional selector for resize handle
      }
    };
  });
