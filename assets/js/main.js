/*======================= SHOW MENU =========================== */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    nav = document.getElementById(navId)

    //validate that variabels exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            //We add the show-menu class to the div tag with the nav_menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*======================= REMOVE MENU MOBILE =========================== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*======================= SCROLLY SECTION ACTIV LINK =========================== */
const section = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = windows.pageYOffset

    section.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }

    })
}
window.addEventListener('scroll', scrollActive)

/*======================= CHANGE BACKGROUND HEADER ======================== */
function scrollHeader() {
    const nav = document.getElementById('header')

    //When the scroll is greater than 200 viewport height, add the scroll-header tag
    if (this.scrolY >= 200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll - header')
}
window.addEventListener('scroll', scrollHeader)

/*======================= SHOW SCROLL TOP ======================== */
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')

    //When the scroll is higher than 560 viewport height, add the show-scroll class to the tag with the scroll-top
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*======================= DARK LIGHT THEME ======================== */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

//Previus selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.body.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

//we validate if the user previously chose a topic
if (selectedTheme) {
    //if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme == 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon == 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

//Activate / deactivated the theme manually with the button
themeButton.addEventListener('click', () => {
    //add or remove the dark /icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*======================= SLIDESHOW ======================== */
var slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n)
}

//Thumnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n)
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active"
}

/*======================= SCROLL REVEAL ANIMATION ======================== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(` .home, .about__data, .about__img,
            .services__content, .products,
            .size__data, .size__img,
            .contact__data, .contact__button,
            .footer__content, .detail__img, .detail__data`, {
    interval: 200
})



