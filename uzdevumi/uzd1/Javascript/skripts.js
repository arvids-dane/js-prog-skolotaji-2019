var i = 0;
function palielinat(){
   ierakstitCiparu(i+=1);
}
function samazinat(){
 i == 0 
  ? window.alert("Ierakstit ciparu, kas ir > \"0\"") 
  : ierakstitCiparu(i-=1)
}
function ierakstitCiparu(val){
  document.getElementById("vertiba").value = val;
}
function ierakstit(){
  let ievads = parseInt(event.target.value);
  console.log(ievads);
  ievads == 0 || NaN || ievads < 0
  ? window.alert("Ierakstit ciparu, kas ir > \"0\"") 
  : ierakstitCiparu(i=ievads);
}
function palielinatCiparu(){
  ierakstitCiparu(i=i+90);
  document.bgColor = document.getElementById("vertiba").toString(16);
}