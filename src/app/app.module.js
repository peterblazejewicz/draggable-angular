(function() {
    angular.module('demoApp', ['draggable']);

    function DemoController(){
        console.log('DemoController');
        this.name = 'DemoController';
    }

    DemoController.prototype = {
        getContainer: function() {
            console.log('getContainer');
            return document.querySelector('.container');
        },
        $onInit: function() {
            var self =this;
            console.log('DemoController.$onInit');
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


    angular.module('demoApp')
        .controller('DemoController', DemoController);
})();