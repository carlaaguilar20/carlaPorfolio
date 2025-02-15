
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const blurHeader = () =>{
    const header = document.getElementById('header')
   
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)



const contactForm = document.getElementById('contact-form')
 const contactMessage = document.getElementById('contact-message')

const sendEmail= (e) =>{
    e.preventDefault()
    emailjs.sendForm('service_5s1d5fp', 'template_fnyfgxy','#contact-form', 'I2nupR4-XFBMYUkrN')
    .then(() =>{
        contactMessage.textContent = 'Mensaje enviado exitosamente☑️'
        setTimeout(()=>{
            contactMessage.textContent= ''
        }, 5000)

        contactForm.reset()
    }, () =>{
        contactMessage.textContent = 'Mensaje no fue enviado (service error)✖️'
    })
}

contactForm.addEventListener('submit', sendEmail)

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
 s
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration:2500,
    delay:400,
    
})
sr.reveal('.home__data, .home__social,  .contact__container, .footer__container')
sr.reveal('.home__image', {origin:'bottom'})
sr.reveal('.about__data, .skills__data', {origin:'left'})
sr.reveal('.about__image, .skills__content', {origin:'right'})
sr.reveal('.services__card, .projects__card', {interval:100})