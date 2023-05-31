var inp1 = document.getElementById("firstname");
var inp2 = document.getElementById("surname");
var inp3 = document.getElementById("email");
var inp4 = document.getElementById("password");
var checkbox = document.getElementById("checkbox");
var months = document.getElementById("months");
var years = document.getElementById("years");


var selectedValue; 
function getValue(get){
selectedValue = get;
}


function signup(){
    
    console.log(inp1.value);
    console.log(inp2.value);
    console.log(inp3.value);
    console.log(inp4.value);
    console.log(checkbox.value);
    console.log(months.value);
    console.log(years.value);
    console.log("Selected value: " + selectedValue);

    
}


