class MobileMenu {
    constructor(){
        this.menuIcon = document.querySelector('.site-header__menu-btn');
        this.menuContent = document.querySelector('.navbar__content');
        this.events();
    }


    events(){
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
    }


    toggleTheMenu(){
        this.menuContent.classList.toggle('navbar__content--is-visible');
        this.menuIcon.classList.toggle('site-header__menu-btn__close-x');
    }

}


export default MobileMenu;