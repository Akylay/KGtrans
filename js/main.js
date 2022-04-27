
const sliderImage = document.querySelectorAll(".use__slider-image"),
	sliderInfo = document.querySelectorAll(".use__info"),
	slidesStep = document.querySelectorAll(".use__slider-dot");
let slideIndex = 1
let timer = setInterval(()=>{plusSlides(1)},1500)
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
