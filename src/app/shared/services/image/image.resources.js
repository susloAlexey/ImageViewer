
(function () {
    'use strict';

    angular
        .module('imageViewer')
        .constant('ImageResourcesConfig', {
            base: 'https://jsonplaceholder.typicode.com',
            endpoints: {
                getImages: {
                    url: '/Photos'
                },
                getImage: {
                    url: '/Photos/:imageId',
                    params: {
                        imageId: '@imageId'
                    }
                }
            }

        });
})();

