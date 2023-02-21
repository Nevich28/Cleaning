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

	//Slick slider main_slider
	$('.main_slider__items').slick({
		autoplay: true,
		dots: true,
		speed: 1000,
		arrows: false,
	});

	//Slick slider services
	$('.services__slider').slick({
		infinite: true,
		slidesToShow: 3,
		centerMode: true,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					arrows: false,
				}
			},{
				breakpoint: 992,
				settings: {
					centerMode: false,
					slidesToShow: 2,
					arrows: false,
					autoplay: true,
					speed: 1000,
				}
			},{
				breakpoint: 576,
				settings: {
					centerMode: false,
					slidesToShow: 1,
					arrows: false,
					autoplay: true,
					speed: 1000,
				}
			}
		],
	});

	//tabs project
	const buttons = document.querySelectorAll('.project__tab'),
		tabsImg = document.querySelectorAll('.project__img');
	let firthtTabActive = 'all project',
		showAllTab = 'all project',
		currentTab = firthtTabActive;

	buttons.forEach(tab => { //ставим класс активности табу по умолчанию
		if (tab.dataset.content == currentTab) {
			tab.classList.add('active_tab');
			tab.firstElementChild.classList.add('active_descr');
		}
	});
	tabsImg.forEach(item => { //выводим табы по умолчанию
		if (item.dataset.content == currentTab) {
			$(item).show();
		}
		if (currentTab == showAllTab) {
			$(item).show();
		}
	});
	

	buttons.forEach(tab => {// перебираем все кнопки в табах
		
		tab.addEventListener('click', () => { //ловим нажатие на таб
			buttons.forEach(item => { //убираем классы активности со всех табов
				item.classList.remove('active_tab');
				item.firstElementChild.classList.remove('active_descr');
			});
			tab.classList.add('active_tab'); //ставим класс активности выбарому табу
			tab.firstElementChild.classList.add('active_descr');

			currentTab = tab.dataset.content; //сохраняем активный таб

			tabsImg.forEach(images => {
				$(images).hide();
			});
			tabsImg.forEach(images => {
				if (images.dataset.content == currentTab) {//показываем выбранные картинки
					$(images).fadeIn();
				}
				if (currentTab == showAllTab) {//показываем все, если выбрано показать все
					$(images).fadeIn();
				}
			});
		});
	});

});