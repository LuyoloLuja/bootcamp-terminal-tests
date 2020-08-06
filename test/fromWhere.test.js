let assert = require('assert');

let fromWhere = require('../fromWhere.js');

describe('The fromWhere function', function(){
    it('Sould return fromStellies for CL 124', function(){
        assert.equal(0, fromWhere("CL 124"));
    })

    it('Sould return fromStellies for CL 345', function(){
        assert.equal(0, fromWhere("CL 345"));
    })

    it('Sould return fromStellies for CL', function(){
        assert.equal(0, fromWhere("CL"));
    })

    it('Should return fromBelville for CY 567', function(){
        assert.equal(0, fromWhere("CY 567"));
    })

    it('Should return fromPaarl for CJ 456', function(){
        assert.equal(0, fromWhere("CJ 456"));
    })
})