for(i=0; i<=100; i++){
  if(i%5==0&&!(i%7==0)){
    document.write("<font color='red'>"+i+"</font>");
  } else if(!(i%5)==0&&i%7==0){
    document.write("<font color='green'>"+i+"</font>");
  } else if(i%5==0&&i%7==0){
    document.write("<font color='blue'>"+i+"</font>");
  }
}
  document.write('<br>');
for(var k=1;k<=10;k++){

  if(k==6)break;
  document.write(k);
}
  document.write('<br>');
for(j=0;j<=10;j++){
  if(j%2==0)continue;
  document.write(j);
}
  document.write('<br>');
for(var q=1;q<=3;q++){

  for(var h=1;h<=2;h++){
    document.write(q+"행"+h+"열");
  }
  document.write('<br>');
}
