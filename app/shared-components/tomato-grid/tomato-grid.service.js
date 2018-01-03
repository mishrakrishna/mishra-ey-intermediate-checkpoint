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
                data.Season === searchVal || 
                data.Color === searchVal ||
                data.Cost === searchVal ||
                data.Ounces === searchVal ||
                data.Picked === searchVal);
            });
        }
    }
})();
