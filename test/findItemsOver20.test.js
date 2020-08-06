let assert = require('assert');
let findItemsOver20 = require('../findItemsOver20');

describe('The findItemsOver20 function', function(){
    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];

    it('Should return true for pears', function(){
        assert.equal(itemList.pears, undefined);
    })

    it('Should return true for bananas', function(){
        assert.equal(itemList.bananas, undefined);
    })
    it('Should return false for apples', function(){
        assert.equal(itemList.apples, undefined);
    })
})