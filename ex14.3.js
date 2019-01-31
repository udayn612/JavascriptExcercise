var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

var Team_Leader = myObj.filter(obj => {
    return obj.occupation === "Team Leader"
  })
  for (var i = 0, len = Team_Leader.length; i < len; i++) {
    delete(Team_Leader[i].occupation);
}

var Programmer = myObj.filter(obj => {
    return obj.occupation === "Programmer"
  })
  for (var i = 0, len = Programmer.length; i < len; i++) {
    delete(Programmer[i].occupation);
}
var res = {};

res["programmer"]=Programmer;
 res["Team Leader"]=Team_Leader;

 console.log(res);