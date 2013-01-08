
describe('View Tests', function () {


    var view,
        $fixture,
        todoList;


    beforeEach(function () {
        $fixture = document.getElementById('fixture');
        todoList = App.todoList();
        view = App.todoListView($fixture, todoList);
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
            '<li data-id="1"><input type="checkbox"><span>an item</span><button>x</button></li>' +
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
            '<li data-id="1"><input type="checkbox"><span>item 1</span><button>x</button></li>' +
            '<li data-id="2"><input type="checkbox"><span>item 2</span><button>x</button></li>' +
            '<li data-id="3"><input type="checkbox"><span>item 3</span><button>x</button></li>' +
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
                '<li data-id="1"><input type="checkbox"><span>item 1</span><button>x</button></li>' +
                '<li data-id="3"><input type="checkbox"><span>item 3</span><button>x</button></li>' +
                '<li><input type="text"></li>' +
                '</ul>');
    });


    it('should toggle completed state when checkbox clicked', function () {
        todoList.add('item 1');
        todoList.add('item 2');
        todoList.add('item 3');
        view.render();
        // delete 'item 2'
        document.querySelectorAll('li[data-id="2"] input[type="checkbox"]')[0].click();
        expect($fixture.innerHTML).toEqual(
            '<ul id="todos">' +
                '<li data-id="1"><input type="checkbox"><span>item 1</span><button>x</button></li>' +
                '<li data-id="2" class="completed"><input type="checkbox"><span>item 2</span><button>x</button></li>' +
                '<li data-id="3"><input type="checkbox"><span>item 3</span><button>x</button></li>' +
                '<li><input type="text"></li>' +
                '</ul>');
    });


});