let assert = require("assert");
let mostProfitableDepartment = require("../mostProfitableDepartment");

describe('mostProfitableDepartment function' , function(){
    it('Should return carpentry as department with highest profit on Monday' , function(){
        assert.deepEqual(mostProfitableDepartment([{department: 'hardware', sales: 4500, day: 'Monday'}, {"department":"outdoor","sales":1500,"day":"Monday"},{"department": "carpentry","sales":5500,"day":"Monday"},]), "carpentry")
    });
    it('Should return hardware as department with highest profit on Tuesday' , function(){
        assert.deepEqual(mostProfitableDepartment([{"department":"hardware","sales":7500,"day":"Tuesday"},{"department":"outdoor","sales":2505,"day":"Tuesday"}, {"department": "carpentry", "sales": 1540, "day": 'Tuesday'}]), "hardware")
    });
    it('Should return outdoor as department with highest profit on Wednesday' , function(){
        assert.deepEqual(mostProfitableDepartment([{"department":"hardware","sales":1500,"day":"Wednesday"},{"department":"outdoor","sales":8507,"day":"Wednesday"}, {"department": "carpentry", "sales": 8009, "day": "Wednesday"}]), "outdoor")
    });
    it('Should return outdoor as department with highest profit on Thursday' , function(){
        assert.deepEqual(mostProfitableDepartment([{"department":"hardware","sales":12000,"day":"Thursday"},{"department":"outdoor","sales":18007,"day":"Thursday"}, {"department": "carpentry", "sales": 6109, "day": "Thursday"}]), "outdoor")
    });
    it('Should return carpentry as department with highest profit on Friday' , function(){
        assert.deepEqual(mostProfitableDepartment([{"department":"hardware","sales":7005,"day":"Friday"},{"department":"outdoor","sales":12006,"day":"Friday"}, {"department": "carpentry", "sales": 16109, "day": "Friday"}]), "carpentry")
    });
});