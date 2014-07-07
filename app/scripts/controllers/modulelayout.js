'use strict';

angular.module('dashboardLayoutGridApp')
  .controller('ModuleLayoutCtrl', function () {
    var moduleLayout = this;

    moduleLayout.modules = [
      {
        label: 'Test Module 1',
        type : 'module_2',
        showConfig: false,
        grid : {
          row: 0,
          col: 0,
          sizeX: 2,
          sizeY: 1
        }
      },
      {
        label: 'Test Module 2',
        type : 'module_1',
        showConfig: false,
        grid : {
          row: 1,
          col: 0,
          sizeX: 1,
          sizeY: 2
        }
      },
      {
        label: 'Test Module 3',
        type : 'module_1',
        showConfig: false,
        grid : {
          row: 1,
          col: 1,
          sizeX: 1,
          sizeY: 2
        }
      },
      {
        label: 'Test Module 4',
        type : 'module_2',
        showConfig: false,
        grid : {
          row: 3,
          col: 0,
          sizeX: 2,
          sizeY: 1
        }
      }
    ];

    moduleLayout.addNewModule = function () {
      moduleLayout.modules.push({
        label: 'Test Module New',
        type : 'module_2'
      });
    };

    moduleLayout.removePanel = function (index) {
      moduleLayout.modules.splice(index,1);
    };

    //
    moduleLayout.getBackgroundImage = function(type){
      // return the background image for the module panel
      //TODO: Check for item width to return the correct image background
      return '/images/' + type + '_bg.jpg';
    };

    var flipPanel = function(index){
      moduleLayout.modules[index].showConfig = !moduleLayout.modules[index].showConfig;
    };

    moduleLayout.changePanelConfig = function (panelIndex) {
      flipPanel(panelIndex);
    };

    moduleLayout.saveConfig = function(panelIndex){
      // TODO: Check for value validation and save it to the API
      flipPanel(panelIndex);
    };

  });
