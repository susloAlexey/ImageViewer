
(function () {
    'use strict';

    angular
        .module('imageViewer')
        .controller('AlbumController', AlbumController);

    AlbumController.$inject = ['ImageService', 'albumId'];

    function AlbumController(ImageService, albumId) {

        var vm = this;

        loadAlbum();

        ///////////

        function loadAlbum() {
            vm.loading = true;
            ImageService.getAlbum(albumId)
                .then(
                function success(response) {
                    vm.images = response;
                    vm.loading = false;
                },
                function error(err) {
                    vm.loading = false;
                });
        }
    }
})();