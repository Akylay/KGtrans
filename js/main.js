const sections = document.querySelectorAll("section");
const dots = document.querySelectorAll(".dot")


sections.forEach(section => {
	document.addEventListener("scroll", function () {
		const posTop = section.getBoundingClientRect().top;
		const posBottom = section.getBoundingClientRect().bottom;
		dots.forEach(el => {
			const dot = el.getAttribute("href")
		})
		console.log("top: " + section.getAttribute("id") + posTop)
		console.log("bottom: " + section.getAttribute("id") + posBottom)
		section.classList.toggle("visible", posBottom <= 76);
	});
})

// const header = document.querySelector("header"),
// 	body = document.querySelector("body");
// document.addEventListener("scroll", () => {
// 	let scrollTop = body.scrollHeight;
// 	console.log(scrollTop)
// 	if (scrollTop >= 100) {
// 		header.classList.add("hide")
// 	} else if (scrollTop <= 100) {
// 		header.classList.remove("hide")
// 	}
// })

// const sections = document.querySelectorAll("section")

// sections.forEach(section => {
// 	const sectionID = section.getAttribute("id")
// 	window.onscroll = function () {
// 		let posTop = section.getBoundingClientRect().top
// 		let posBottom = section.getBoundingClientRect().bottom
// 		console.log(sectionID)
// 		// if (posTop > 0) {
// 		// 	section.classList.add("visible")
// 		// }else if(posBottom = 0) {
// 		// 	section.classList.remove("visible")
// 		// }
// 		// console.log(section.getAttribute("class") + " top " + posTop);
// 		// console.log(section.getAttribute("class") + " bottom " + posBottom);
// 	}
// })
