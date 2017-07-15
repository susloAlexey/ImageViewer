
(function () {
    'use strict';

    angular
        .module('imageViewer')
        .controller('ImagesListController', ImagesListController);

    ImagesListController.$inject = ['ImageService'];

    function ImagesListController(ImageService) {

        var vm = this;

        loadImagesList();

        ///////////

        function loadImagesList() {
            vm.loading = true;
            ImageService.getAllImages()
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