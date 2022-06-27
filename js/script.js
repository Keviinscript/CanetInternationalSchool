(function ($) {
	'use strict';

	var fixed_top = $(".main-menu");
	var scroll_top_open = $(".scroll-top");
	var facility = $(".spin");
	var facility1 = $(".spin1");
	var facility2 = $(".spin2");


	$(window).on('scroll', function () {

		if ($(this).scrollTop() > 100) {
			fixed_top.addClass("animated fadeInDown menu-fixed headerbg");
		} else {
			fixed_top.removeClass("animated fadeInDown menu-fixed headerbg");
		}

		if ($(this).scrollTop() > 800) {
			scroll_top_open.addClass("open");
		} else {
			scroll_top_open.removeClass("open");
		}

		if ($(this).scrollTop() > 200) {
			facility.addClass("spint");
		} else {
			;
		}

		if ($(this).scrollTop() > 230) {
			facility1.addClass("spint");
		} else {
			;
		}

		if ($(this).scrollTop() > 250) {
			facility2.addClass("spint");
		} else {}



	})

	jQuery(document).ready(function ($) {
		$('.counter').counterUp({
			delay: 20,
			time: 4000
		});
	});

})(jQuery);



document.querySelector(".scroll-btn").addEventListener("click", () => {
	document.querySelector("html").style.scrollBehavior = "smooth";
	setTimeout(() => {
		document.querySelector("html").style.scrollBehavior = "unset";
	}, 1000);
});

function moveToSelected(element) {

	if (element == "next") {
		var selected = $(".selected").next();
	} else if (element == "prev") {
		var selected = $(".selected").prev();
	} else {
		var selected = element;
	}

	var next = $(selected).next();
	var prev = $(selected).prev();
	var prevSecond = $(prev).prev();
	var nextSecond = $(next).next();

	$(selected).removeClass().addClass("selected");

	$(prev).removeClass().addClass("prev");
	$(next).removeClass().addClass("next");

	$(nextSecond).removeClass().addClass("nextRightSecond");
	$(prevSecond).removeClass().addClass("prevLeftSecond");

	$(nextSecond).nextAll().removeClass().addClass('hideRight');
	$(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function (e) {
	switch (e.which) {
		case 37: // left
			moveToSelected('prev');
			break;

		case 39: // right
			moveToSelected('next');
			break;

		default:
			return;
	}
	e.preventDefault();
});

$('#carousel div').click(function () {
	moveToSelected($(this));
});

$('#prev').click(function () {
	moveToSelected('prev');
});

$('#next').click(function () {
	moveToSelected('next');
});



const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
var fixedtop = $(".main-menu");
var logo = document.getElementById('logo')


// clicking menubtn on mobile screens
btn.addEventListener('click', () => {
	btn.classList.toggle('open');


	nav.classList.toggle('hidden')
	nav.classList.toggle('block')
})

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



var about = document.getElementById("aboutt")

// clicking aboutus on mobile screens
about.addEventListener('click', () => {
	document.getElementById('aboutus').scrollIntoView({
		behavior: 'smooth'
	})
	btn.classList.remove('open')
	nav.classList.toggle('hidden')

})

var testimonials = document.getElementById("testimonials")

// clicking aboutus on mobile screens
testimonials.addEventListener('click', () => {
	document.getElementById('test').scrollIntoView({
		behavior: 'smooth'
	})
	btn.classList.remove('open')
	nav.classList.toggle('hidden')

})

var gall = document.getElementById("gall")

// clicking aboutus on mobile screens
gall.addEventListener('click', () => {
	document.getElementById('gallery').scrollIntoView({
		behavior: 'smooth'
	})
	btn.classList.remove('open')
	nav.classList.toggle('hidden')

})

var faqq = document.getElementById("faqq")

// clicking aboutus on mobile screens
faqq.addEventListener('click', () => {
	document.getElementById('faq').scrollIntoView({
		behavior: 'smooth'
	})
	btn.classList.remove('open')
	nav.classList.toggle('hidden')

})

var contact = document.getElementById("contactt")

// clicking aboutus on mobile screens
contact.addEventListener('click', () => {
	document.getElementById('contact').scrollIntoView({
		behavior: 'smooth'
	})
	btn.classList.remove('open')
	nav.classList.toggle('hidden')

})