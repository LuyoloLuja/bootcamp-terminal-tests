module.exports =  function findItemsOver(list, threshold){
    var increment = [];
    for(var i = 0; i < list.length; i++){
        var eachItem = list[i];
      if(list[i].qty > threshold){
          increment.push(eachItem);
      }
    }
    return increment;
}