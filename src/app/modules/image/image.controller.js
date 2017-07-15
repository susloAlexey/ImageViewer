
(function () {
    'use strict';

    angular
        .module('imageViewer')
        .controller('ImageController', ImageController);

    ImageController.$inject = ['ImageService', 'imageId'];

    function ImageController(ImageService, imageId) {

        var vm = this;

        loadImage();

        ///////////

        function loadImage() {
            vm.loading = true;
            ImageService.getImage(imageId)
                .then(
                function success(response) {
                    vm.image = response;
                    vm.loading = false;
                },
                function error(err) {
                    vm.loading = false;
                });
        }
    }
})();