let assert = require('assert');
let allFromTown = require('../countAllFromTown.js');

describe('The allFromTown function', function(){
    it('Should count all registrations from Stellies', function(){
        var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341'])
    })
    it('Should count all registations from Kuilsriver', function(){
        var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
        assert.deepEqual(fromKuilsriver, []);
    })
})