
(function () {
    'use strict';

    angular
        .module('imageViewer')
        .controller('ImagesListController', ImagesListController);

    ImagesListController.$inject = ['ImageService'];

    function ImagesListController(ImageService) {

        var vm = this;

        var imagesList;

        vm.loadMore = loadMore;

        loadImagesList();

        ///////////

        function loadImagesList() {
            vm.loading = true;
            ImageService.getAllImages()
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