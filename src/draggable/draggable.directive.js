// @ts-check
(function(angular) {
    var className = 'draggable-item';

    function Draggable($element) {
        this.element = $element[0];
        this.draggable = undefined;
        this._onDragMove = this._onDragMove.bind(this);
        this._onDragStart = this._onDragStart.bind(this);
        this._onDragStop = this._onDragStop.bind(this);
    }
    Draggable.prototype = {
        _onDragMove: function(evt) {
            this.onDragMove({
                evt: evt,
            });
        },
        _onDragStart: function(evt) {
            this.onDragStart({
                evt: evt,
            });
        },
        _onDragStop: function(evt) {
            this.onDragStop({
                evt: evt,
            });
        },

        $onInit: function() {},
        $postLink: function() {
            this.element.classList.add(className);
            this.container = this.getContainer();
            this.draggable = new window.Draggable.Draggable(this.container, {
                draggable: '.' + className,
            });
            this.draggable.on('drag:start', this._onDragStart);
            this.draggable.on('drag:move', this._onDragMove);
            this.draggable.on('drag:stop', this._onDragStop);
        },
        $destroy: function() {
            this.draggable.off('drag:start', this._onDragStart);
            this.draggable.off('drag:move', this._onDragMove);
            this.draggable.off('drag:stop', this._onDragStop);
            this.draggable = undefined;
            console.log('$destroy');
        },
    };
    Draggable.$inject = ['$element'];

    var descriptor = function() {
        return {
            restrict: 'A',
            bindToController: {
                getContainer: '&',
                onDragMove: '&',
                onDragStart: '&',
                onDragStop: '&',
            },
            scope: false,
            controller: Draggable,
        };
    };

    angular.module('draggable').directive('draggable', descriptor);
})(angular);
