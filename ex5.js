var duplicate_array=[1,2,3,4,5,6,1,2,3,4,5]
function removeDuplicates(arr){
  
    var unique_array=[]
    for(var i=0;i<arr.length;i++)
    {
        if(unique_array.indexOf(arr[i])==-1)
        {
            unique_array.push(arr[i]);
        }
    }
    return unique_array;
    
}

console.log(removeDuplicates(duplicate_array));