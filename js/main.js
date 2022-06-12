$(document).ready(function() {
    // slider-area
    $('.slider-active').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
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
        })
        // servise = area
    $('.service-active').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })
    // project area

    $('.project-grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: 50
        }
      })
});