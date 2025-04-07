let emails = JSON.parse(localStorage.getItem("emails")) || [];

var number = document.getElementById("numberp");

if (emails.length > 1) {
    number.innerHTML = emails.length + " Persons";
} else {
    number.innerHTML = emails.length + " Person";
}


function send() {
    var input = document.getElementById("input");
    var span = document.getElementById("span");
  
   if (!input.value.trim() || input.value.indexOf("@") === -1) {
    span.style.display = "block";
   } else {
    alert("A notification will be send to " + input.value + ", when the app is published");
    span.style.display = "none";
    emails.push(input.value);
    if (emails.length > 1) {
        number.innerHTML = emails.length + " Persons";
    } else {
        number.innerHTML = emails.length + " Person";
    }
    localStorage.setItem("emails", JSON.stringify(emails));
    input.value = "";
    console.log("Emails on the list: " + emails);
   
   }
}

function deleteall() {
        if (confirm("Do you really want to delete all the entries?")) {
            emails = [];
            localStorage.setItem("emails", JSON.stringify(emails)); // You write this code, when something happens with the entries in the array
            if (emails.length > 1) {
                number.innerHTML = emails.length + " Persons";
            } else {
                number.innerHTML = emails.length + " Person";
            }
            console.warn("All entries were deleted!");
            console.log(emails);
        }
   
}

function yourfunction() {
    alert("Do you have an idea for a function? Code it!");
}

