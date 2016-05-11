angular
    .module('hshs').controller('pressController', ['$rootScope', '$scope', '$routeParams', '$sce', '$localStorage', 'pressService', function ($rootScope, $scope, $routeParams, $sce, $localStorage, pressService) {
        var pressId;
        pressId = parseInt($routeParams.pressId);
        pressService.getAll().then(function (data) {
            $scope.press = data.data;
            console.log(data.data);
        });

        if ($routeParams.pressId) {
            pressService.getDetail(pressId).then(function (data) {
                $scope.pressdetail = data.data[0];
                $scope.content = $sce.trustAsHtml(data.data[0].body);
                console.log($scope.pressdetail);
            });
        }

    }]);