
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
    far.value = f.toFixed(2) ;
   

})
far.addEventListener('input',function(){
    let f =this.value;
    let c=(f-32)*5/9;
    cel.value = c.toFixed(2);
})

function changecolor(){
  let  red = Math.floor(Math.random()*255);
  let green = Math.floor(Math.random()*255);
  let blue = Math.floor(Math.random()*255);

  const randomColor = `rgb(${red},${green},${blue})`;
  document.body.style.backgroundColor = randomColor;
}
changecolor();

function updateTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let period = "";

    if (hour >= 12) {
      period = "PM";
    } else {
      period = "AM";
    }

    if (hour == 0) {
      hour = 12;
    } else {
      if (hour > 12) {
        hour = hour - 12;
      }
    }

    hour = update(hour);
    minute = update(minute);
    second = update(second);

    document.querySelector(".clock").innerText = hour + " : " + minute + " : " + second + " " + period;
    setTimeout(updateTime, 1000);
  }

  function update(t) {
    if (t < 10) {
      return "0" + t;
    } else {
      return t;
    }
  }

  updateTime();



