angular
    .module('hshs').controller('blogController', ['$rootScope', '$scope', '$routeParams', '$sce', '$localStorage', 'blogService', function($rootScope, $scope, $routeParams, $sce, $localStorage, blogService) {

        blogService.getAll().then(function(data) {
            $scope.blogs = data.data;
            $scope.currentBlog = data.data[0];
            $scope.currentBlog.content = $sce.trustAsHtml(data.data[0].body);

        });

        $scope.showBlog = function(nid) {
            $scope.currentBlog = $scope.blogs[nid];
            $scope.currentBlog.content = $sce.trustAsHtml($scope.blogs[nid].body);
        };
    }]);