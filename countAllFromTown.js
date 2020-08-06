module.exports = function allFromTown(regNumbers, loc){
  var splitNumbers = regNumbers.split(",");
  var numbersForAll = [];

  for(var i = 0; i < splitNumbers.length; i++){
    var reg = splitNumbers[i].trim()
    if(reg.startsWith(loc)){
      numbersForAll.push(reg);
    }
  }
  return numbersForAll;
}