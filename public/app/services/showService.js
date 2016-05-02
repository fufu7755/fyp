angular
    .module('hshs').factory('showService', ['$rootScope', '$http', 'toaster', 'baseUrl', function ($rootScope, $http, toaster, baseUrl) {
        var promise = {};

        output = {
            getAll: function () {
                promise = $http({
                    method: 'GET',
                    url: baseUrl + 'show',
                    params: {},
                }).success(function (response) {
                    return response.result;
                }).error(function (data, status) {
                    console.log(status);
                });
                return promise;
            },
            getShow: function (showId) {
                promise = $http({
                    method: 'GET',
                    url: baseUrl + 'showdetail',
                    params: {nid : showId},
                }).success(function (response) {
                    return response.result;
                }).error(function (data, status) {
                    console.log(status);
                });
                return promise;
            }
        };

        return output;
    }]);
