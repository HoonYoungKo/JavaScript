/*정규 표현 객체

기본형 : var 참조 변수 = new RegExp(패턴, 검색옵션);
        var 참조 변수 = /패턴/검색 옵션;
*/
var userName = prompt("당신의 이름은?");
reg1 = /^[가-힣]{2,5}$/;
while(true){
  if(reg1.test(userName)) break;
  alert("이름 입력 형식이 잘못되었습니다.");
  userName = prompt("당신의 이름은?");
}
var userCell = prompt("당신의 번호는?");
reg2 = /^(010|016|011)\d{3,4}\d{4}$/;

while(true){
  if(reg2.test(userCell)) break;
  alert("휴대폰 번호가 잘못 입력되었습니다..");
  userCell = prompt("당신의 번호는?");
}

document.write(userName+'<br>');
document.write(userCell+'<br>');
