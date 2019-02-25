// @ts-check
(function(angular, undefined) {
    function DraggableDemoController() {}

    DraggableDemoController.prototype = {
        getContainer: function() {
            return document.querySelector('.container');
        },
        $onInit: function() {
        },

        onDragStart: function(evt) {
            console.log(evt);
        },
        onDragMove: function(evt) {
            console.log(evt);
        },
        onDragStop: function(evt) {
            console.log(evt);
        },
    };

    angular
        .module('demoApp')
        .controller('DraggableDemoController', DraggableDemoController);
})(angular);
