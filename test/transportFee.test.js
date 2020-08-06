let assert = require('assert');
let transportFee = require('../transportFee.js');

describe('The transportFee function', function(){
    it('Should check transportFee for morning shift', function(){
        var morning = transportFee("R20");
        assert.equal(morning, transportFee("R20"))
    })
    it('Should check transportFee for afternoon aftenoon', function(){
        var afternoon = transportFee("R10");
        assert.equal(afternoon, transportFee("R10"));
    })
    it('Should check  transportFee for nightshift', function(){
        var nightshift = transportFee("free");
        assert.equal(nightshift, transportFee("free"));
    })
})