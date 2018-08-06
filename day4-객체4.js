// 숫자 객체 실습
// 난수를 발생시켜서 가위바위보 일치 맞추기

var t = prompt("가위 바위 보 중 하나를 맞춰주세요");
var tnum;
switch (t) {
  case "가위" : tnum=1;break;
  case "바위" : tnum=2;break;
  case "보" : tnum=3;break;

  default: alert("잘못 입력하셨습니다."); location.reload();
}

com = Math.floor(Math.random()*3+1);

if(tnum==com){
  document.write("<img src='"+tnum+".jpg'>");
} else{
  document.write("일치하지않았습니다. 다시 도전해주세요.");
}
