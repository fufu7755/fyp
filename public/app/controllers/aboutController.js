angular
    .module('hshs').controller('aboutController', ['$rootScope', '$scope', '$routeParams', '$sce', '$localStorage', 'aboutService', function($rootScope, $scope, $routeParams, $sce, $localStorage, aboutService) {

        aboutService.getAbout().then(function(data) {
            $scope.About = data.data[0];
            $scope.body = $sce.trustAsHtml(data.data[0].body[0].value);
            $scope.img = data.data[0].field_about_mg[0].url;
            if (data.data[0].field_about_file[0].url != null) {
                $scope.file = data.data[0].field_about_file[0].url;
            }
            console.log(data.data[0]);
        });

    }]);