angular
    .module('hshs').factory('blogService', ['$rootScope', '$http', 'toaster', 'baseUrl', function ($rootScope, $http, toaster, baseUrl) {
        var promise = {};

        output = {
            getAll: function () {
                promise = $http({
                    method: 'GET',
                    url: baseUrl + 'blogs',
                    params: {},
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
