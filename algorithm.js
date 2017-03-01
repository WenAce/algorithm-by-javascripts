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
