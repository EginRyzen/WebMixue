//Humberger button
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav .nav-menu');

menuToggle.addEventListener('click', function () {
    // Toggle the 'slide' class on the nav element
    nav.classList.toggle('slide');
});

$(".filter-button").click(function () {
    let valuDataFilter = $(this).attr("data-filter");
    if (valuDataFilter === "all") {
        $(".filter").show(300);
    } else {
        $(".filter")
            .not("." + valuDataFilter)
            .hide(300);
        $(".filter")
            .filter("." + valuDataFilter)
            .show(300);
    }
    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
        $(this).addClass("active");
    }
});