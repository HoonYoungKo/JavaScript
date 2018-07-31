var age = prompt("당신의 나이는?");
if(age>=20){
  document.write("당신은 성인입니다."+'<br>');
}
else{
  document.write("당신은 미성년자입니다."+'<br>');
}
//주석처리
/*여러줄 주석처리*/

/* 변수는 데이터값을 저장할수 있는 메모리 공간,
종류는 문자형 String 숫자형 Number 논리형 Boolean 비워진 NULL
데이터가 있다.

변수의 이름을 지을땐 한글을 사용할수없으며,
영문과 숫자 그리고 일부 특수문자($,_)만 포함할 수 있다.
*/
var box_$1;
box_$1 = 100;
document.write(box_$1+'<br>');
//----------------------------------------------------
/*1.문자형 데이터 String
문자형 데이터는 다음과 같이 문자나 숫자를 큰따옴표"" 또는 작음따옴표''
로 감싸고있다.
기본형 : var 변수명 = "사용할 문자나 숫자"
*/
var s1 = "javascript";
var num = "100"; // 변수에 숫자 데이터가 아니라 문자데이터 100를 저장.
var tag = "<h1> String </h1>";
document.write(s1+'<br>');
document.write(num+'<br>');
document.write(tag+'<br>');
/*2.숫자형 데이터 Number
숫자형 데이터는 변수에 저장된 데이터가 숫자만 들어가야 함.
만일 숫자가 들어갈 "100"과 같이 큰 따옴표가 감싸고 있다면
숫자가 아닌 문자형 데이터라 볼 수 있다.
이 경우 Number("100")을 이용하면 문자형 데이터를 숫자형 데이터로
바꿀수 있다.
기본형 : var 변수명 = 숫자; 또는 Number("숫자");
*/
var s2 = 100;
var t = Number("500");

document.write(s2+'<br>');
document.write(t+'<br>');
/*3.논리형 데이터
논리형 데이터는 true , false 가 있다. 이 데이터는 주로 2개의
데이터를 비교할 때 나오는 결과
기본형 : var 변수명 = true or false; 또는 Boolean(데이터);
*/
var s3=true;
var t=10>=100;//false를 저장
var k=Boolean("hello")//변수 k에 반환된 데이터 true 를 저장함. Boolean 메소드에 입력하는 데이터 중에 숫자0과 null, undefined를 제외한 모든 데이터는 true를 반환함.

document.write(s3+'<br>');
document.write(t+'<br>');
document.write(k+'<br>');
/*Null & Undefined 데이터
Undefined는 다음과 같이 변수 s에 아무값도 드으록되어 있지 않은 경우.
Null 은 변수에 데이터로 null이 저장되어 있는 경우를 가리킴
null은 변수에 저장된 데이터를 비우고자 할 떄 사용하는 값.
*/
var s; //Undefined
var t2=null; // null
//typeof는 지정한 데이터,변수에 저장된 데이터형을 알고 싶을 때 사용
//기본형 : typeof 변수 또는 데이터;
var num=100;
var str="자바스크립트";
document.write(typeof num+'<br>');
document.write(typeof str+'<br>');
/* 변수 선언시 주의사항
1. 변수명 첫 글자로는 $,_,영문자만 가능
2. 변수명 첫 글자 다음은 영문자,숫자,$,_만 포함할수있음.
3. 변수명으로 예약어(document,location,window 등등)은 사용 불가
4. 변수명을 지을때는 되도록 의미를 부여하는게 좋음
5. 변수명을 사용할때 대.소문자는 구별해야함 다른 변수가됨.
