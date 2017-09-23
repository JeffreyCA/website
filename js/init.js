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

        $('#showcase-tabs').tabs({
            'swipeable': true
        });

        $('#about').click(function () {
            var formattedDate = formatDate(new Date(document.lastModified));
            Materialize.toast('Last updated: ' + formattedDate, 2000);
            return false;
        });

        $("#android-egg").hover(
            // Mouse hover
            function () {

            },
            // Mouse leave
            function () {

            }
        );
        $('.slider').slider({full_width: true});
    }); // end of document ready
})(jQuery); // end of jQuery name space
