var today = new Date();
var nowYear = today.getFullYear();
var nowMonth = today.getMonth();
var nowDay = today.getDay();

var theDate = new Date(nowYear,nowMonth,1);
var theDay = theDate.getDay();
var last = [31,28,31,30,31,30,31,31,30,31,30,31];
var lastDay = last[nowMonth];
var row = Math.ceil((theDay+lastDay)/7);
document.write(nowYear+'.',nowMonth+1+'.'+nowDay);
document.write('<h1>'+nowYear+'.',nowMonth+1+'</h1>');
document.write(theDay);
var tnum = 1;
var t = "<table border='1'>";
t+= "<tr>";
t+= "<th>일</th>";
t+= "<th>월</th>";
t+= "<th>화</th>";
t+= "<th>수</th>";
t+= "<th>목</th>";
t+= "<th>금</th>";
t+= "<th>토</th>";
t+= "</tr>";

for(var i=1;i<=row;i++){
  t+="<tr>";
  for(var k=1;k<=7;k++){
    if(i==1&&k<=theDay || tnum>lastDay){
      t+="<td> &nbsp; </td>";
    } else{
      t+="<td>"+tnum+"</td>";
      tnum++;
    }
  }
    t+="</tr>";
}

document.write(t);
