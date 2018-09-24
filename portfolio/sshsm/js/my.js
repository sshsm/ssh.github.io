var H=document.getElementById('H');
var M=document.getElementById('M');
var S=document.getElementById('S');

setInterval(function(){
  var d=new Date();
  var h=23-d.getHours();
  if(h<10)
    h="0"+h;
  var m=59-d.getMinutes();
  if(m<10)
    m="0"+m;
  var s=59-d.getSeconds();
  if(s<10)
    s="0"+s;
  H.innerHTML=h+" :";
  M.innerHTML=m+" :";
  S.innerHTML=s;
},1000);
