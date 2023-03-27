

document.getElementById('sidebar_toggler').addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('show')
})


document.getElementById("search_button").addEventListener("click", function () {
    document.getElementById("search_box").classList.add("show");
  });
  
  document.getElementById("search_close").addEventListener("click", function () {
    document.getElementById("search_box").classList.remove("show");
  });


  



setInterval(function() {

  let hexperarm =['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9']

  let hexCode ='#'

  for (let i = 0; i < 6; i++) {
   hexCode += hexperarm[Math.floor(Math.random() * hexperarm.length)];
  }
  document.getElementById("jigjag").style.background = hexCode;
}, 1000)



 
 const calcy = () =>{
  let ban = document.getElementById('ban').value;
  let maths = document.getElementById('maths').value;
  let eng = document.getElementById('eng').value;
  let phy = document.getElementById('phy').value;
  let grades="";
 
let totalGrades = parseFloat(ban) + parseFloat(maths) + parseFloat(eng) + parseFloat(phy);
 

let perc = (totalGrades/400) * 100;

 

 if(number >= 80 && number <= 100){
   grades="A+";
 } else if(number >=70 && number < 80){
    grades="A";
 } else if(number >=60 && number < 70){
    grades="A-";
  } else if(number >=50 && number < 60){
    grades="B";
  } else if(number >=40 && number < 50){
    grades="C";
  } else if(number >=33 && number < 40){
    grades="D";
  } else{
    grades="F";
  }

  if(number >= 33){
    document.querySelector("#showData").innerHTML = `Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass.`;
  }
  else{
    document.querySelector("#showData").innerHTML = `Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail.`;
  }

 }

//  number section

function checkNumber() {
  var number = document.getElementById("numberInput").value;

  if(number % 2 == 0) {
    alert(number + "is even");
  }else {
    alert(number + "is odd")
  }
}


let input = document.getElementById('password_field')
let button = document.getElementById('password_toggle')
let icon = document.getElementById('password_eye')

button.addEventListener('click', function () {


    if (input.type == 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye-slash')
        icon.classList.add('fa-eye')
    } else {
        input.type = 'password';
        icon.classList.add('fa-eye-slash')
        icon.classList.remove('fa-eye')
    }
})


input.addEventListener('keyup', function () {
    let inputValueLength = input.value.length;     if (inputValueLength >= 8) {
        document.getElementById('password_msg').innerText = 'Strong Password'
        document.getElementById('password_msg').style.color = 'green'
    } else {    document.getElementById('password_msg').innerText = 'Poor Password'
         document.getElementById('password_msg').style.color = 'red'     } })


// color changer

let mode_changer = document.getElementById('mode_changer');

mode_changer.addEventListener('click',function () {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        localStorage.removeItem('mode')
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('mode','dark')
    }
})

if (localStorage.getItem('mode') == 'dark') {
    document.documentElement.classList.add('dark');
}






