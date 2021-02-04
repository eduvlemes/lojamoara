// Add your custom JavaScript for storefront pages here.
$(document).ready(function(){
    let w = $('.product-card__pictures').first().innerWidth();
    let h = 1.4;
    $('.product-card__pictures').css('height', (h*w) + 'px');
});
