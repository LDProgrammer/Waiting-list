let emails = JSON.parse(localStorage.getItem("emails")) || [];

console.log(emails);
var number = document.getElementById("numberp");
number.innerHTML = emails.length;

function send() {
    var input = document.getElementById("input");
    var span = document.getElementById("span");
  
   if (!input.value.trim() || input.value.indexOf("@") === -1) {
    span.style.display = "block";
   } else {
    alert("A notification will be send to " + input.value + ", when the app is published");
    span.style.display = "none";
    emails.push(input.value);
    number.innerHTML = emails.length;
    localStorage.setItem("emails", JSON.stringify(emails));
    input.value = "";
    console.log("Emails on the list: " + emails);
   
   }
}

function deleteall() {
        if (confirm("Do you really want to delete all the entrys?")) {
            emails.length = 0;
            number.innerHTML = emails.length;
            console.warn("All entrys were deleted!");
            console.log(emails);
        }
   
}

function yourfunction() {
    alert("Do you have an idea for a function? Code it!");
}

