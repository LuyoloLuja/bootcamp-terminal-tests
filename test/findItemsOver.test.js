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
    it('should  return all the products that have a quantity higher than threshold.  ' , function(){
        assert.deepEqual(findItemsOver([{name:"pears", qty:27}],25), [{name:"pears", qty:27}])
    });
    it('should  return an empty Array if quantity product is  higher lower than  threshold. ' , function(){
        assert.deepEqual(findItemsOver([{name:"bananas", qty:9},{name:"apples", qty:11}], 15),[])
    }); 
    
});