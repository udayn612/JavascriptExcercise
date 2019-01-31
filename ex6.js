function differenceArray(arr1,arr2)
{
    var a=[];
    var b=[];
    for(var i=0;i<arr1.length;i++)
    {
        a[arr1[i]]=true;
    }
    for(var i=0;i<arr2.length;i++)
    {
        if(a[arr2[i]])
            delete a[arr2[i]];
        else
        a[arr2[i]]=true;
    }
    for(var i in a)
        b.push(i);
    return b;
}
// console.log(differenceArray(['a', 'b'], ['a', 'b', 'c', 'd']));
console.log(differenceArray("abcde","defghe"));
