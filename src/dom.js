//......................................................................................................................

(app => {

    app.dom = (() => {

        // Augment an element with event listeners, attributes etc...
        const augment = ($element, map, fn) => {
            if (map) {
                for (let key in map) {
                    if (map.hasOwnProperty(key)) {
                        fn.call($element, key, map[key]);
                    }
                }
            }
        };


        // Insert an item or array of items into the element
        const insertContents = ($element, contents) => {
            if (contents) {
                const array = [].concat(contents);
                let i = 0;
                const len = array.length;
                for (; i < len; i++) {
                    const item = array[i];
                    if (typeof item == 'string') {
                        // Because we want to append an element we have to create a text node for a simple String
                        $element.appendChild(document.createTextNode(item));
                    } else {
                        $element.appendChild(item);
                    }
                }
            }
        };


        const createElement = (tag, contents, attributes, events) => {
            const $element = document.createElement(tag);
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

