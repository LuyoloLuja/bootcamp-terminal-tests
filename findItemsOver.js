module.exports = function (items){
    var list = [];
    for(var i = 0; i < items.length; i++){  
      if(items[i].qty > 20){
        list.push(items[i]);
      }
    }
    return list;
  }
    
  function findItemsOver(items,threshold){
    var itemsList = [];
    for(var i = 0; i < items.length; i++){  
     if(items[i].qty > threshold){
        itemsList.push(items[i]);
     }
    }
  return itemsList;
}