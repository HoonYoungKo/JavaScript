/* 숫자객체
기본형 : var 참조 변수 = new Number(값); 또는 var 참조 변수 = 값;

표현 가능 숫자의 속성을 알고 싶다면
Number.속성;

숫자에 표기법 관련 메소드를 사용하려면

객체.표기 메소드();
*/

var num1 = 3.4563232;
var num2 = 100000;
var num3 ="30.5px";
var num4 = 40;


document.write("표현 가능한 가장 큰수 : "+Number.MAX_VALUE+'<br>');
document.write("표현 가능한 가장 작은수 : "+Number.MIN_VALUE+'<br>');
document.write("무한대 : "+Number.POSITIVE_INFINITY+'<br>');
document.write("무한대 : "+Number.NEGATIVE_INFINITY+'<br>');

document.write(num2.toExponential(2)+'<br>');
document.write(num1.toFixed(2)+'<br>');
document.write(num1.toPrecision(2)+'<br>');


/* 수학 개체
*/
document.write("절댓값 : "+Math.abs(num4)+'<br>');
document.write("최대값 : "+Math.max(num1,num2,num4)+"<br>");
document.write("최솟값 : "+Math.min(num1,num2,num4)+"<br>");
document.write("거듭제곱 : "+Math.pow(num4,2)+"<br>");
document.write("원주율 : "+Math.PI+"<br>");
document.write("난수 : "+Math.floor(Math.random()*100)+"<br>");

document.write("난수를 통해 원하는 구간(6~16) 정수값 구하기 : "+
Math.floor(Math.random()*(16-6+1)+6)+"<br>");
