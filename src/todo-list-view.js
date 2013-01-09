//......................................................................................................................
(function (app) {

    app.todoListView = (function ($parent, list, dom) {

        var render,
            remove,
            keyup,
            toggle
            ;

        remove = function () {
            var parentNode = findItemRoot(this);
            var id = parentNode.getAttribute('data-id');
            list.remove(id);
            render();
        };

        keyup = function (e) {
            if (e.keyCode === 13) {
                var value = this.value;
                list.add(value);
                render();
            }
        };

        toggle = function () {
            var parentNode = findItemRoot(this);
            parentNode.classList.toggle('completed');
            var id = parentNode.getAttribute('data-id');
            list.toggle(id);
        };

        var findItemRoot = function(node) {
            if (node.getAttribute('data-id')) {
                return node;
            } else {
                var parentNode = node.parentNode;
                return findItemRoot(parentNode);
            }
        };

        render = function () {
            var $root = dom.createElement('ul', null, {id: 'todos'});
            var items = list.items;
            var $li;
            for (var id in items) {
                if (items.hasOwnProperty(id)) {
                    var item = items[id];
                    var attributes = {'data-id': id};
                    if (item.completed) {
                        attributes['class'] = 'completed';
                    }
                    var $checkbox = dom.createElement('input', null, {type: 'checkbox'}, {change: toggle});
                    $checkbox.checked = item.completed;
                    $li = dom.createElement('li', null, attributes, {});
                    var $label = dom.createElement('label', [$checkbox, item.value]);
                    $li.appendChild($label);
                    $li.appendChild(dom.createElement('button', 'x', {}, {click: remove}));
                    $root.appendChild($li);
                }
            }
            $li = dom.createElement('li', null, {}, {});
            $li.appendChild(dom.createElement('input', '', {type: 'text'}, {keyup: keyup}));
            $root.appendChild($li);
            $parent.innerHTML = '';
            $parent.appendChild($root);
            return this;
        };

        return {
            render: render
        };
    });
})(App);