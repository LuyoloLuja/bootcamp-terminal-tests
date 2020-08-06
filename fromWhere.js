module.exports = function countAllFromTown(regNumbers, tag){
  var splitNumbers = regNumbers.split(',');
  var town = [];
    for(var i = 0; i < splitNumbers.length; i++){
      var reg = splitNumbers[i].trim();
      if(reg.startsWith(tag)){
        town.push(reg);
      }
    }
  return town.length;
  console.log(town)
}