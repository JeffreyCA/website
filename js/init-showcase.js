// Convert date to yyyy-mm-dd format
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

(function ($) {
    $(function () {
        $('.button-collapse').sideNav({
            closeOnClick: true
        });

        $('.user-view').click(function () {
            $('.button-collapse').sideNav('hide');
        })

        $('#about').click(function () {
            var formattedDate = formatDate(new Date(document.lastModified));
            Materialize.toast('Last updated: ' + formattedDate, 2000);
            return false;
        });

        // Navbar
        $(".button-collapse").sideNav();
        var categories = $('nav .categories-container');
        if (categories.length) {
            categories.pushpin({
                top: categories.offset().top
            });
            var $links = categories.find('li');
            $links.each(function () {
                var $link = $(this);
                $link.on('click', function () {
                    $links.removeClass('active');
                    $link.addClass('active');
                    var hash = $link.find('a').first()[0].hash.substr(1);
                    var $galleryItems = $('.gallery .gallery-item');

                    $galleryItems.stop().addClass('gallery-filter').fadeIn(100);

                    if (hash !== 'all') {
                        var $galleryFilteredOut = $galleryItems.not('.' + hash).not('.all');
                        $galleryFilteredOut.removeClass('gallery-filter').hide();
                    }

                    // transition layout
                    $masonry.masonry({
                        transitionDuration: '.5s'
                    });
                    // only animate on layout
                    $masonry.one('layoutComplete', function (event, items) {
                        $masonry.masonry({
                            transitionDuration: 0
                        });
                    });

                    setTimeout(function () {
                        $masonry.masonry('layout');
                    }, 1000);

                    function changeInfo(text) {
                        Materialize.fadeInCard('#gallery-info')
                        $("#gallery-info span").text(text);
                    }

                    if (hash === 'all') {
                        changeInfo("This is my gallery...");
                    } else if (hash === '3d') {
                        changeInfo("3D models");
                    } else if (hash === 'fine130') {
                        changeInfo("Collection from FINE 130 course I took in Spring 2017");
                    } else if (hash === 'mod1') {
                        changeInfo("FINE 130 - Module 1: ");
                    } else if (hash === 'mod2') {
                        changeInfo("FINE 130 - Module 2:");
                    } else if (hash === 'mod3') {
                        changeInfo("FINE 130 - Module 3:");
                    } else if (hash === 'mod4') {
                        changeInfo("FINE 130 - Module 4:");
                    } else if (hash === 'mod5') {
                        changeInfo("FINE 130 - Module 5:");
                    } else if (hash === 'mod6') {
                        changeInfo("FINE 130 - Module 6:");
                    } else if (hash === 'mod7') {
                        changeInfo("FINE 130 - Module 7:");
                    } else if (hash === 'mod8') {
                        changeInfo("FINE 130 - Module 8:");
                    }

                    console.log(hash);
                });
            });
        }

        var $masonry = $('.gallery');
        $masonry.masonry({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.gallery-filter',
            // use element for option
            columnWidth: '.gallery-filter',
            // no transitions
            transitionDuration: 0
        });
        // layout Masonry after each image loads
        $masonry.imagesLoaded(function () {
            $masonry.masonry('layout');
        });
        $('a.filter').click(function (e) {
            e.preventDefault();
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space
