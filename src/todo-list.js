
//......................................................................................................................
(app => {

    app.todoList = (() => {

        let add,
            remove,
            toggle;
        const items = {};
        let idCounter = 0,
            uniqueId;

        // Generate a 'unique' id, by incrementing a counter
        uniqueId = () => ++idCounter + '';

        // Add a new item to the list
        add = todo => {
            // Generate an id
            const id = uniqueId();
            // Store item using the id as it's key
            items[id] = {
                value: todo,
                // The item has a default status of incomplete
                completed: false
            };
            // Return the item's id
            return id;
        };

        // Remove an item from the list using the id
        remove = function (id) {
            delete items[id];
            return this;
        };

        // Toggle completed state of item
        toggle = id => {
            items[id].completed = !items[id].completed;
        };

        // The interface
        return {
            add: add,
            remove: remove,
            toggle: toggle,
            items: items
        };
    });
})(App);
