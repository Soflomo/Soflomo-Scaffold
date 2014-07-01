setActivePage('body');
$('.sidebar-nav ul').addClass('nav nav-list');

function setActivePage(container) {
    var url     = window.location.pathname,
        navlink = $("" + container + " a[href='"+ url +"']");

    navlink.parent().addClass('active');
}