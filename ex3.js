var readline = require('readline-sync');

var number = readline.question("please enter the number");
var str="";
    for(var i=0;i<number.length;i++)
    {
        
       if(parseInt(number.charAt(i))%2==0 && parseInt(number.charAt(i+1))%2==0)
       {
            str+=number.charAt(i);
            str+="-";
       }
       else{
        str+=number.charAt(i);
       }
    }
console.log(str);