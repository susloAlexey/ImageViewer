
(function () {

    angular
        .module('imageViewer')
        .directive('appFooter', appFooter);

    function appFooter() {

        var directive = {
            restrict: 'EA',
            templateUrl: 'src/app/shared/directives/footer/footer.directive.html',
            replace: true,
            scope: {},
            link: link,
            controller: FooterController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function link(scope, el, attr, ctrl) {
        }
    }

    FooterController.$inject = [];

    function FooterController() {

        var vm = this;

    }
})();

