/*문자 객체
기본형 : var 참조변수 = new String(문자형 데이터);
*/
var t = new String("web in javascript");
document.write(t.charAt(2)+'<br>');
document.write(t.match("bin")+'<br>');
document.write(t.replace("web","html")+'<br>');

var userName = prompt("당신의 영문 이름?");
var userPhone = prompt("당신의 핸드폰번호?");

document.write(userName.toUpperCase(userName)+'<br>');
document.write(userPhone.substring(0,userPhone.length-4)+"****");
