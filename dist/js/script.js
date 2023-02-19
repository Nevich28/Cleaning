window.addEventListener('DOMContentLoaded', () => {
	//Управление гамбургером
	const hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu__items'),
		menuItem = document.querySelectorAll('.menu__item');

	hamburger.addEventListener('touchstart', () => {
		hamburger.classList.toggle('hamburger__cross');
		menu.classList.toggle('menu_activ');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger__cross');
			menu.classList.toggle('menu_activ');
		});
	});

	//Slick slider
	$('.main_slider__items').slick({
		autoplay: false,
		dots: true,
		speed: 1000,
		//autoplaySpeed: 6000,
		//setting-name: setting-value
	});
});