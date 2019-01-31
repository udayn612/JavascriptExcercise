function countOfPerticularCharacter(str,ch)
{
    var count=0
    for(var i=0;i<str.length;i++)
    {
        if(str.charAt(i)==ch)
        count++;
    }
    return count;

}
console.log(countOfPerticularCharacter("gmail.com",'m'))