const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {

		769: {
			slidesPerView: 2,
			spaceBetween: 20,
	    },

		1025: {
			slidesPerView: 3,
			spaceBetween: 20,
	    },


		1367: {
			slidesPerView: 4,
			spaceBetween: 45,
	},
	}

})