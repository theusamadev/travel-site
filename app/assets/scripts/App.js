import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/revealOnScroll'


import('../styles/styles.css');
// import('./modules/MobileMenu');


let revealOnScroll  = new RevealOnScroll();

let mobileMenu = new MobileMenu();



if(module.hot){
    module.hot.accept();
}

 

