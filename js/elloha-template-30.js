$(document).ready(function () {
    // Mobile Nav
    var MobNav = $('.navbar-toggler');
    MobNav.on('click', function (event) {
        event.stopPropagation();
        $('.menu-mobile').toggleClass('menu-mobile-active');
        $('.navbar-toggler .btn-menu').toggleClass('d-none');
    });

    // Tablet Desktop Nav
    $('.clic-sub-menu').on('click', function () {
        if ($(this).children('.sub-menu').hasClass('sub-menu-active')) {
            $('.clic-sub-menu .sub-menu').removeClass('sub-menu-active');
        } else {
            $('.clic-sub-menu .sub-menu').removeClass('sub-menu-active');
            $(this).children('.sub-menu').addClass('sub-menu-active');
        }
    });

    // Sous-menu langues in Computer
    $('.languages').on('click', function () {
        if ($(this).children('.dropdown-menu').hasClass('dropdown-menu-active')) {
            $('.languages .dropdown-menu').removeClass('dropdown-menu-active');
        } else {
            $('.languages .dropdown-menu').removeClass('dropdown-menu-active');
            $(this).children('.dropdown-menu').addClass('dropdown-menu-active');
        }
    });

    // Texte presentation page Home
    if ($(".description").length > 0) {
        var $description = $(".description");
        var $seeMore2 = $("#seeMore2");
        var $seeLess2 = $("#seeLess2");

        // Check si le texte est limité, on affiche pas les boutons
        if ($description[0].scrollHeight <= $description.height()) {
            $seeMore2.hide();
            $seeLess2.hide();
        } else {
            $seeMore2.show();
            $seeLess2.hide();
        }

        // Voir plus presentation
        $seeMore2.on('click', function (e) {
            e.preventDefault();
            $description.css('height', 'auto').addClass("expanded");
            $seeMore2.hide();
            $seeLess2.show();
        });

        // Voir moins presentation
        $seeLess2.on('click', function (e) {
            e.preventDefault();
            $description.css('height', 'auto').removeClass("expanded");
            $seeMore2.show();
            $seeLess2.hide();
        });
    };
    
    // Voir plus SCEA
    $(".options-scea").hide();
    $(".options-scea").slice(0, 10).show();

    $("#seeMore1").on('click', function (e) {
        e.preventDefault();

        $(".options-scea:hidden").slideDown();

        $("#seeMore1").hide();
        $("#seeLess1").show();
    });

    // Voir moins SCEA
    $("#seeLess1").on('click', function (e) {
        e.preventDefault();

        $(".options-scea").not(":lt(10)").slideUp();

        $("#seeMore1").show();
        $("#seeLess1").hide();
    });

    // Text offer (page détail/offer)
    if ($(".text-offer").length > 0) {
        var $textoffer = $(".text-offer");
        var $seeMore3 = $("#seeMore3");
        var $seeLess3 = $("#seeLess3");

        // Check si le texte est limité, on affiche pas les boutons
        if ($textoffer[0].scrollHeight <= $textoffer.height()) {
            $seeMore3.hide();
            $seeLess3.hide();
        } else {
            $seeMore3.show();
            $seeLess3.hide();
        }
    
        // Voir plus presentation
        $seeMore3.on('click', function (e) {
            e.preventDefault();
            $textoffer.css('height', 'auto').addClass("expanded");
            $seeMore3.hide();
            $seeLess3.show();
        });

        // Voir moins presentation
        $seeLess3.on('click', function (e) {
            e.preventDefault();
            $textoffer.css('height', 'auto').removeClass("expanded");
            $seeMore3.show();
            $seeLess3.hide();
        });
    };

    // Btn back mobile
    var $win = $(window);
    $(document).ready(function () {
        $win.scroll(function () {
            if ($(this).scrollTop() >= 100) {
                $('#scroll-to-top2').fadeIn(200);
            }
            else {
                $('#scroll-to-top2').fadeOut(200);
            }
        });
        $('#scroll-to-top2').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
        });
    });

    // Laisser en active le lien de la page sur lequel on a cliqué.
    // URL page
    var currentUrl = window.location.href;

    // Liens de la navigation
    var navLinks = document.querySelectorAll('.navbar li a');

    // Voir lien actif
    var activeLinkFound = false;

    // Parcourir chaque lien
    navLinks.forEach(function (link) {
        if (link.href === currentUrl) {
            link.classList.add('active');
            link.closest('li').classList.add('active');
            activeLinkFound = true;

            var parentDropdown = link.closest('.dropdown');
            if (parentDropdown) {
                parentDropdown.querySelector('a').classList.add('active');
                parentDropdown.classList.add('active');
            }
        }
    });

    // Vérifiez les sous-liens aussi
    if (!activeLinkFound) {
        navLinks.forEach(function (link) {
            if (currentUrl.startsWith(link.href)) {
                link.classList.add('active');
                link.closest('li').classList.add('active');
                var parentDropdown = link.closest('.dropdown');
                if (parentDropdown) {
                    parentDropdown.querySelector('a').classList.add('active');
                    parentDropdown.classList.add('active');
                }
            }
        });
    }

    // Sélectionner tous les éléments <li> ayant une classe 'menu-header-li'
    var menuItems = document.querySelectorAll('.menu-header-li');

    // Ajouter un écouteur d'événements pour chaque <li>
    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Trouver l'élément <a> dans le <li> et le rediriger
            var link = this.querySelector('a');
            if (link) {
                window.location.href = link.href;
            }
        });
    });

    // Pour chaque icône météo, ajoute la classe correspondante et applique l'image de fond
    $('.weather-icon').each(function () {
        var weatherIcon = $(this).attr('data');
        var baseUrl = $(this).closest('.meteo').data('url');
        var iconPath = baseUrl + weatherIcon + '.jpeg';

        // Ajoute une classe basée sur l'icône météo
        $(this).closest('.meteo').addClass('weather-' + weatherIcon);

        // Applique l'image de fond à l'élément '.meteo'
        $(this).closest('.meteo').css({
            'background-image': 'url(' + iconPath + ')',
            'background-size': 'cover'
        });
    });

    // Clics sur les liens des prix chèques cadeaux
    $('.all-prices-vouchers a').on('click', function (event) {
        event.preventDefault();

        var targetId = $(this).attr('id');

        // Trouver l'élément correspondant dans le slider
        var targetElement = $(targetId);
        if (targetElement.length) {
            var index = $('.vouchers-slider').find('.owl-item').filter(function () {
                return $(this).find(targetId).length > 0;
            }).index();

            // Si un index valide est trouvé, déplacer le slider
            if (index !== -1) {
                $('.vouchers-slider').trigger('to.owl.carousel', [index, 600]);
            } else {
                console.error("Impossible de trouver l'index dans Owl Carousel pour :", targetId);
            }
        } else {
            console.error("Cible non trouvée pour :", targetId);
        }
    });

    // Détecter le changement dans Owl Carousel pour le .active
    $('.vouchers-slider').on('changed.owl.carousel', function (event) {
        var currentIndex = event.item.index;

        // Sélectionner l'élément actif dans le slider
        var activeSlide = $(event.target).find('.owl-item').eq(currentIndex).find('.offer-special-contain');

        if (activeSlide.length) {
            var activeId = activeSlide.attr('id');
            console.log("Élément actif dans le slider :", activeId);

            $('.all-prices-vouchers a').removeClass('active');

            $('.all-prices-vouchers a[href="#' + activeId + '"]').addClass('active');

        }
    });
});

$(document).ready(function () {
    $('.slider-meteo').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: false,
        items: 1,
        navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            480: {
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            768: {
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,

            },
            1400: {
                touchDrag: false,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
        }
    });
    $('.home-slider_img').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        items: 1,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            480: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            768: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,

            },
            1400: {
                touchDrag: false,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
        }
    });
    $('.offers-slider').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
        animateOut: 'slideOutDown',
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            480: {
                items: 2,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            768: {
                items: 2,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,

            },
            1400: {
                items: 4,
                touchDrag: false,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
        }
    });
    $('.options-slider').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
        animateOut: 'slideOutDown',
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            480: {
                items: 2,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            768: {
                items: 3,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,

            },
            1400: {
                items: 5,
                touchDrag: false,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
        }
    });
    $('.news-slider').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
        animateOut: 'slideOutDown',
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            480: {
                items: 2,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            768: {
                items: 3,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,

            },
            1400: {
                items: 5,
                touchDrag: false,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
        }
    });
    $('.slider-page-news').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        items: 1,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        animateOut: 'slideOutDown',
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            480: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            768: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            1400: {
                touchDrag: false,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
        }
    });
    $('.slider-news').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        items: 1,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        animateOut: 'slideOutDown',
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            480: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            768: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            1400: {
                touchDrag: false,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
        }
    });
    $('.detail-slider_img').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        items: 1,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        animateOut: 'slideOutDown',
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            480: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
            768: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: true,

            },
            1400: {
                touchDrag: false,
                mouseDrag: true,
                dots: false,
                nav: true,
            },
        }
    });
    $('.others-offers-slider').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
        animateOut: 'slideOutDown',
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            480: {
                items: 2,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
            768: {
                items: 2,
                touchDrag: true,
                mouseDrag: true,
                dots: true,
                nav: false,

            },
            1400: {
                items: 4,
                touchDrag: false,
                mouseDrag: true,
                dots: true,
                nav: false,
            },
        }
    });
    $('.vouchers-slider').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: false,
        navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
        margin: 20,
        items: 1,
        autoHeight: true,
        responsiveClass: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: false,
            },
            480: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: false,
            },
            768: {
                touchDrag: true,
                mouseDrag: true,
                dots: false,
                nav: false,

            },
            1400: {
                touchDrag: false,
                mouseDrag: true,
                dots: false,
                nav: false,
            },
        }
    });
});