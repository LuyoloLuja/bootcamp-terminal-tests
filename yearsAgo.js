module.exports = function yearsAgo(years){
    var newDay = new Date();
    var howManyYears = newDay.getFullYear() - years;
    return howManyYears;
}