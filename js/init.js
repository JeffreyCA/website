(function ($) {
    $(function () {
        $('.button-collapse').sideNav({
            closeOnClick: true
        }
        );

    }); // end of document ready
})(jQuery); // end of jQuery name space

$('#about').click(function () { Materialize.toast('Version 0.0.1', 2000, 'rounded'); return false; });
