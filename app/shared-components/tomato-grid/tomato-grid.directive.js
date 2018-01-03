(function() {
    'use strict';
 
    angular
        .module('app')
        .directive('tomatoGrid', tomatoGrid);
 
    function tomatoGrid() {
        var directive = {
            scope: {
                data: "<",
                listView: "<"
            },
            restrict: 'E',
            controller: TomatoGridController,
            bindToController: true,
            controllerAs: 'vm',
            templateUrl: './app/shared-components/tomato-grid/tomato-grid.directive.html'
        };
 
        return directive;
    }
 
    TomatoGridController.$inject = ['tomatoGridService'];
 
    function TomatoGridController(tomatoGridService) {
        var vm = this;
        vm.search = '';
        vm.gridcolumns = tomatoGridService.getGridColumns();
        vm.gridData = tomatoGridService.filterDataByFarm(vm.data, vm.listView);
        vm.gridDataOnLoad = angular.copy(vm.gridData);
        vm.filterGrid=function(){
            vm.gridData= tomatoGridService.filterDataFromSearch(vm.gridDataOnLoad, vm.search);
        }
    }
 })();
 