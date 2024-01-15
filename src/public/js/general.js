document.addEventListener("DOMContentLoaded", function () {
	var elements = document.querySelectorAll(
		".section img, .section h3, .section p"
	)

	elements.forEach(function (element) {
		element.addEventListener("click", function () {
			window.location.href = "/quiz-start"
		})
	})
})
