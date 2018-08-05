var site=prompt("자주 이용하는 포털사이트는?");

switch (site) {
  case "네이버" : url="www.naver.com"; break;
  case "구글" : url="google.com"; break;
  case "다음" : url="daum.net"; break;

  default: alert("다른 사이트를 입력해주세요");location.reload();
}
if(url) location.href="http://"+url;
