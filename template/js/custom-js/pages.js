// Add your custom JavaScript for storefront pages here.
setTimeout(function(){ajustaImagens();}, 1000);

function ajustaImagens(){
    let w = $('.product-card__pictures').first().innerWidth();
    let h = 1.4;
    $('.product-card__pictures').each(function(){
        $(this).css('height', (h*w) + 'px');   
        $(this).find('img').css('height', (h*w) + 'px');   
    }) 
};
$(document).ready(function(){    
    
    $('.apx-product_home_list').addClass('normal');
    if($('#page-home .sections>.banner-slider:nth-child(2)').length > 0){   
        $('#page-home .sections>.banner-slider:nth-child(2)').addClass('sliderLateral');
        const list = '.sections>.collection-shelf:nth-child(3) .apx-product_home_list';
        $(list).addClass('withBanner');
        $(list).removeClass('normal');
        $('<li id="bannerLateral"></li>').prependTo(list);
        $('.sliderLateral').appendTo('#bannerLateral');      
        
        window.dispatchEvent(new Event('resize'));        
        ajustaImagens();
    }

    $('.custom-html .divider').closest('section').addClass('break-page');

    // if($('#instafeed').length){
    //     $('#instafeed').closest('.custom-html').addClass('instafeed-container');
    //     var obj = new InstagramFeed({
    //         'username': 'ecomclub',
    //         'container': document.getElementById("instafeed"),
    //         'display_profile': false,
    //         'display_biography': false,
    //         'display_gallery': true,
    //         'display_captions': false,
    //         'display_igtv': false,
    //         'get_raw_json': false,
    //         'lazy_load':false,
    //         'callback': null,
    //         'styling': false,
    //         'items': 4,
    //         'items_per_row': 4,
    //         'margin': 1
    //     });
    // }
    
});
