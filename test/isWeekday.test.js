let assert = require('assert');
let isWeekday = require('../isWeekday.js');

describe('The isWeekday function', function(){
    it('Should say Monday is a weekday', function(){
        assert.equal(isWeekday('Monday'), true)
    })
    it('Should say Tuesday is a weekday', function(){
        assert.equal(isWeekday('Tuesday'), true)
    })
    it('Should say Wednesday is a weekday', function(){
        assert.equal(isWeekday('Wednesday'), true)
    })
    it('Should say Thursday is a weekday', function(){
        assert.equal(isWeekday('Thursday'), true)
    })
    it('Should say Friday is a weekday', function(){
        assert.equal(isWeekday('Friday'), true)
    })
    it('Should say Saturday is a not weekday', function(){
        assert.equal(isWeekday('Saturday'), false)
    })
    it('Should say Sunday is a not weekday', function(){
        assert.equal(isWeekday('Sunday'), false)
    })
})