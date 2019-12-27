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

            // TODO: Switch theme
        }

    });
});
