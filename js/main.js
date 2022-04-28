
const sliderImage = document.querySelectorAll(".use__slider-image"),
	sliderInfo = document.querySelectorAll(".use__info"),
	slidesStep = document.querySelectorAll(".use__slider-dot"),
	msgBlock = document.querySelector(".msg__block"),
	msgClose = document.querySelector(".msg-close"),
	msgOpen = document.querySelector(".msg-open"),
	formBody = document.querySelector(".form__body");
let slideIndex = 1
let timer = setInterval(() => { plusSlides(1) }, 5500)
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {

	if (n > sliderImage.length) {
		slideIndex = 1
		for (let j = 0; j < sliderImage.length; j++) {
			slidesStep[j].classList.remove("active")
		}
	}
	if (n < 1) {
		slideIndex = sliderImage.length
	}

	for (let i = 0; i < sliderImage.length; i++) {
		sliderImage[i].classList.remove("active");
		sliderInfo[i].classList.remove("active");
	}

	for (let j = 0; j < slideIndex; j++) {
		slidesStep[j].classList.add("active")
	}
	sliderImage[slideIndex - 1].classList.add("active");
	sliderInfo[slideIndex - 1].classList.add("active");
}

$(document).ready(function () {
	$(".tarrif__slider-block").slick({
		slidesToShow: 1,
		centerMode: true,
		dots: true,
		variableWidth: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
	});
});

msgBlock.addEventListener("click", function () {
	// msgClose.classList.toggle("active")
	// msgOpen.classList.toggle("active")
	formBody.classList.toggle("active")
})