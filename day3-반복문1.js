var i=10;

while(i<=20){
  if(i%2==0){
    document.write("<font color='blue'>"+i+"</font>"+"<br>");
  } else{
    document.write("<font color='red'>"+i+"</font>"+"<br>");
  }
  i++;
}
var j=20;
do{
  if(j%2==0){
    document.write("<font color='blue'>"+j+"</font>"+"<br>");
  } else{
    document.write("<font color='red'>"+j+"</font>"+"<br>");
  }
  j--;
}while(j>=10)

for(var k=10; k<=20; k++){
  if(k%2==0){
    document.write("<font color='blue'>"+k+"</font>"+"<br>");
  } else{
    document.write("<font color='red'>"+k+"</font>"+"<br>");
  }
}
