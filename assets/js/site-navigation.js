document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.language-switch a').forEach(function (link) {
        link.addEventListener('click', function () {
            // Both languages share section IDs, so keep the reader's place.
            link.hash = window.location.hash;
        });
    });

    document.querySelectorAll('#navbarResponsive .nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            document.getElementById('navbarResponsive').classList.remove('show');
            document.querySelector('.navbar-toggler').setAttribute('aria-expanded', 'false');
        });
    });
});
