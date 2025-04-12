
 function  validateForm(){
   return true;
 }
 function clearText(){
   document.getElementById("cel").value=" ";
   document.getElementById("far").value=" ";
 }

let cel = document.getElementById("cel");
let far = document.getElementById('far');

cel.addEventListener('input',function(){
    let c = this.value;
    let f= (c*9/5)+32;
    far.value = f ;
   

})
far.addEventListener('input',function(){
    let f =this.value;
    let c=(f-32)*5/9;
    cel.value =c;
})
