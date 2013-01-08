//......................................................................................................................
(function (app) {

    app.todoListView = (function ($parent, list) {

        var render,
            remove,
            keyup,
            toggle,
            dom = App.dom();

        remove = function () {
            var parentNode = this.parentNode;
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
            var parentNode = this.parentNode;
            parentNode.classList.toggle('completed');
            var id = parentNode.getAttribute('data-id');
            list.toggle(id);
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
                    $li = dom.createElement('li', null, attributes, {});
                    var $checkbox = dom.createElement('input', null, {type: 'checkbox'}, {change: toggle});
                    $checkbox.checked = item.completed;
                    $li.appendChild($checkbox);
                    $li.appendChild(dom.createElement('span', item.value));
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