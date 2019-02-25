// @ts-check
/// <reference lib="dom" />
(function(angular, undefined) {
    function SortableDirective($element) {
        /** @var {HTMLElement} element */
        this.element = $element.get(0);
        /** @var {Sortable} sortable */
        this.sortable = undefined;
    }
    SortableDirective.prototype = {
        $onInit: function() {
            this.sortable = new window.Draggable.Sortable(this.element, {
                draggable: '.draggable',
                mirror: {
                    appendTo: this.element,
                    constrainDimensions: true,
                },
            });
        },
    };
    SortableDirective.$inject = ['$element'];

    var descriptor = function() {
        return {
            restrict: 'A',
            bindToController: {},
            controller: SortableDirective,
        };
    };
    angular.module('draggable').directive('sortable', descriptor);
})(angular);
