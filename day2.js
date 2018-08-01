/*산술 연산자
종류 + - * / %
*/
var num1 = 25;
var num2 = 15;
var result,result2;

result = num1 + num2;
document.write('더하기 : '+result+'<br>');
result = num1 - num2;
document.write('빼기 : '+result+'<br>');
result = num1 * num2;
document.write('곱하기 : '+result+'<br>');
result = num1 / num2;
document.write('나누기 : '+result+'<br>');
result = num1 % num2;
document.write('나머지 : '+result+'<br>');

/* 숫자형과 문자형이 섞이면 문자형 데이터로 저장이 됨.
*/
var s1 = "자바스크립트 ";
var s2 = "생각보다 ";
var s3 = 10;
var s4 = "지 않다.";

result2 = s1 + s2 + s3+ s4;
document.write(result2+'<br>');

/* 대입 연산자
+=  -=   *=  /=  %=
ex) A+=B  -->   A=A+B
*/
num1+=num2;
document.write(num1,"<br/>");
num1-=num2;
document.write(num1,"<br/>");
num1*=num2;
document.write(num1,"<br/>");
num1/=num2;
document.write(num1,"<br/>");
num1%=num2;
document.write(num1,"<br/>");

// 테이블

var tb = "<table border='1'>";
tb += "<tr>";
tb += "<td>1</td><td>2</td><td>3</td>";
tb += "<tr>";
tb += "<tr>";
tb += "<td>4</td><td>5</td><td>6</td>";
tb += "<tr>";
tb += "</table>";
document.write(tb);

/* 증감 연산자
변수-- 또는 --변수;
변수++ 또는 ++변수;
var A=++B; 변수B의 데이터를 1 증가시킨 후 변수 A에 저장.
var A=--B; 변수 B의 데이터를 1 감소시킨후 변수 A에 저장.
*/
var num1 = 25;
var num2 = 15;

num1--;
document.write(num1,"<br/>");
num1++;
document.write(num1,"<br/>");
result = num2++;//대입 연산자가 먼저 실행되고, 증가 연산자가 실행.
document.write(result,"<br/>");
result = ++num2;//증가 연산자가 먼저 실행되고, 대입 연산자가 실행.
document.write(result,"<br/>");

/* 비교 연산자

A>B A<B A>=B A<=B
A==B A와 B는 같다. -> 숫자를 비교할 경우 데이터형은
숫자형이든 문자형이든 상관하지 않고 표기된 숫자만 일치하면 true를 반환.
예를 들면 숫자형10과 문자형 "10"은 같은것으로 인식되어 true반환

A===B A와 B는 같다. -> 데이터형도 일치해야 true를 반환

A!=B A와 B는 다르다 -> 데이터형 상관않고 숫자만 비교해 다르면 true반환
A!==B A와 B는 다르다 -> 숫자 또는 데이터형이 일치하지 않을때
true를 반환.
*/
var k = 10, m = "10";
k == 10;
m == 10;
/* 논리 연산자
||(or)  &&(and)  !(not)
*/

var a = 10;
var b = 20;
var m = 30;
var n = 40;

result = a>b || b>=m || m>n;
document.write(result,"<br/>");

result = a>b || b>=m || m<=n;
document.write(result,"<br/>");

result = a<=b && b>=m && m<=n;
document.write(result,"<br/>");

result = !(a>b);
document.write(result,"<br/>");

/* 삼항 조건 연산자

기본문 ->  조건식? 실행문1 : 실행문2
true 일때 실행문1 false일때 실행문2
*/
result = !(a>b)? "javascript" : "hello";
document.write(result,"<br/>");

/* 실행문 만들기
prompt("질문","기본 응답");
*/
var height = prompt("당신의 신장은?","");
result = (height-100)*0.9;

document.write(result);
