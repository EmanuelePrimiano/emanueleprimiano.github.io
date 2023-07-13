// script.js

function SendMail() {
  emailjs.init('F4D2ZLHTd_DgyAOWj')
  var params = {
    from_name : document.getElementById("fullName").value,
    email_id : document.getElementById("email_id").value,
    message : document.getElementById("message").value
  }
  emailjs.send("service_gkw1sva","template_8e7tewd", params).then(function(res) {
    alert("Success!" + res.status);
  })
}

function myFunction() {
  var x = document.getElementById("option");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  var x = document.getElementById("ab","ms","mw","so");
  if (x.style.display === "block") {
    x.style.display = "none";
  }


 

  

}