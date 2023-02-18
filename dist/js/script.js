window.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu__items');

	hamburger.addEventListener('touchstart', () => {
		hamburger.classList.toggle('hamburger__cross');
		menu.classList.toggle('menu_activ');
	});
});