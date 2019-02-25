// @ts-check
(function(angular, undefined) {
    function SortableDirective($element) {
        /** @var {HTMLElement} element */
        this.element = $element.get(0);
        /** @var {Sortable} sortable */
        this.sortable = undefined;

        this._onSortableSort = this._onSortableSort.bind(this);
        this._onSortableSorted = this._onSortableSorted.bind(this);
        this._onSortableStart = this._onSortableStart.bind(this);
        this._onSortableStop = this._onSortableStop.bind(this);
    }
    SortableDirective.prototype = {
        _onSortableSort: function(evt) {
            console.log(evt);
        },
        _onSortableStart: function(evt) {
            console.log(evt);
        },
        _onSortableStop: function(evt) {
            console.log(evt);
        },
        _onSortableSorted: function(evt) {
            console.log(evt);
        },

        $onInit: function() {
            this.sortable = new window.Draggable.Sortable(this.element, {
                draggable: '.draggable',
                mirror: {
                    appendTo: this.element,
                    constrainDimensions: true,
                },
            });
            this.sortable.on('sortable:stop', this._onSortableStop);
            this.sortable.on('sortable:start', this._onSortableStart);
            this.sortable.on('sortable:sorted', this._onSortableSorted);
            this.sortable.on('sortable:sort', this._onSortableSort);
        },

        $onDestroy: function() {
            this.sortable.off('sortable:stop', this._onSortableStop);
            this.sortable.off('sortable:start', this._onSortableStart);
            this.sortable.off('sortable:sorted', this._onSortableSorted);
            this.sortable.off('sortable:sort', this._onSortableSort);
            this.sortable && this.sortable.destroy();
        },
    };
    SortableDirective.$inject = ['$element'];

    var descriptor = function() {
        return {
            restrict: 'A',
            bindToController: {
                onSortableStart: '&',
                onSortableSort: '&',
                onSortableSorted: '&',
                onSortableStop: '&',
            },
            controller: SortableDirective,
        };
    };
    angular.module('draggable').directive('sortable', descriptor);
})(angular);
