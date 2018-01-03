(function() {
    'use strict';

    angular
        .module('app')
        .factory('tomatoGridService', tomatoGridService);

    tomatoGridService.$inject = [];

    function tomatoGridService() {
        var service = {
            filterDataByFarm: filterDataByFarm,
            getGridColumns : getGridColumns
            
        };

        return service; 

        function filterDataByFarm(data, filter) {
            return _.filter(data, function(data) {return data.farm.Title === filter;});
        }

        function getGridColumns(){
            return ["Color","Cost","Ounces","Picked", "Season"];
        }

        function filterDataFromSearch(data, searchVal) {
            return _.filter(data, function(data) {
                return (
                searchVal === '' ||
                data.Season.toLowerCase().indexOf(searchVal) != -1 || 
                data.Color.toLowerCase().indexOf(searchVal) != -1 ||
                data.Cost.toLowerCase().indexOf(searchVal) != -1 ||
                data.Ounces.toLowerCase().indexOf(searchVal) != -1 ||
                data.Picked.toLowerCase().indexOf(searchVal) != -1);
            });
        }
    }
})();
