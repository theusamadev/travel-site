import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/revealOnScroll'
import StickyHeader from './modules/StickyHeader'


import('../styles/styles.css');
// import('./modules/MobileMenu');




let stickyHeader = new StickyHeader();
let revealOnScroll  = new RevealOnScroll();
let mobileMenu = new MobileMenu();



if(module.hot){
    module.hot.accept();
}

 

