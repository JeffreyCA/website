const LAST_UPDATED = '2021-01-27';

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

        $('.dropdown-button').dropdown({
            inDuration: 100,
            outDuration: 100,
            belowOrigin: true, // Displays dropdown below the button
            alignment: 'right' // Displays dropdown with edge aligned to the left of button
          }
        );

        $('#showcase-tabs').tabs({
            'swipeable': true
        });

        $('#about').click(function () {
            Materialize.toast(`Last updated: ${LAST_UPDATED}`, 2000);
            return false;
        });

        // Did you know?
        const dyk_arr = [
            "This website was created using the <a href=\"http://materializecss.com/\" class=\"pink-text text-lighten-4\" target=\"_blank\">Materialize</a> framework, which is based on Google's Material Design language.",

            "This website is being hosted using <a href=\"https://www.netlify.com/\" class=\"cyan-text text-lighten-3\" target=\"_blank\">Netlify</a>, an \"all-in-one platform for automating modern web projects\", including continuous integration via GitHub, CDN, HTTPS support, and more.",

            "Some JavaScript libraries used include <a href=\"https://github.com/koenoe/cocoen/\" class=\"green-text text-lighten-3\" target=\"_blank\">Cocoen</a> (before/after image slider) and <a href=\"https://masonry.desandro.com/\" class=\"pink-text text-lighten-2\">Masonry</a> (grid library)."
        ];

        var i = 1;
        $('#dyk-text').html(dyk_arr[0]);
        $('#dyk-card').click(function (e) {
            // Do not change content if hyperlink clicked
            if (!$(e.target).is("a")) {
                $('#dyk-text').html(dyk_arr[i]);
                i = ++i % 3;
            }
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space
