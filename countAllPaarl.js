module.exports = function allPaarl(regNumbers){
      var splitingNums = regNumbers.split(', ');
      var regNumbersForPaarl = [];
      for(var i = 0; i < splitingNums.length; i++){
        if(splitingNums[i].startsWith("CJ")){
           regNumbersForPaarl.push(splitingNums[i]);
            }
        }
     return regNumbersForPaarl;
}