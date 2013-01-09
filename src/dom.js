//......................................................................................................................

(function (app) {

    app.dom = (function () {

        // Augment an element with event listeners, attributes etc...
        var augment = function ($element, map, fn) {
            if (map) {
                for (var key in map) {
                    if (map.hasOwnProperty(key)) {
                        fn.call($element, key, map[key]);
                    }
                }
            }
        };


        // Insert an item or array of items into the element
        var insertContents = function($element, contents) {
            if (contents) {
                var array = [].concat(contents);
                for (var i = 0, len = array.length; i < len; i++) {
                    var item = array[i];
                    if (typeof item == 'string') {
                        // Because we want to append an element we have to create a text node for a simple String
                        $element.appendChild(document.createTextNode(item));
                    } else {
                        $element.appendChild(item);
                    }
                }
            }
        };


        var createElement = function (tag, contents, attributes, events) {
            var $element = document.createElement(tag);
            insertContents($element, contents);
            augment($element, events, $element.addEventListener);
            augment($element, attributes, $element.setAttribute);
            return $element;
        };

        return {
            createElement: createElement
        };
    });
})(App);

