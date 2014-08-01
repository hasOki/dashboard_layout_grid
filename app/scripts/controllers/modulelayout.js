'use strict';

angular.module('dashboardLayoutGridApp')

  .constant('defaultModuleObject', {
    label: 'Test Module New',
    type : 'recentMessages',
    showConfig: false
  })
  .constant('defaultQuickStatObject', {
    label: 'Test Module New',
    type : 'click',
    showConfig: false,
    grid:{
      sizeX: 1,
      sizeY: 1
    }
  })
  .constant('moduleTypeList', [
    { name: 'Quick Stats', value: 'quickStats', maxSize:[2,1] },
    { name: 'Recent Messages', value: 'recentMessages', maxSize:[1,1] },
    { name: 'Featured Offers', value: 'featuredOffers', maxSize:[1,1] },
    { name: 'Performance Chart', value: 'performanceChart', maxSize:[2,1] }
  ])
  .constant('quickStatTypeList', [
    { name: 'Clicks', type: 'clicks'},
    { name: 'Impressions', type: 'impressions'},
    { name: 'Payout', type: 'payout'},
    { name: 'PayoutYTD', type: 'payoutytd'},
    { name: 'Conversions', type: 'conversions'}
  ])

  .controller('ModuleLayoutCtrl',
    [ '$scope', 'defaultModuleObject', 'defaultQuickStatObject', 'moduleTypeList', 'quickStatTypeList',
    function ($scope, DEFAULT_MODULE_OBJECT, DEFAULT_QUICK_STAT_OBJECT, MODULE_TYPE_LIST, QUICK_STAT_TYPE_LIST) {
      var moduleLayout = this;

      moduleLayout.qStatModules = QUICK_STAT_TYPE_LIST;
      moduleLayout.moduleTypeList = MODULE_TYPE_LIST;
      moduleLayout.modules = [
        {
          label: 'My Quick Stats',
          type : 'quickStats',
          showConfig: false,
          quickStatModules:[
            {
              type: 'clicks',
              grid:{
                row: 0,
                col: 0,
                sizeX: 1,
                sizeY: 1
              }
            },
            {
              type: 'impressions',
              grid:{
                row: 0,
                col: 1,
                sizeX: 1,
                sizeY: 1
              }
            },
            {
              type: 'payout',
              grid:{
                row: 0,
                col: 2,
                sizeX: 1,
                sizeY: 1
              }
            },
            {
              type: 'payoutYtd',
              grid:{
                row: 0,
                col: 3,
                sizeX: 1,
                sizeY: 1
              }
            },
            {
              type: 'conversions',
              grid:{
                row: 0,
                col: 4,
                sizeX: 1,
                sizeY: 1
              }
            }
          ],
          grid : {
            maxSizeX: 2,
            maxSizeY: 2,
            row: 0,
            col: 0,
            sizeX: 2,
            sizeY: 1
          }
        },
        {
          label: 'My Recent Messages',
          type : 'recentMessages',
          showConfig: false,
          grid : {
            maxSizeX: 1,
            maxSizeY: 1,
            row: 1,
            col: 0,
            sizeX: 1,
            sizeY: 2
          }
        },
        {
          label: 'My Featured Offers',
          type : 'featuredOffers',
          showConfig: false,
          grid : {
            maxSizeX: 1,
            maxSizeY: 1,
            row: 1,
            col: 1,
            sizeX: 1,
            sizeY: 2
          }
        },
        {
          label: 'Default Module D',
          type : 'performanceChart',
          showConfig: false,
          grid : {
            row: 3,
            col: 0,
            sizeX: 2,
            sizeY: 2
          }
        },
        {
          label: 'Secondary Quick Stats',
          type : 'quickStats',
          showConfig: false,
          quickStatModules:[
            {
              type: 'payoutYtd',
              grid:{
                row: 0,
                col: 0,
                sizeX: 1,
                sizeY: 1
              }
            },
            {
              type: 'impressions',
              grid:{
                row: 0,
                col: 1,
                sizeX: 1,
                sizeY: 1
              }
            },
            {
              type: 'clicks',
              grid:{
                row: 0,
                col: 2,
                sizeX: 1,
                sizeY: 1
              }
            },
            {
              type: 'conversions',
              grid:{
                row: 0,
                col: 3,
                sizeX: 1,
                sizeY: 1
              }
            }
          ],
          grid : {
            row: 6,
            col: 0,
            sizeX: 2,
            sizeY: 1
          }
        }
      ];

      // modules modifier
      moduleLayout.addNewModule = function () {
        var newModule = angular.extend({}, DEFAULT_MODULE_OBJECT);
        newModule.grid = {row: 0, col: 0}; // create new gridster attribute
        moduleLayout.modules.push(newModule);
      };

      moduleLayout.removePanel = function (index) {
        moduleLayout.modules.splice(index,1);
      };

      var quickStatMaxColumn = $scope.quickStatOpts.columns;
      // quick Stats modifier
      moduleLayout.addQuickStatsWidget = function(targetModule, qStatModule){
        var newQuickStat = angular.extend({}, qStatModule);
        newQuickStat.grid = {row: 0, col: 0}; // create new gridster attribute
        targetModule.quickStatModules.push(newQuickStat);

        // update the container height
        targetModule.grid.sizeY = Math.ceil( targetModule.quickStatModules.length / quickStatMaxColumn );
        return false;
      };

      moduleLayout.removeQuickStats = function(targetModule, index){
        targetModule.quickStatModules.splice(index,1);
        // update the container height
        targetModule.grid.sizeY = Math.ceil( targetModule.quickStatModules.length / quickStatMaxColumn );
      };

      moduleLayout.getBackgroundImage = function(type){
        // return the background image for the module panel
        //TODO: Check for item width to return the correct image background
        return 'images/' + type + '_bg.jpg';
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

      moduleLayout.showModuleDataContainer = false;
      moduleLayout.showModuleData = function(){
        moduleLayout.showModuleDataContainer = !moduleLayout.showModuleDataContainer;
        if( moduleLayout.showModuleDataContainer){
          moduleLayout.modulesDataAsString = JSON.stringify(moduleLayout.modules);
        }
      }
    }
  ]);
