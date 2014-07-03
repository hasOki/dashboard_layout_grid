'use strict';

angular.module('dashboardLayoutGridApp')
  .controller('ModuleLayoutCtrl', function ($scope) {
    var moduleLayout = this;

    moduleLayout.modules = [
      {
        label: 'Test Module 1',
        type: '',
        row: 0,
        col: 0,
        sizeX: 2,
        sizeY: 2
      },
      {
        label: 'Test Module 2',
        type: '',
        row: 1,
        col: 0,
        sizeX: 1,
        sizeY: 1
      },
      {
        label: 'Test Module 3',
        type: '',
        row: 1,
        col: 1,
        sizeX: 1,
        sizeY: 1
      },
      {
        label: 'Test Module 4',
        type: '',
        row: 2,
        col: 0,
        sizeX: 2,
        sizeY: 2
      },
      {
        label: 'Test Module 5',
        type: '',
        row: 3,
        col: 0,
        sizeX: 2,
        sizeY: 2
      }
    ];

    moduleLayout.addNewModule = function(){
      moduleLayout.modules.push({
        label: 'Test Module New',
        type: ''
      });
    };

    moduleLayout.removePanel = function(){
    };

    moduleLayout.changePanelConfig = function(){

    };

  });
