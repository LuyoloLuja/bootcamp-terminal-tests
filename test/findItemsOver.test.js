/*let assert = require('assert');
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
})*/
let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('findItemsOver function' , function(){
    it('Should return apples since quantity is higher than threshold.' , function(){
        assert.deepEqual(findItemsOver([{name:"apples", qty:40}]), [{name:"apples", qty:40}])
    });
    it('Should return other apples since quantity is higher than threshold.' , function(){
        assert.deepEqual(findItemsOver([{name:"apples", qty:23}]), [{name:"apples", qty:23}])
    });
    it('Should  return an empty array for pears - quantity lower than  threshold. ' , function(){
        assert.deepEqual(findItemsOver([{name:"pears", qty:20}, {name:"pears", qty:20}]),[])
    });    
});