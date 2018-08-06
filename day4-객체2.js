
var t = new Date();
var nowYear = t.getFullYear();

var theDate = new Date(nowYear,11,31);//  올해 12월 31일

var minusDate = theDate - t;
var result = Math.ceil(minusDate/(1000*60*60*24));

document.write("남은 일수는"+result+"일 입니다.");
