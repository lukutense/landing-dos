/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader= ()=>{
    const header= document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >=50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')

}
window.addEventListener('scroll',scrollHeader)

/*=============== SWIPER PRODUCTS ===============*/
let swiperProducts = new Swiper(".products__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop:true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1024: {
          spaceBetween: 72,
        },
      },
  });


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections= document.querySelectorAll('section[id]')

const scrollActive= ()=>{
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight,
            sectionTop= current.offsetTop - 58,
            sectionId= current.getAttribute('id'),
            sectionClass= document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
        
    })
}

window.addEventListener('scroll', scrollActive)



/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp= ()=>{
    const scrollUp= document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, add the show-scroll clas to the a tag with the scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton= document.getElementById('theme-button')
const darkTheme= 'dark-theme'
const iconTheme= 'ri-sun-line'

//Previously selected topic (if user selected)
const selectedTheme= localStorage.getItem('selected-theme')
const selectedIcon= localStorage.getItem('selected-icon')

//we obtain the current theme that the inerface has by validating the dark-theme class
const getCurrentTheme=()=>document.body.classList.contains(darkTheme) ?'dark' : 'light'
const getCurrentIcon= ()=>themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme){
    //If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme=== 'dark' ? 'add' :'remove'](darkTheme)
    themeButton.classList[selectedIcon=== 'ri-moon-line' ? 'add' :'remove'](iconTheme)
}
//activate/deactivate the theme manually with the button
themeButton.addEventListener('click', ()=>{
    //add or remove the dark/icon theme
    const body= document.querySelector('body')
    
    if(!body.classList.contains(darkTheme)){
        document.body.classList.add(darkTheme)
        themeButton.classList.add(iconTheme)
    } else {
        body.classList.remove(darkTheme)
        themeButton.classList.remove(iconTheme)
    }
    //we savw the theme and the current icoon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

})
/*=============== SCROLL REVEAL ANIMATION ===============*/
