
(function () {

    angular
        .module('imageViewer')
        .directive('infiniteScroll', infiniteScroll);

    function infiniteScroll($timeout) {

        var directive = {
            restrict: 'EA',
            replace: true,
            scope: {
                infiniteScroll: '&'
            },
            link: link
        };

        return directive;

        function link(scope, el, attr, ctrl) {

            document.addEventListener('scroll', onDocumentScroll);

            scope.$on('$destroy', function () {
                document.removeEventListener('scroll', onDocumentScroll)
            });

            ///////////

            function onDocumentScroll() {
                if (window.pageYOffset + document.documentElement.offsetHeight >= document.documentElement.scrollHeight) {
                    scope.$apply(scope.infiniteScroll);
                }
            }
        }
    }
})();

