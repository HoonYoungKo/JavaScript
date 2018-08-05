var xnum=prompt("숫자를 입력하세요 : ");

if(!(xnum%2==1)){
  document.write("짝수입니다."+'<br>');
}
else{
  document.write("홀수입니다."+'<br>');
}

var userName=prompt("방문자 이름 : ");

if(userName){
  document.write(userName+"입니다.");
}
