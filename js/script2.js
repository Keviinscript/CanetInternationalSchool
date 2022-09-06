(function(){
    'use strict'

    const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
var fixedtop = $(".main-menu");
var logo = document.getElementById("logo");

// clicking menubtn on mobile screens
btn.addEventListener("click", () => {
  btn.classList.toggle("open");

  nav.classList.toggle("hidden");
  nav.classList.toggle("block");
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

var about = document.getElementById("aboutt");

// clicking aboutus on mobile screens
about.addEventListener("click", () => {
  document.getElementById("aboutus").scrollIntoView({
    behavior: "smooth",
  });
  btn.classList.remove("open");
  nav.classList.toggle("hidden");
});

var testimonials = document.getElementById("testimonials");

// clicking aboutus on mobile screens
testimonials.addEventListener("click", () => {
  document.getElementById("test").scrollIntoView({
    behavior: "smooth",
  });
  btn.classList.remove("open");
  nav.classList.toggle("hidden");
});

var gall = document.getElementById("gall");

// clicking aboutus on mobile screens
gall.addEventListener("click", () => {
  document.getElementById("gallery").scrollIntoView({
    behavior: "smooth",
  });
  btn.classList.remove("open");
  nav.classList.toggle("hidden");
});

var faqq = document.getElementById("faqq");

// clicking aboutus on mobile screens
faqq.addEventListener("click", () => {
  document.getElementById("faq").scrollIntoView({
    behavior: "smooth",
  });
  btn.classList.remove("open");
  nav.classList.toggle("hidden");
});

var contact = document.getElementById("contactt");

// clicking aboutus on mobile screens
contact.addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
  btn.classList.remove("open");
  nav.classList.toggle("hidden");
});

document.querySelector("form").addEventListener("submit", handleSubmit);

const handleSubmit = (e) => {
  e.preventDefault();
  let myForm = document.getElementById("pizzaOrder");
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};

}())