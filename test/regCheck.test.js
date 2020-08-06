let assert = require('assert');
let regCheck = require('../regCheck.js');

describe('The regCheck function', function(){
    it('Should check if registration is from GP', function(){
        assert.equal(false, regCheck("DC 55 YU GP"));
    });
    it('Should check if registration is from L', function(){
        assert.equal(false, regCheck("5566 L"));
    });
    it('Should check if registration is from EC', function(){
        assert.equal(false, regCheck("ERT 123 EC"));
    });
    it('Should check if registration is from MP', function(){
        assert.equal(false, regCheck("FGT 123 MP"))
    });
})