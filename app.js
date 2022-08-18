var acc = document.getElementsByClassName("faq-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    /* nextElementSibling should be faq-panel */ 
    var panel = this.nextElementSibling; 
    if (panel.style.display === "block") {
      panel.style.display = "none";
      panel.classList.toggle("active");
    } else {
      panel.style.display = "block";
      panel.classList.toggle("active");
    }
  });
} 