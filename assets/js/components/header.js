(() => {

    const elements = [{
        logo: document.querySelector('[data-logo]'),
        header: document.getElementById('header-scroll'), 
        section: document.querySelectorAll("section"),
        menu: document.querySelectorAll(".urb_nav-list > li > a"), 
    }];

    elements.forEach((element) => {

        /* HEADER COLOR */
        document.addEventListener('scroll', () => {
            const scrollPos = window.pageYOffset;
            // Posición del Scroll
            if (scrollPos === 0) {
                element.header.style.backgroundColor = "transparent";
            } else {
                element.header.style.backgroundColor = "#006082";
            }
        });
        function resetHeaderColor() {
            const scrollPos = window.pageYOffset;
            if (scrollPos === 0) {
                element.header.style.backgroundColor = "transparent";
            } else {
                element.header.style.backgroundColor = "#006082";
            }

        } resetHeaderColor(); 

        /* MENU ACTIVE SCROLL*/
        element.menu.forEach((link, i) => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); 
                element.menu.forEach((navLink) => {
                    navLink.setAttribute('class', '');
                }); 
                const targetId = link.getAttribute('href').substring(1); 
                const targetSection = document.getElementById(targetId);
                link.setAttribute('class', 'selected-' + (i + 1)); 
                
                $('html, body').animate({
                    scrollTop: targetSection.offsetTop + (-20),
                }, 500);

                const x = window.matchMedia("(max-width: 768px)");
                if (x.matches) {
                    element.content_menu.style.display = "none";
                    $('html, body').animate({
                        scrollTop: targetSection.offsetTop + (-52),
                    }, 500);
                } 
            });
        });

        /* MENU ACTIVE SCROLL */
        window.onscroll = () => {
            element.section.forEach((item, i) => {
    
                let top = window.scrollY;
                let offset = item.offsetTop - 150;
                let height = item.offsetHeight;
                let id = item.getAttribute("id");
    
                if (top >= offset && top < offset + height) {
                    element.menu.forEach((link) => {
                        const item = document.querySelector(".urb_nav-listItem a[href*=" + id + "]"); 
                        link.setAttribute('class', ''); 
                        if (item != null) {
                            item.classList.add('nav_active'); 
                        }
                    });
    
                }
            });
        }; 

    })

})();