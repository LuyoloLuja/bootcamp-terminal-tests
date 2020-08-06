module.exports = function findItemsOver20(list){
    var increment = [];
    for(var i = 0; i < list.length; i++){
        var eachItem = list[i];
        if(list[i].qty > 20){
          increment.push(eachItem);
        }
    }
    return increment;
}    
    
    