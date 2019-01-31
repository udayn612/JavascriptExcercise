let studentsmarks = {
    "David": 80,
    "Vinoth": 77,
    "Divya": 88,
    "Ishitha": 95,
    "Thomas":68
  }

  function avg(students) {
    var count= Object.keys(students).length;
    let sum = 0;
    for (let student of Object.values(students)) {
      sum += student;
    }
  
    return sum/count;
  }
studentgrades={}
  function grades(students)
  {
    if(Object.values>=90)
    for (let marks of Object.values(students)) {
        if(marks>=90)
        studentgrades[">90"]='A';
        else if(marks>=80)
        studentgrades[">80"]='B';
        else if(marks>70)
        studentgrades[">70"]='C';
        else if(marks>60)
        studentgrades[">60"]='D';
        else 
        studentgrades['<60']='F';
      } 
      return studentgrades;

  }

  console.log(avg(studentsmarks))
  console.log(grades(studentsmarks))