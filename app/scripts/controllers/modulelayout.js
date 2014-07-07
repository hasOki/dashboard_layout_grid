'use strict';

angular.module('dashboardLayoutGridApp')
  .controller('ModuleLayoutCtrl', function () {
    var moduleLayout = this;

    moduleLayout.modules = [
      {
        label: 'Test Module 1',
        type : '',
        grid : {
          row: 0,
          col: 0,
          sizeX: 2,
          sizeY: 1
        }
      },
      {
        label: 'Test Module 2',
        type : '',
        grid : {
          row: 1,
          col: 0,
          sizeX: 1,
          sizeY: 1
        }
      },
      {
        label: 'Test Module 3',
        type : '',
        grid : {
          row: 1,
          col: 1,
          sizeX: 1,
          sizeY: 1
        }
      },
      {
        label: 'Test Module 4',
        type : '',
        grid : {
          row: 2,
          col: 0,
          sizeX: 2,
          sizeY: 1
        }
      }
    ];

    moduleLayout.addNewModule = function () {
      moduleLayout.modules.push({
        label: 'Test Module New',
        type : ''
      });
    };

    moduleLayout.removePanel = function (index) {
      moduleLayout.modules.splice(index,1);
    };

    moduleLayout.changePanelConfig = function () {

    };

  });
