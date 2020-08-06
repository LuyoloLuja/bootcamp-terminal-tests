let assert = require('assert');
let allPaarl = require('../countAllPaarl.js');

describe('The allPaarl function', function(){
    it('Should return first registration number for CJ 678 543', function(){
    //   var firstPaarl = allPaarl("CJ 678 543");
        assert.equal("CJ 678 543", allPaarl("CJ 678 543"));
    })

    it('Should return second registration number for CJ 67890', function(){
    //    var secondPaarl = allPaarl("CJ 67890");
        assert.equal("CJ 67890", allPaarl("CJ 67890"));
    });

    it('Should return false for CL 900', function(){
    //    var uknown1 = false;
        assert.equal(false, allPaarl("CL 900"));
    });

    it('Should return false for CA 34567', function(){
    //    var uknown2 = false;
    assert.equal(false, allPaarl("CA 34567"));
    });

    it('Should return false for CN 7864', function(){
    //    var uknown3 = false;
        assert.equal(false, allPaarl("CN 7864"));
    });
})