
describe('Todo List View Tests', function () {


    var view,
        $fixture,
        todoList;


    beforeEach(function () {
        $fixture = document.getElementById('fixture');
        todoList = App.todoList();
        view = App.todoListView($fixture, todoList, App.dom());
    });


    it('should create an empty todo list', function () {
        view.render();
        expect($fixture.innerHTML).toEqual(
            '<ul id="todos">' +
            '<li><input type="text"></li>' +
            '</ul>');
    });


    it('should create a todo list with a single item', function () {
        todoList.add('an item');
        view.render();
        expect($fixture.innerHTML).toEqual(
            '<ul id="todos">' +
            '<li data-id="1"><label><input type="checkbox">an item</label><button>x</button></li>' +
            '<li><input type="text"></li>' +
            '</ul>');
    });


    it('should create a todo list with mulitple items', function () {
        todoList.add('item 1');
        todoList.add('item 2');
        todoList.add('item 3');
        view.render();
        expect($fixture.innerHTML).toEqual(
            '<ul id="todos">' +
            '<li data-id="1"><label><input type="checkbox">item 1</label><button>x</button></li>' +
            '<li data-id="2"><label><input type="checkbox">item 2</label><button>x</button></li>' +
            '<li data-id="3"><label><input type="checkbox">item 3</label><button>x</button></li>' +
            '<li><input type="text"></li>' +
            '</ul>');
    });


    it('should remove item when delete button clicked', function () {
        todoList.add('item 1');
        todoList.add('item 2');
        todoList.add('item 3');
        view.render();
        // delete 'item 2'
        document.querySelectorAll('li[data-id="2"] button')[0].click();
        expect($fixture.innerHTML).toEqual(
            '<ul id="todos">' +
                '<li data-id="1"><label><input type="checkbox">item 1</label><button>x</button></li>' +
                '<li data-id="3"><label><input type="checkbox">item 3</label><button>x</button></li>' +
                '<li><input type="text"></li>' +
                '</ul>');
    });


    it('should toggle completed state when checkbox clicked', function () {
        todoList.add('item 1');
        todoList.add('item 2');
        todoList.add('item 3');
        view.render();
        var $checkbox = document.querySelectorAll('li[data-id="2"] input[type="checkbox"]')[0];
        $checkbox.click();
        expect($fixture.innerHTML).toEqual(
            '<ul id="todos">' +
                '<li data-id="1"><label><input type="checkbox">item 1</label><button>x</button></li>' +
                '<li data-id="2" class="completed"><label><input type="checkbox">item 2</label><button>x</button></li>' +
                '<li data-id="3"><label><input type="checkbox">item 3</label><button>x</button></li>' +
                '<li><input type="text"></li>' +
                '</ul>');
        expect($checkbox.checked).toBeTruthy();
    });


    it('should toggle completed state when item text clicked', function () {
        todoList.add('item 1');
        todoList.add('item 2');
        todoList.add('item 3');
        view.render();
        document.querySelectorAll('li[data-id="2"] label')[0].click();
        expect($fixture.innerHTML).toEqual(
            '<ul id="todos">' +
                '<li data-id="1"><label><input type="checkbox">item 1</label><button>x</button></li>' +
                '<li data-id="2" class="completed"><label><input type="checkbox">item 2</label><button>x</button></li>' +
                '<li data-id="3"><label><input type="checkbox">item 3</label><button>x</button></li>' +
                '<li><input type="text"></li>' +
                '</ul>');
        var $checkbox = document.querySelectorAll('li[data-id="2"] input[type="checkbox"]')[0];
        expect($checkbox.checked).toBeTruthy();
    });


});