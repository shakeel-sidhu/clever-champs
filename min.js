// Add class on mobile screens to Body
$(window).on('resize.myTemplate', function() {
    $('body')[($(this).width() <= 767) ? 'addClass' : 'removeClass']('isMobile')
}).trigger('resize.myTemplate');

// Mob Menu 
$('body').on('click', '.nav-btn', function(event) {
    $(event.currentTarget).toggleClass('active');
    $('.nav-menu').toggleClass('active');
    $('body').toggleClass('no-scroll');
    return false;
});

// Explore Slider
$('.owl-carousel.explore-slider').owlCarousel({
    loop: false,
    margin: 15,
    nav: false,
    responsive: {
        0: {
            items: 1,
            loop: true
        },
        600: {
            items: 2,
            loop: true
        },
        800: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});

// Collective Slider
$('.owl-carousel.collective-slider').owlCarousel({
    loop: false,
    margin: 50,
    nav: false,
    responsive: {
        0: {
            items: 1,
            loop: true
        },
        600: {
            items: 2,
            loop: true
        },
        800: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});

// FAQ Tabbing Section

//evt = event
function opentab(evt, punNum) {
    // Declaring variables 
    var i, tabContent, tablink;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace("active", "")
    }

    document.getElementById(punNum).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("active-tab").click();
// FAQ Accordion
$('.toggle').click(function(e) {
    e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.children('span.plus').show();
        $this.children('span.minus').hide();
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.children('span.plus').hide();
        $this.children('span.minus').show();
        // $this.parent().parent().find('li .inner').removeClass('show');
        // $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});

// Item Hero Slider
$('.item-hero-slider').owlCarousel({
    loop: false,
    margin: 50,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

