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
	function addStyle(item) {//добавка стилей
		item.lastElementChild.classList.add('central_slide');
		item.lastElementChild.lastElementChild.classList.add('central_slide');
		item.lastElementChild.firstElementChild.classList.add('central_slide');
	}

	function removeStyle(item) {//удаление стилей
		item.lastElementChild.classList.remove('central_slide');
		item.lastElementChild.lastElementChild.classList.remove('central_slide');
		item.lastElementChild.firstElementChild.classList.remove('central_slide');
	}
	$('.services__slider').on('init reInit afterChange', function(event, slick, currentSlide){ // прослушиваем все события слайдера
		const activeSlides = document.querySelectorAll('.services__slider .slick-active'),//находим активные слайды на экране
			page = ((currentSlide || 0)+1); // определяем текущую страницу

		const allSlidesJ = document.querySelectorAll('.services__item'); //все слайды
		if (activeSlides.length>2) { //отключаем перекраску для мобильной версии
			allSlidesJ.forEach(item => {//удаляем все стили
				removeStyle(item);
			});
			allSlidesJ.forEach(item => {//ставим стиль нужному
				if (page == $(item).attr('data-slick-index')) {
					addStyle(item);
				}
			});
		}
	});

	$('.services__slider').slick({
		infinite: true,
		slidesToShow: 3,
		autoplay: false,
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

	//слайдер с отзывами
	$('.slide_descr').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slide_photo'
	});
	
	$('.slide_photo').on('init reInit afterChange', function(event, slick, currentSlide){
		const page = ((currentSlide || 0)+1),
			count = slick.slideCount;
		$('.delivering__count').text(`0${page} / 0${count}`);

		const allSlidesJ = document.querySelectorAll('.delivering__photo_box');

		allSlidesJ.forEach(item => {
			item.lastElementChild.classList.remove('delivering_yellov_filter');
			item.classList.remove('delivering_scale_filter');
		});
		allSlidesJ.forEach(item => {
			if (page == $(item).attr('data-slick-index')) {
				item.lastElementChild.classList.add('delivering_yellov_filter');
				item.classList.add('delivering_scale_filter');
			}
		});
	});

	$('.slide_photo').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slide_descr',
		dots: false,
		focusOnSelect: true,
		arrows: true,
		prevArrow: $('.delivering__prev'),
		nextArrow: $('.delivering__next'),
	});
	
});