"use strict";angular.module("dashboardLayoutGridApp",["gridster","ngAnimate","ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("dashboardLayoutGridApp").controller("MainCtrl",["$scope",function(a){a.gridsterOpts={columns:2,pushing:!0,floating:!0,width:"auto",colWidth:"auto",rowHeight:240,margins:[10,10],isMobile:!1,minColumns:1,minRows:1,maxRows:100,defaultSizeX:2,defaultSizeY:1,mobileBreakPoint:600,resizable:{enabled:!0,handles:"n, e, s, w, ne, se, sw, nw"},draggable:{enabled:!0,handle:".move-handle"}},a.quickStatOpts={columns:5,pushing:!0,floating:!0,width:"auto",colWidth:"auto",rowHeight:150,margins:[10,10],isMobile:!1,minColumns:1,minRows:1,maxRows:1,defaultSizeX:1,defaultSizeY:1,mobileBreakPoint:600,resizable:{enabled:!1},draggable:{enabled:!0,handle:".move-handle"}}}]),angular.module("dashboardLayoutGridApp").constant("defaultModuleObject",{label:"Test Module New",type:"recentMessages",grid:{showConfig:!1,row:0,col:0,sizeX:1,sizeY:2}}).constant("defaultQuickStatObject",{label:"Test Module New",type:"click",grid:{showConfig:!1,row:0,col:0,sizeX:1,sizeY:1}}).constant("moduleTypeList",[{name:"Quick Stats",value:"quickStats",maxSize:[2,1]},{name:"Recent Messages",value:"recentMessages",maxSize:[1,1]},{name:"Featured Offers",value:"featuredOffers",maxSize:[1,1]},{name:"Performance Chart",value:"performanceChart",maxSize:[2,1]}]).constant("quickStatTypeList",[{name:"Clicks",value:"clicks"},{name:"Impressions",value:"impressions"},{name:"Payout",value:"payout"},{name:"PayoutYTD",value:"payoutytd"},{name:"Conversions",value:"conversions"}]).controller("ModuleLayoutCtrl",["$scope","defaultModuleObject","defaultQuickStatObject","moduleTypeList","quickStatTypeList",function(a,b,c,d){var e=this;e.moduleTypeList=d,e.modules=[{label:"My Quick Stats",type:"quickStats",showConfig:!1,quickStatModules:[{type:"clicks",grid:{row:0,col:0,sizeX:1,sizeY:1}},{type:"impressions",grid:{row:0,col:1,sizeX:1,sizeY:1}},{type:"payout",grid:{row:0,col:2,sizeX:1,sizeY:1}},{type:"payoutYtd",grid:{row:0,col:3,sizeX:1,sizeY:1}},{type:"conversions",grid:{row:0,col:4,sizeX:1,sizeY:1}}],grid:{maxSizeX:2,maxSizeY:2,row:0,col:0,sizeX:2,sizeY:1}},{label:"My Recent Messages",type:"recentMessages",showConfig:!1,grid:{maxSizeX:1,maxSizeY:1,row:1,col:0,sizeX:1,sizeY:2}},{label:"My Featured Offers",type:"featuredOffers",showConfig:!1,grid:{maxSizeX:1,maxSizeY:1,row:1,col:1,sizeX:1,sizeY:2}},{label:"Default Module D",type:"performanceChart",showConfig:!1,grid:{row:3,col:0,sizeX:2,sizeY:2}},{label:"Secondary Quick Stats",type:"quickStats",showConfig:!1,quickStatModules:[{type:"payoutYtd",grid:{row:0,col:0,sizeX:1,sizeY:1}},{type:"impressions",grid:{row:0,col:1,sizeX:1,sizeY:1}},{type:"clicks",grid:{row:0,col:2,sizeX:1,sizeY:1}},{type:"conversions",grid:{row:0,col:3,sizeX:1,sizeY:1}}],grid:{row:6,col:0,sizeX:2,sizeY:1}}],e.addNewModule=function(){var a=new angular.extend({},b);e.modules.push(a)},e.removePanel=function(a){e.modules.splice(a,1)};a.quickStatOpts.columns;e.addQuickStatsWidget=function(a){var b=angular.extend({},c);a.quickStatModules.push(b)},e.removeQuickStats=function(a,b){a.quickStatModules.splice(b,1)},e.getBackgroundImage=function(a){return"images/"+a+"_bg.jpg"};var f=function(a){e.modules[a].showConfig=!e.modules[a].showConfig};e.showPanelConfig=function(a){f(a)},e.saveConfig=function(a){f(a)},e.showModuleDataContainer=!1,e.showModuleData=function(){e.showModuleDataContainer=!e.showModuleDataContainer,e.showModuleDataContainer&&(e.modulesDataAsString=JSON.stringify(e.modules))}}]),angular.module("dashboardLayoutGridApp").directive("flipCard",["ngAnimate"],function(a){return function(b,c,d){b.$watch(d.flipCard,function(b){b?a.addClass(c,"show-back-side"):a.removeClass(c,"show-back-side")})}});