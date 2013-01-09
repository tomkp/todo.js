
describe('Dom Tests', function () {


    var dom = App.dom();


    it('should create a span', function () {
        var $element = dom.createElement('span');
        expect($element.outerHTML).toEqual('<span></span>');
    });


    it('should create a span with inner html', function () {
        var $element = dom.createElement('span', 'Some text');
        expect($element.outerHTML).toEqual('<span>Some text</span>');
    });


    it('should create a div with an inner span and some text', function () {
        var arrayOfContent = [document.createElement('span'), 'Some text'];
        var $element = dom.createElement('div', arrayOfContent);
        expect($element.outerHTML).toEqual('<div><span></span>Some text</div>');
    });


    it('should create a span with inner html and attributes', function () {
        var $element = dom.createElement('span', 'Some text', {class: 'xyz'});
        expect($element.outerHTML).toEqual('<span class="xyz">Some text</span>');
    });


    it('should attach event listener', function () {
        var spy = {
            listener: function() {}
        };
        spyOn(spy, 'listener');
        var $element = dom.createElement('button', null, null, {click: spy.listener});
        $element.click();
        expect(spy.listener).toHaveBeenCalled();
    });


});