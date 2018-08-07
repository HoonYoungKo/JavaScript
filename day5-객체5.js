/*배열 객체
기본형 : var 참조 변수 = new Array();
참조변수[0]=값1; 참조변수[1]=값2; .....  n번째까지.

+ var 참조변수 = new Array(값1,값2,값3,.....);

+var 참조변수 = [값1,값2,값3,값.....];

*/
var d=["고훈영",26,true];
document.write(d[0]+d[1]+d[2]+'<br>');

for(var i=0;i<d.length;i++){
  document.write(d[i]+'<br>');
}

document.write(d.join("-")+'<br>');
document.write(d.reverse()+'<br>');
document.write(d.sort()+'<br>');
d.splice(2,1,"고","후녕");
document.write(d+'<br>');
d.slice(1,3);
document.write(d.slice(1,3)+"<br>");

var greenLine=["사당","교대","방배","강남"];
var yellowLine=["마금","정자","모란","수서"];

var twoLine=greenLine.concat(yellowLine);//concat = +
document.write(twoLine+'<br>');
greenLine.pop();
greenLine.push("삼성");
document.write(greenLine+'<br>');
greenLine.shift();
greenLine.unshift("신도림");
document.write(greenLine+'<br>');
