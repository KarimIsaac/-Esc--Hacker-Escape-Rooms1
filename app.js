console.log ("Script is running..");

function myFunction() {
    var x = document.getElementById("open");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }