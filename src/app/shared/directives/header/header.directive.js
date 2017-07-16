
(function () {

    angular
        .module('imageViewer')
        .directive('appHeader', appHeader);

    function appHeader() {

        var directive = {
            restrict: 'EA',
            templateUrl: 'app/shared/directives/header/header.directive.html',
            replace: true,
            scope: {},
            link: link
        };

        return directive;

        function link(scope, el, attr, ctrl) {
        }
    }
})();

