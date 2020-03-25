import "lazysizes"
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/revealOnScroll'
import StickyHeader from './modules/StickyHeader'
import('../styles/styles.css');
// import('./modules/MobileMenu');


let stickyHeader = new StickyHeader();
let revealOnScroll  = new RevealOnScroll();
let mobileMenu = new MobileMenu();
let modal

document.querySelectorAll('.open-modal').forEach( el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        if(typeof modal == 'undefined'){
            import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
                modal = new x.default()
                setTimeout(() => modal.openTheModal(), 20)
            }).catch(() => console.log('There is a problem'))
        }else{
            modal.openTheModal()
        }
    })
})


if(module.hot){
    module.hot.accept();
}

 

