describe('Todo List Tests', () => {


    let todos;


    beforeEach(() => {
        todos = App.todoList();
    });


    it('should be able to add an item', () => {
        todos.add('item');
        const expected = {
            1: {
                value: 'item', completed: false
            }
        };
        expect(todos.items).toEqual(expected);
    });


    it('should return the id when you add an item', () => {
        const id = todos.add('an item');
        expect(id).toEqual('1');
    });


    it('should store the item by id', () => {
        const id = todos.add('an item');
        expect(todos.items[id].value).toEqual('an item');
    });


    it('should be incomplete by default', () => {
        const id = todos.add('an item');
        expect(todos.items[id].completed).toBeFalsy();
    });


    it('should be able to remove item by id', () => {
        const id = todos.add('an item');
        todos.remove(id);
        expect(todos.items).toEqual({});
    });


    it('should be able to add multiple items', () => {
        todos.add('item 1');
        todos.add('item 2');
        todos.add('item 3');
        const expected = {
            1: {
                value: 'item 1', completed: false
            },
            2: {
                value: 'item 2', completed: false
            },
            3: {
                value: 'item 3', completed: false
            }
        };
        expect(todos.items).toEqual(expected);
    });


    it('should be able to toggle the completed state', () => {
        const id = todos.add('an item');
        todos.toggle(id);
        const expected = {
            1: {
                value: 'an item', completed: true
            }
        };
        expect(todos.items).toEqual(expected);
    });
});
