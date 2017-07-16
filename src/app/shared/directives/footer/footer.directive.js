
(function () {

    angular
        .module('imageViewer')
        .directive('appFooter', appFooter);

    function appFooter() {

        var directive = {
            restrict: 'EA',
            templateUrl: 'app/shared/directives/footer/footer.directive.html',
            replace: true,
            scope: {},
            link: link
        };

        return directive;

        function link(scope, el, attr, ctrl) {
        }
    }
})();

