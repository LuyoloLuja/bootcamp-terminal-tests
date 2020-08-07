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