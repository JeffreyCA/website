(function ($) {
    $(function () {
        $('.button-collapse').sideNav({
            closeOnClick: true
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space

$('#about').click(function () { Materialize.toast('Last updated: 2017-08-22', 2000); return false; });
