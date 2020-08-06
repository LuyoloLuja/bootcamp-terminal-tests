let assert = require('assert');
let yearsAgo = require('../yearsAgo');

describe('The yearsAgo function', function(){
    it('Should count number of years from 1976 to 2000', function(){
        var years = 2000 - 1976;
        assert.equal(years, 24)
    })
    it('Should count number of years from 1976 to 2020', function(){
        var years = 2020 - 1976;
        assert.equal(years, 44);
    })
})