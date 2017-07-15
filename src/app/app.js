
(function () {
    'use strict';

    angular
        .module('imageViewer', ['ui.router', 'ngResource'])
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('/', {
                    url: '/',
                    templateUrl: 'src/app/modules/images-list/images-list.template.html',
                    controller: 'ImagesListController as vm'
                })
                .state('album', {
                    url: '/album/{albumId}',
                    templateUrl: 'src/app/modules/album/album.template.html',
                    controller: 'AlbumController as vm',
                    resolve: {
                        albumId: function ($stateParams) {
                            return $stateParams.albumId;
                        }
                    }
                })
                .state('image', {
                    url: '/image/{imageId}',
                    templateUrl: 'src/app/modules/image/image.template.html',
                    controller: 'ImageController as vm',
                    resolve: {
                        imageId: function ($stateParams) {
                            return $stateParams.imageId;
                        }
                    }
                });

        });
})();