

function slidesPlagin(activeSlide = 3) {
	const slides = document.querySelectorAll('.slide');

	slides[activeSlide].classList.add('active');
	
	for (const slide of slides) {
		slide.addEventListener('click', () => {
			clearActiveClases()
	
			slide.classList.add('active')
		})
	};
	
	function clearActiveClases() {
		slides.forEach((slide) => {
			slide.classList.remove('active')
		})
	};
};

slidesPlagin()