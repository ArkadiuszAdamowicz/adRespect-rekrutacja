
const footerYear = document.querySelector('.footer__year')
const cookieBox = document.querySelector('.cookie-box')
const cookieBtn = document.querySelector('.cookie-btn')
const searchBtn = document.querySelector('.searchBtn')
const closeBtn = document.querySelector('.closeBtn')
const searchBox = document.querySelector('.searchBox')
const dropdownToggle = document.querySelector("[data-bs-toggle='dropdown']")
const arrowIcon = document.querySelector('.arrow.fa-solid.fa-chevron-down')



dropdownToggle.addEventListener('click', function () {
	arrowIcon.classList.toggle('rotate')
})

searchBtn.onclick = function () {
	searchBox.classList.add('active')
	closeBtn.classList.add('active')
	searchBtn.classList.add('active')
}

closeBtn.onclick = function () {
	searchBox.classList.remove('active')
	closeBtn.classList.remove('active')
	searchBtn.classList.remove('active')
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()

const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie')

	if (cookieEaten) {
		cookieBox.classList.add('hide-cookies')
	}
}

const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true')
	cookieBox.classList.add('hide-cookies')
}

cookieBtn.addEventListener('click', handleCookieBox)
showCookie()


const navs = document.querySelector('.navbar-collapse')
const nav = document.querySelector('.navbar')


document.addEventListener('click', () => {
	if (navs.classList.contains('show')) {
		navs.classList.remove('show')
	}
})



document.addEventListener('DOMContentLoaded', function () {
	var photosContainer = document.querySelector('.photos')
	var masonry = new Masonry(photosContainer, {
		itemSelector: '.col-md-4',
		percentPosition: true,
	})
})

