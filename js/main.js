

function scrolTo(link, toLink, className, toClassName) {
	document.addEventListener("scroll", function () {
		const thisClass = document.querySelector(`${className}`)
		const posTop = thisClass.getBoundingClientRect().top
		const posBottom = thisClass.getBoundingClientRect().bottom
		const thisDot = document.querySelector(`[href="${link}"]`)
		const toDot = document.querySelector(`[href="${toLink}"]`)
		console.log("pb:" + posBottom, "pt:" + posTop )
		if (posBottom <= 80) {
			thisDot.classList.remove("dot-active")
			toDot.classList.add("dot-active")
		} else if (posBottom < 320) {
			thisDot.classList.add("dot-active")
			toDot.classList.remove("dot-active")

		}
	})
}
scrolTo("#hero", "#about", ".hero")
