/* ---MOSTRAR MENU Y OCULTAR (HIDDEN)--- */
const navMenu = document.getElementById('nav-menu'),
    navToggle=document.getElementById('nav-toggle'),
    navClose=document.getElementById('nav-close')

/* ---MOSTRAR MENU--- */
/* ---Validar si existe constante--- */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* ---OCULTAR MENU--- */
/* ---Validar si existe constante--- */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* ---REMOVER MENU MOVIL--- */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/* ---ACORDEON DE HABILIDADES--- */
const skillsContent=document.getElementsByClassName('skills__content'),
    skillsHeader=document.querySelectorAll('.skills__header')

    function toggleSkills(){
        let itemClass=this.parentNode.className
        for(i=0; i<skillsContent.length;i++){
            skillsContent[i].className='skills__content skills__close'
        }
        if(itemClass==='skills__content skills__close'){
            this.parentNode.className='skills__content skilss__open'
        }
    }

    skillsHeader.forEach((el)=>{
        el.addEventListener('click', toggleSkills)
    })

/* ---FORMACION ACADEMICA--- */
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')


tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/* ---SWIPPER PORTAFOLIO--- */
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop:true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
  });

/* ---SCROOLL SECCIONES ACTIVE LINK--- */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/* ---CAMBIAR FONDO DEL HEADER */
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
