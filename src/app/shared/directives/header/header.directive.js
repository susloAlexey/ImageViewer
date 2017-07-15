
(function () {

    angular
        .module('imageViewer')
        .directive('appHeader', appHeader);

    function appHeader() {

        var directive = {
            restrict: 'EA',
            templateUrl: 'src/app/shared/directives/header/header.directive.html',
            replace: true,
            scope: {},
            link: link,
            controller: HeaderController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function link(scope, el, attr, ctrl) {
        }
    }

    HeaderController.$inject = [];

    function HeaderController() {

        var vm = this;

    }
})();

