//......................................................................................................................

(function (app) {

    app.dom = (function () {

        var augment = function ($element, map, fn) {
            if (map) {
                for (var key in map) {
                    if (map.hasOwnProperty(key)) {
                        fn.call($element, key, map[key]);
                    }
                }
            }
        };

        var createElement = function (tag, html, attributes, events) {
            var $element = document.createElement(tag);
            if (html) {
                $element.innerHTML = html;
            }
            augment($element, events, $element.addEventListener);
            augment($element, attributes, $element.setAttribute);
            return $element;
        };

        return {
            createElement: createElement
        };
    });
})(App);

