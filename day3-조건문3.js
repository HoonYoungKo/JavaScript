var mon=prompt("지금은 몇월입니까?");

if(mon>=3&&mon<=5){
  document.write("봄");
} else if(mon>=6&&mon<=8){
  document.write("여름");
} else if(mon>=9&&mon<=11){
  document.write("가을");
} else{
  document.write("겨울");
}
