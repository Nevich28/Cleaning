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

	//Slick slider1
	$('.main_slider__items').slick({
		autoplay: true,
		dots: true,
		speed: 1000,
		arrows: false,
		//autoplaySpeed: 6000,
		//setting-name: setting-value
	});

	//Slick slider1
	$('.services__slider').slick({
		infinite: true,
		slidesToShow: 3,
		centerMode: true,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					arrows: false,
					// centerMode: true,
					// centerPadding: '40px',
					// slidesToShow: 3
				}
			},{
				breakpoint: 992,
				settings: {
					// 		arrows: false,
					centerMode: false,
					slidesToShow: 2,
					arrows: false,
					autoplay: true,
					speed: 1000,
					// 		centerPadding: '40px',
					// 		slidesToShow: 1
				}
			},{
				breakpoint: 576,
				settings: {
					// 		arrows: false,
					centerMode: false,
					slidesToShow: 1,
					arrows: false,
					autoplay: true,
					speed: 1000,
					// 		centerPadding: '40px',
					// 		slidesToShow: 1
				}
			}
		],
		//slidesToScroll: 3,
		// centerMode: true,
		// centerPadding: '60px',
		// autoplay: true,
		// dots: true,
		// speed: 1000,
		// arrows: false,
		//autoplaySpeed: 6000,
		//setting-name: setting-value
	});
});