angular
    .module('hshs').controller('showController', ['$rootScope', '$scope', '$routeParams', '$sce', '$localStorage', 'showService', function($rootScope, $scope, $routeParams, $sce, $localStorage, showService) {
        var showId;
        showId = parseInt($routeParams.showId);

        showService.getAll().then(function(data) {
            $scope.shows = data.data;
        });

        if(showId != undefined) {
            showService.getShow(showId).then(function (data) {
                $scope.show = data.data[0];
                $scope.body = $sce.trustAsHtml(data.data[0].body[0].value);
                console.log(data.data[0]);
            });
        }

    }]);