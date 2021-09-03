var students = ["sally", "pam", "dan", "olly", "cindy"];
var resultElement = document.getElementById("result");
var myButton = document.getElementById("submit");

//myButton.onclick = checkNames;
myButton.addEventListener("click", checkNames);

function checkNames(){
    var inputElement = document.getElementById("inputbox").value;
    for(var i = 0; i < students.length; i++){
            if(students[i] === inputElement.toLowerCase()){
                resultElement.innerHTML = "You are on the list"
                inputElement.innerHTML = "";
                break;
            }else if(students[i] !== inputElement.toLowerCase()){
                resultElement.innerHTML = "Sorry, " + inputElement + ". You are not on the list."
                document.getElementById("inputbox").value = "";
                continue;
            }
    }
}