(function ($) {
    $(function () {
        $('.button-collapse').sideNav({
            closeOnClick: true
        });

        $('#showcase-tabs').tabs({
            'swipeable': true
        });

        $('#about').click(function () {
            Materialize.toast('Last updated: 2017-08-27', 2000);
            return false;
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space
