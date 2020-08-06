let assert = require('assert');
let totalPhoneBill = require('../totalPhoneBill.js')

describe('The totalPhoneBill function', function(){
    it('Should count total cost of calls', function(){
        var calls = totalPhoneBill("R2.75", 2);
        assert.equal(calls, totalPhoneBill("R5.5"));
    })
    it('Should count total cost of sms', function(){
        var sms = totalPhoneBill("R0.65", 3);
        assert.equal(sms, totalPhoneBill("R1.95"));
    })
})