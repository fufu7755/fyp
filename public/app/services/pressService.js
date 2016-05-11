angular
    .module('hshs').factory('pressService', ['$rootScope', '$http', 'toaster', 'baseUrl', function ($rootScope, $http, toaster, baseUrl) {
        var promise = {};

        output = {
            getAll: function (nid) {
                promise = $http({
                    method: 'GET',
                    url: baseUrl + 'press',
                    params: {nid: nid},
                }).success(function (response) {
                    return response.result;
                }).error(function (data, status) {
                    console.log(status);
                });
                return promise;
            },
            getDetail: function (nid) {
                promise = $http({
                    method: 'GET',
                    url: baseUrl + 'pressdetail',
                    params: {nid: nid},
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
