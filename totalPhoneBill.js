module.exports = function totalPhoneBill(callsAndSms){
  var splitBills = callsAndSms.split(', ');
  var calls = [];
  var sms = [];
    
  for(var i = 0; i < splitBills.length; i++){
    var prices = splitBills[i];

    if(prices.startsWith('c')){
      calls.push((prices));
    }else if(prices.startsWith('s')){
      sms.push(prices);
    }
  }return "R" + (calls.length * 2.75 + sms.length * 0.65).toFixed(2);
}