// NavBar Functions
const NavFunctions = () => {
    const nav = document.querySelector('.nav-links-1');
    const btn = document.querySelector('.burger');
    const navLinks = document.querySelectorAll('.nav-links-1 li');

    btn.addEventListener('click',(()=>{
        //  Nav Toggler 
        nav.classList.toggle('nav-active');

        // HamBurger Toggler
        btn.classList.toggle('toggle')

    }))

}

NavFunctions();




// Owl Script Here 
$(document).ready(function () {
    $('#first .owl-carousel').owlCarousel({
        items: 5, // This Is The Number of Items You Want To show
        margin: 20, // This Is The Gap Which You Want To Shows
        loop: true, // Behaves As A Loop As The Default is False We Need To Change
        nav: true, // It Will Show THe arrows 
        autoplay: true, // Playing The Carousel Automatically
        autoplayTimeout: 6000, // At What Time You Need The Carousel To scroll Automatically
        
        // This Is For The Animation Only Occurs For Single Data
        // animateOut: 'slideOutDown',
        // animateIn: 'pulse',
        rtl : true, // It Will Make The Carousel Slide from Right To left In reverse Order
        dots : false,
                
        responsive: {
            0: {
                items: 3,
                margin : 0,
            },
            600 : {
                items : 5,
                margin : 5,
            },
            1000 : {
                items : 5,
                // stagePadding: 50, // It will Show The Cut Out Part From The Both The Sides Of The Carousel
            },
        }
    })
});
