
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

function changecolor(){
  let  red = Math.floor(Math.random()*255);
  let green = Math.floor(Math.random()*255);
  let blue = Math.floor(Math.random()*255);

  const randomColor = `rgb(${red},${green},${blue})`;
  document.body.style.backgroundColor = randomColor;
}
changecolor();

