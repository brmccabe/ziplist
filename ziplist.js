console.log(zipList([1,3,5], [2,4,6]));
console.log(zipListTheSimpleWay([1,3,5], [2,4,6]));

function zipList(list1, list2){
  let list_return = [];
  for(let i = 0; i < list1.length; i++){
    list_return.push(list1[i]);
    list_return.push(list2[i]);
  }
  return list_return;
}

function zipListTheSimpleWay(list1, list2){
  return _.flatten(_.zip(list1, list2));
}