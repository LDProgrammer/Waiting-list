let emails = JSON.parse(localStorage.getItem("emails")) || [];

function send() {
    var input = document.getElementById("input");
    var span = document.getElementById("span");
  
   if (!input.value.trim() || input.value.indexOf("@") === -1) {
    span.style.display = "block";
   } else {
    alert("A notification will be send to " + input.value + ", when the app is published");
    span.style.display = "none";
    emails.push(input.value);
    localStorage.setItem("emails", JSON.stringify(emails));
    input.value = "";
    console.log("Emails on the list: " + emails);
   
   }
}

function deleteall() {
        if (confirm("Do you really want to delete all the entrys?")) {
            emails = [];
            console.warn("All entrys were deleted!");
            console.log(emails);
        }
   
}

function yourfunction() {
    alert("Do you have an idea for a function? Code it!");
}

