// @ts-check
(function(angular, undefined) {
    function SortableDemoController() {
        /** @var {String[]} items */
        this.items = [];
    }

    SortableDemoController.prototype = {
        onSortableStart: function(evt) {
            console.log(evt);
        },
        onSortableSort: function(evt) {
            console.log(evt);
        },
        onSortableSorted: function(evt) {
            console.log(evt);
        },
        onSortableStop: function(evt) {
            console.log(evt);
        },

        $onInit: function() {
            this.items = [
                'First Item',
                'Second Item',
                'Third Item',
                'Fourth Item',
            ];
        },
    };

    angular
        .module('demoApp')
        .controller('SortableDemoController', SortableDemoController);
})(angular);
