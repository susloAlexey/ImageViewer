
(function () {
    'use strict';

    angular
        .module('imageViewer')
        .controller('AlbumController', AlbumController);

    AlbumController.$inject = ['ImageService', 'albumId'];

    function AlbumController(ImageService, albumId) {

        var vm = this;

        var imagesList;

        vm.loadMore = loadMore;

        loadAlbum();

        ///////////

        function loadAlbum() {
            vm.loading = true;
            ImageService.getAlbum(albumId)
                .then(
                function success(response) {
                    imagesList = response;
                    vm.images = imagesList.slice(0, 18);
                    vm.loading = false;
                },
                function error(err) {
                    vm.loading = false;
                });
        }

        function loadMore() {
            if (vm.images.length !== imagesList.length) {
                vm.images = imagesList.slice(0, vm.images.length + 18);
            }
        }
    }
})();