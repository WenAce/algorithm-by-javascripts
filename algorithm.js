<!--bubbleSort-->
function bubbleSort(arr){
   var i,j;
   for (var i = 1; i < arr.length; i++) {
     for (var j = 0; j < arr.length-i; j++) {
        var temp=0;
        if(arr[j]>arr[j+1]){
          temp=arr[j];
          arr[j]=arr[j+1];
          arr[j+1]=temp;
        }
     }
   }
}


<!--QuickSort-->
function QuickSort(arr){
   var length=arr.length;
   if(length<=1)
     return arr.slice(0);
   var left=[];var right=[];
   var mid=arr[0];
   for (var i = 1; i < length; i++){
       if(arr[i]<mid[0])
       left.push(arr[i]);
       else
       right.push(arr[i]);
   }
   return left.QuickSort().concat(mid.concat(right.QuickSort()));
}

<!--二路归并-->
function merageSort(left,right){
  var result=[];
  var i=0,j=0;
  while (i<left.length && j<right.length) {
    if (left[i]<right[j]) {
       result.push(left[i++]);
    }else {
      result.push(right[j++]);
    }
  }

  while (i<left.length) {
    result.push(left[i++]);
  }
  while (j<right.length) {
    result.push(right[j++]);
  }
  return result;
}

<!--选择排序-->
function selectSort(arr){
  var length=arr.length,
      indexMin;

  for (var i = 0; i < length-1; i++) {
      indexMin=i;
      for(var j=i;j<length;j++){
        if (arr[indexMin]>arr[j]) {
          indexMin=j;
        }
      }
      if (i!==indexMin) {
        var temp=0;
        temp=i;
        i=indexMin;
        indexMin=temp;
      }
  }
}

<!--sequentialSearth-->
function sequentialSearth(arr,item){
  var length=arr.length;
  for(var i=0;i<length;i++){
    if(item===arr[i])
    return i;
  }
  return -1;
}

<!--binarySearch-->
function binarySearch(arr,item){
  arr.QuickSort();
  var low=0,
      high=arr.length-1,
      mid,element;

    while (low<=high) {
        mid=Math.floor((low+high)/2);
        element=arr[mid];
        if(element<item)
          low=mid+1;
          else if(element>item)
          high=mid-1;
          else {
            return mid;
          }
    }
    return -1;
}
