//......................................................................................................................
(app => {

    app.todoListView = (($parent, list, dom) => {

        let render,
            remove,
            keyup,
            toggle
        ;

        remove = function () {
            const parentNode = findItemRoot(this);
            const id = parentNode.getAttribute('data-id');
            list.remove(id);
            render();
        };

        keyup = function (e) {
            if (e.keyCode === 13) {
                const value = this.value;
                list.add(value);
                render();
            }
        };

        toggle = function () {
            const parentNode = findItemRoot(this);
            parentNode.classList.toggle('completed');
            const id = parentNode.getAttribute('data-id');
            list.toggle(id);
        };

        findItemRoot = node => {
            if (node.getAttribute('data-id')) {
                return node;
            } else {
                const parentNode = node.parentNode;
                return findItemRoot(parentNode);
            }
        };

        render = function () {
            const $root = dom.createElement('ul', null, {id: 'todos'});
            const items = list.items;
            let $li;
            for (let id in items) {
                if (items.hasOwnProperty(id)) {
                    const item = items[id];
                    const attributes = {'data-id': id};
                    if (item.completed) {
                        attributes['class'] = 'completed';
                    }
                    const $checkbox = dom.createElement('input', null, {type: 'checkbox'}, {change: toggle});
                    $checkbox.checked = item.completed;
                    $li = dom.createElement('li', null, attributes, {});
                    const $label = dom.createElement('label', [$checkbox, item.value]);
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
