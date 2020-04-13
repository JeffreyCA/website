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
            var formattedDate = formatDate(new Date(document.lastModified));
            Materialize.toast('Last updated: ' + formattedDate, 2000);
            return false;
        });

        // Did you know?
        const diy_arr = [
            "This website was created using the <a href=\"http://materializecss.com/\" class=\"pink-text text-lighten-4\" target=\"_blank\">Materialize</a> framework, which is based on Google's Material Design language.",

            "This website is being hosted using <a href=\"https://www.netlify.com/\" class=\"cyan-text text-lighten-3\" target=\"_blank\">Netlify</a>, an \"all-in-one platform for automating modern web projects\", including continuous integration via GitHub, CDN, HTTPS support, and more.",

            "Some JavaScript libraries used include <a href=\"https://github.com/koenoe/cocoen/\" class=\"green-text text-lighten-3\" target=\"_blank\">Cocoen</a> (before/after image slider) and <a href=\"https://masonry.desandro.com/\" class=\"pink-text text-lighten-2\">Masonry</a> (grid library).",

            "Try viewing my website from a mobile device!"
        ];

        var i = 1;
        $('#diy-text').html(diy_arr[0]);
        $('#diy-card').click(function (e) {
            // Do not change content if hyperlink clicked
            if (!$(e.target).is("a")) {
                $('#diy-text').html(diy_arr[i]);
                i = ++i % 4;
            }
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space
