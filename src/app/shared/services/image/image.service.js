
(function () {
    'use strict';

    angular
        .module('imageViewer')
        .factory('ImageService', ImageService);

    ImageService.$inject = ['$resource', 'ImageResourcesConfig'];

    function ImageService($resource, ImageResourcesConfig) {

        var config = ImageResourcesConfig;

        var service = {
            getAllImages: getAllImages,
            getAlbum: getAlbum,
            getImage: getImage
        };

        return service;

        ///////////////

        function getAllImages() {
            var endpoint = config.endpoints.getImages;
            return $resource(config.base + endpoint.url).query().$promise;
        }

        function getAlbum(albumId) {
            var endpoint = config.endpoints.getImages;
            return $resource(config.base + endpoint.url).query({ albumId: albumId }).$promise;
        }

        function getImage(imageId) {
            var endpoint = config.endpoints.getImage;
            return $resource(config.base + endpoint.url, endpoint.params).get({ imageId: imageId }).$promise;
        }
    }
})();