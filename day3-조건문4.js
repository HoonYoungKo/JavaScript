var id="고훈영";
var pw=2013039022;

var user_id=prompt("아이디 : ");
var user_pw=prompt("비밀번호 : ");


if(id==user_id){
  if(pw==user_pw){
  document.write(user_id+"님 반갑습니다!");
  }
  else{
  alert("비밀번호가 다릅니다.");
  location.reload();
  }
}
else{
  alert("아이디가 다릅니다.");
  location.reload();
  }
