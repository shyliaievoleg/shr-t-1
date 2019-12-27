'use strict';

document.addEventListener("DOMContentLoaded", function() {

    document.body.addEventListener('click', function(e) {

        let accordion = e.target.closest('.e-accordion__short');
        let onoffswitch = e.target.closest('.onoffswitch');

        if (accordion) {
            let elem = accordion.parentElement.querySelector('.e-accordion__more');

            if (elem.style.display == 'flex') {
                elem.style.display = 'none';
            } else {
                elem.style.display = 'flex';
            }
        }

        if (onoffswitch) {
            onoffswitch.classList.toggle('onoffswitch_checked');

            let defaultTheme = document.querySelectorAll('.theme_color_project-default');
            let inverseTheme = document.querySelectorAll('.theme_color_project-inverse');

            for (let node of defaultTheme) {
                node.classList.add('theme_color_project-inverse');
                node.classList.remove('theme_color_project-default');
            }

            for (let node of inverseTheme) {
                node.classList.add('theme_color_project-default');
                node.classList.remove('theme_color_project-inverse');
            }
        }

    });
});
