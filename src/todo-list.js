
//......................................................................................................................
(function(app) {

    app.todoList = (function () {

        var add,
            remove,
            toggle,
            items = {},
            idCounter = 0,
            uniqueId;

        // Generate a 'unique' id, by incrementing a counter
        uniqueId = function () {
            return ++idCounter + '';
        };

        // Add a new item to the list
        add = function (todo) {
            // Generate an id
            var id = uniqueId();
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
        toggle = function(id) {
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