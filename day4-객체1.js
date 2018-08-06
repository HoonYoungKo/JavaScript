var t = new Date();
var nowMonth = t.getMonth();
var nowDate = t.getDate();
var nowDay = t.getDay();

document.write("현재월"+nowMonth+'<br>');
document.write("현재일"+nowDate+'<br>');

switch (nowDay) {
  case 1: document.write("월요일"+'<br>');break;
  case 2: document.write("화요일");break;
  case 3: document.write("수요일");break;
  case 4: document.write("목요일");break;
  case 5: document.write("금요일");break;
  case 6: document.write("토요일");break;
  default:document.write("일요일");
}

var m = new Date(2002,4,31);

var theMonth = m.getMonth();
var theDate = m.getDate();
var theDay = m.getDay();


document.write("2002년 월"+theMonth+'<br>');
document.write("2002년 일"+theDate+'<br>');
switch (theDay) {
  case 1: document.write("월요일");break;
  case 2: document.write("화요일");break;
  case 3: document.write("수요일");break;
  case 4: document.write("목요일");break;
  case 5: document.write("금요일");break;
  case 6: document.write("토요일");break;
  default:document.write("일요일");
}
