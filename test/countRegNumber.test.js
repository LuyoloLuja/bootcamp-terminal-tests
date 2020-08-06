let assert = require('assert');
let countRegNumber = require('../countRegNumber.js')

describe('The countRegNumber function', function(){
    it('Should return 1 for CA 182736', function(){
        assert.equal(1, countRegNumber("CA 182736"));
    });

    it('Should return 1 for CY 523519', function(){
        assert.equal(1, countRegNumber("CY 523519"));
    });

    it('Should return 1 for CJ 812328', function(){
        assert.equal(1, countRegNumber("CJ 812328"));
    });

    it('Should return 3 as number of all the registration numbers', function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');
        assert.equal(regCount, 3);
    });
})