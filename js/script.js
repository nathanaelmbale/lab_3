let age = 18
if (age > 10 ) console.log("Not equals")

for (let i = 0; i < 6; i++) {
    console.log("Looped",i , "times")    
}

const paragraph = document.getElementsByTagName('p');
console.log(paragraph[0]);

const header = document.getElementById('header')
console.log(header);
header.innerHTML = "Your father"

/*
const clickButton = () => {
    document.getElementById('header').style.color = "red"

    if(!document.getElementById('username').value) console.log("Please add thee username")
    const username =  document.getElementById('username').value

    const age =  document.getElementById('age').value
    if(!age) console.log("Please add the age")

    const YOB =  document.getElementById('YearOfBirth').value
    if(!YOB) console.log("Please add the year you were born in")

    const KCSE =  document.getElementById('KCSE').value
    if(!KCSE) console.log("Please add the year you were born in")

} */




document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();
    
    const errorDiv = document.getElementById('error');

    if(!document.getElementById('fname').value) {
        errorDiv.innerHTML = '<div class="alert alert-danger" role="alert">Please add the first name</div>';
    }

    const username =  document.getElementById('fname').value;
    if (!username) {
      console.log("Please add the first name");
      errorDiv.innerHTML = '<div class="alert alert-danger" role="alert">Please add the first name</div>';
    }
    const age =  document.getElementById('sname').value;
    if (!age) {
      console.log("Please the second");
      errorDiv.innerHTML = '<div class="alert alert-danger" role="alert">Please add the second name</div>';
    }
    const YOB =  document.getElementById('YearOfBirth').value;
    if (!YOB) {
      console.log("Please add the year you were born in");
      errorDiv.innerHTML = '<div class="alert alert-danger" role="alert">Please add the year you were born in</div>';

    }
    const KCSE = document.getElementById('KCSE').value;
    if (!KCSE) {
      console.log("Please add the KCSE grade");
      errorDiv.innerHTML = '<div class="alert alert-danger" role="alert">Please add the KCSE grade</div>';

    }
  });
  