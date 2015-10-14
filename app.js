function chunk(arr, size) {
  
  var multiArray =[]
  //push certain elements to another array
  for(var i = 0; i < arr.length; i+= size) {
    multiArray.push(arr.slice(i, i+ size));
  }
  return multiArray;
}

chunk(["a", "b", "c", "d"], 2);