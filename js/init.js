(function ($) {
    $(function () {
        $('.button-collapse').sideNav({
            closeOnClick: true
        });
        $('#about').click(function () {
            Materialize.toast('Last updated: 2017-08-24', 2000);
            return false;
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space
