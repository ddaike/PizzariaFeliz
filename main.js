window.addEventListener('scroll', onScroll)

onScroll()   
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
	const targetLine = scrollY + innerHeight / 2 

	//verificar se a seção passou da lina
	//quais dados vou precisar?

	const sectionTop = section.offsetTop
	const sectionHeight = section.offsetHeight
	const sectionRopReachOrPassedTargetline = targetLine >= sectionTop

	//verificar se a base esta abaixo da linha alvo
	//quais dados vou precisar 

	//a seção termina onde?
	const sectionEndAt = sectionTop + sectionHeight 

	//o final da seção passou da linha alvo

	const sectionEndPassedTargetLine = sectionEndAt <=
	targetLine

	console.log('O fundo da seção passou da linha ?',
	sectionEndPassedTargetline)

	//limites da seção 

	const sectionBoundaries =
	sectionTopReachOrPassedTargetline && 
	!sectionEndPassedTargetline

	const sectionId = section.getAttribute('id')
	const menuElement = document.querySelector(`.menu a 
	[href*=${sectionId}]`)

	menuElement.classList.remove('active')
	if (sectionBourdaries) {
	menuElement.classList.add('active')
    }
}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 400) {
        BackToTopButton.classList.add('show')
    } else {
        BackToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}
function closeMenu() {
    document.body.classList.remove('menu-expanded')
}



ScrollReveal({
    origin: 'top',
    distance: '30px',
    durantion: 500,
}).reveal('#home, #home img, #home .stats, #services, #services .card, #about, #about img');

