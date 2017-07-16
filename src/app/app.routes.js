
(function () {
    'use strict';

    angular
        .module('imageViewer')
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('/', {
                    url: '/',
                    templateUrl: 'app/modules/images-list/images-list.template.html',
                    controller: 'ImagesListController as vm'
                })
                .state('album-view', {
                    url: '/album/{albumId}',
                    templateUrl: 'app/modules/album/album.template.html',
                    controller: 'AlbumController as vm',
                    resolve: {
                        albumId: function ($stateParams) {
                            return $stateParams.albumId;
                        }
                    }
                })
                .state('image-view', {
                    url: '/image/{imageId}',
                    templateUrl: 'app/modules/image/image.template.html',
                    controller: 'ImageController as vm',
                    resolve: {
                        imageId: function ($stateParams) {
                            return $stateParams.imageId;
                        }
                    }
                });
        });
})();