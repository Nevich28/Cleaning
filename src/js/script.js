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
		arrows: true,
		prevArrow: $('.services__prev'),
		nextArrow: $('.services__next'),
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
	//маска ввода телефона
	$('[data-phone]').inputmask({'mask': '+1 (999) 999-99-99'});

	//открытие модалок
	function closeModal(modalSelector) { // закрытие окна
		const modal = document.querySelector(modalSelector);
		modal.classList.add('hide');
		modal.classList.remove('show');
		document.body.style.overflow = ''; 
	}
	
	function openModal(modalSelector) { // открытие окна
		const modal = document.querySelector(modalSelector);	
		modal.classList.add('show');
		modal.classList.remove('hide');
		document.body.style.overflow = 'hidden';
	}	
	
	function modal(triggerSelector, modalSelector) {
		//triggerSelector - тригер для открытия модального окна
		//modalSelector - селектор самого модального окна
		
		// модальное окно
		const modalTrigger = document.querySelectorAll(triggerSelector), // переменные
			modal = document.querySelector(modalSelector);
	
			
	
		modalTrigger.forEach(btn => { //запуск по нажатию на одну из кнопок
			
			btn.addEventListener('click', () => {
				console.log('click triger');
				openModal(modalSelector);
			});
		});	
	
		modal.addEventListener('click', (event) => { //закрытие при нажатии вне окна
			console.log('click window');
			if (event.target === modal || event.target.getAttribute('data-close') == '') {
				closeModal(modalSelector); 
			}
		});
	
		document.addEventListener('keydown', (e) => { //закрытие эскейпом
			console.log('click esc');
			if (e.code === 'Escape' && modal.classList.contains('show')) {
				closeModal(modalSelector);
			}
		});	
	}
	modal('[data-modal]', '.modal');

	// работа с кнопками подтверждения в формах
	function forms(formSelector) {
		// Формы
		const forms = document.querySelectorAll(formSelector);//переменная для самой формы
	
		const message = { //список сообщений для статусов загрузки
			//loading: 'img/form/spinner.svg',
			success: 'Thank you.   We will contact you soon',
			failure: 'Что-то пошло не так...'
		};
	
		forms.forEach(item => { //цикл для двух видов одной и той же формы
			bindPostData(item);
		}); 
	
	
	
		function bindPostData(form) { //при нажатии подтверждения в форме
			form.addEventListener('submit', (e) => {
				e.preventDefault(); //отключаем стандартное поведение формы
	
				const statusMessage = document.createElement('img'); //добавка сообщения после выполнения отправки формы
				//statusMessage.src = message.loading;
				statusMessage.style.cssText = `
					display: block;
					margin: 0 auto;
					`;
				form.insertAdjacentElement('afterend', statusMessage); 
	
				showThanksModal(message.success); // заглушка, если не отправлять данные
				//const formData = new FormData(form); //получение данных из формы
	
				//const json = JSON.stringify(Object.fromEntries(formData.entries())); //сборка json из полученных данных
	
				// postData('http://localhost:3000/requests', json) //отправка самого запроса с формы обратной связи
				// 	.then(data => { //сообщение о том что все нормально
				// 		console.log(data);
				// 		showThanksModal(message.success);
				// 		statusMessage.remove();
				// 	}).catch(() => { //если произошла ошибка
				// 		showThanksModal(message.failure);
				// 	}).finally(() => {  // очистка формы ввода в любом случае
				// 		form.reset();
				// 	});
			});
		}
		function showThanksModal(message) { //создание модалки после отправки запроса
			const prevModalDialog = document.querySelector('.modal__dialog');
	
			prevModalDialog.classList.add('hide');
			openModal('.modal');
	
			const thanksModal = document.createElement('div');
			thanksModal.classList.add('modal__dialog');
			thanksModal.innerHTML = `
				<div class="modal__content">
					<div class="modal__close" data-close>&times;</div>
					<div class="modal__title">${message}</div>
				</div>
			`;
	
			document.querySelector('.modal').append(thanksModal); //возврат на место нормальной модалки
			setTimeout(() => {
				thanksModal.remove();
				prevModalDialog.classList.add('show');
				prevModalDialog.classList.remove('hide');
				closeModal('.modal');
			}, 4000);
		}
	}

	forms('form'); // вызов самой функции

	//Smooth scroll and pageup
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});
	
	$('a[href=#up]').click(function(){
		const _href = $(this).attr('href');
		$('html, body').animate({scrollTop: $(_href).offset().top+'px'},2000);
		return false;
	});
});