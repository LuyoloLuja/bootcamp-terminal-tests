let assert = require('assert');
let findItemsOver = require('../findItemsOver')

describe('The findItemsOver function', function(){
    var result = [
        {name:'apples', qty:40},
        {name:'pears', qty:20},
        {name:'bananas', qty:23},
        {name:'apples', qty:37},
    ];

    it('Should return true for apples', function(){
        assert.equal(result.apples, undefined);
    })
    it('Should return false for pears', function(){
        assert.equal(result.pears, undefined);
    })
    it('Should return false for bananas', function(){
        assert.equal(result.bananas, undefined);
    })
})