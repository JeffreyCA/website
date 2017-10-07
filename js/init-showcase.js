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
                        changeInfo("Welcome to my Showcase! Here you can find digital media that I created, featuring some 3D print models and artworks I made for FINE 130, a digital imaging course that I took in Spring 2017. Click through the tabs to filter media by category. FINE 130 works are categorized by course modules. Enjoy!");
                    } else if (hash === '3d') {
                        changeInfo("These are some models I designed for 3D printing using CAD software. I also printed them out myself using a CubePro.");
                    } else if (hash === 'fine130') {
                        changeInfo("These are works I made for FINE 130: Digital Imaging, which I took online in Spring 2017. It was a very fun and enjoyable fine arts course. The course was divided into 8 modules, each focusing on a different approach to expressing oneself through digital media. Click each tab to view more information about the featured works. All works shown were created using Adobe Photoshop.");
                    } else if (hash === 'mod1') {
                        changeInfo("FINE 130 Module 1: Collage Reveal and Conceal");
                    } else if (hash === 'mod2') {
                        changeInfo("FINE 130 Module 2: Phony Photograms");
                    } else if (hash === 'mod3') {
                        changeInfo("FINE 130 Module 3: Spatial Arrangements");
                    } else if (hash === 'mod4') {
                        changeInfo("FINE 130 Module 4: The Power of Type");
                    } else if (hash === 'mod5') {
                        changeInfo("FINE 130 Module 5: Culture Jamming");
                    } else if (hash === 'mod6') {
                        changeInfo("FINE 130 Module 6: Social and Political Activism");
                    } else if (hash === 'mod7') {
                        changeInfo("FINE 130 Module 7: Self Portraiture");
                    } else if (hash === 'mod8') {
                        changeInfo("FINE 130 Module 8: Plugged (or Unplugged)?");
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
        // Start Masonry and Cocoen after all images are loaded
        $masonry.imagesLoaded(function () {
            $masonry.masonry('layout');
            $('.cocoen').cocoen();
        });

        $('a.filter').click(function (e) {
            e.preventDefault();
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space