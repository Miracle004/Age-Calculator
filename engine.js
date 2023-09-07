//Declare all variables to be used and assign values
let form = document.getElementById("ageForm");
let birthYr = form.birthYear.value;
let currYr = form.currYear.value;
//This does the calculation
let age = currYr - birthYr;
let butn = document.getElementById("submitBtn");
let response = document.getElementById("responseSpace");


//define the method to run validation
butn.onclick = function Evaluator(){
    if(birthYr == "" || currYr == ""){
        response.innerText = "One or more field are empty";
        response.style.color = "red";
    }
    else if(birthYr < 4 || currYr < 4){
        response.innerText = "Please input values specified in the format given";
        response.style.color = "red";
    }
    else{
        response.innerText = "You are " +age+ " years old";
        response.style.color = "green";
    }
    return false;
}
