var student = [
   {name:"David",marks:80},
   {name:"Vinoth",marks:77},
   {name:"Divya",marks:88},
   {name:"Ishitha",marks:95},
   {name:"Thomas",marks:68}
   ];
console.log("Average marks: "+calculateAvg(student));

for(var i=0;i<student.length;i++){
   console.log(student[i].name+" "+grade(student[i].marks));
}
function calculateAvg(student){
   var sum=0;
   for(var i=0;i<student.length;i++){
       sum=sum+student[i].marks;
   }
   return sum/student.length;
}

function grade(marks){
   if(marks<60)
   return 'F';
   else if(marks<70)
   return 'D';
   else if(marks<80)
   return 'C';
   else if(marks<90)
   return 'B';
   else
   return 'A';
}