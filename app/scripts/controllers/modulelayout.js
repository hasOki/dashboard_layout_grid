'use strict';

angular.module('dashboardLayoutGridApp')

  .constant('defaultModuleObject', {
    label: 'Test Module New',
    type : 'module_2',
    max_size: [2, 1],
    showConfig: false,
    sizeX: 2,
    sizeY: 1
  })
  .constant('moduleTypeList', [
    { name: 'Module 1', value: 'module_1', max_size:[1,1] },
    { name: 'Module 2', value: 'module_2', max_size:[2,1] },
    { name: 'Module 3', value: 'module_3', max_size:[2,2] }
  ])

  .controller('ModuleLayoutCtrl',
  [ 'defaultModuleObject',
    'moduleTypeList',
    function (DEFAULT_MODULE_OBJECT, MODULE_TYPE_LIST) {
      var moduleLayout = this;

      moduleLayout.moduleTypeList = MODULE_TYPE_LIST;
      moduleLayout.modules = [
        {
          label: 'Default Module A',
          type : 'module_2',
          max_size: [2, 1],
          showConfig: false,
          grid : {
            row: 0,
            col: 0,
            sizeX: 2,
            sizeY: 1
          }
        },
        {
          label: 'Default Module B',
          type : 'module_1',
          max_size: [1, 1],
          showConfig: false,
          grid : {
            row: 1,
            col: 0,
            sizeX: 1,
            sizeY: 2
          }
        },
        {
          label: 'Default Module C',
          type : 'module_1',
          max_size: [1, 1],
          showConfig: false,
          grid : {
            row: 1,
            col: 1,
            sizeX: 1,
            sizeY: 2
          }
        },
        {
          label: 'Default Module D',
          type : 'module_3',
          max_size: [2, 2],
          showConfig: false,
          grid : {
            row: 3,
            col: 0,
            sizeX: 2,
            sizeY: 2
          }
        }
      ];

      moduleLayout.addNewModule = function () {
        var newModule = angular.extend({}, DEFAULT_MODULE_OBJECT);
        moduleLayout.modules.push(newModule);
      };

      moduleLayout.removePanel = function (index) {
        moduleLayout.modules.splice(index,1);
      };

      moduleLayout.getBackgroundImage = function(type){
        // return the background image for the module panel
        //TODO: Check for item width to return the correct image background
        return '/images/' + type + '_bg.jpg';
      };

      var flipPanel = function(index){
        moduleLayout.modules[index].showConfig = !moduleLayout.modules[index].showConfig;
      };

      moduleLayout.showPanelConfig = function (panelIndex) {
        flipPanel(panelIndex);
      };

      moduleLayout.saveConfig = function(panelIndex){
        // TODO: Check for value validation and save it to the API
        flipPanel(panelIndex);
      };

    }
  ]);
