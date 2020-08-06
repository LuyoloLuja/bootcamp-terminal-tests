let assert = require('assert');
let isFromBelville = require('../isFromBelville.js');

describe('The isFromBelville function', function(){
    it('Should return true for CY', function(){
        assert.equal(true, isFromBelville("CY"));
    });
    it('Should return false for CJ', function(){
        assert.equal(false, isFromBelville("CJ"))
    })
});