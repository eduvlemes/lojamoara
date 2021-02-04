// Add your custom JavaScript for storefront pages here.

$(document).ready(function(){
    let w = $('.product-card__pictures').first().innerWidth();
    let h = 1.4;
    console.log((h*w) + 'px');
    $('.apx .product-card__pictures').css('height', (h*w) + 'px');
    $('.apx-product_home_list').addClass('normal');
    if(apx_bannersPage && $('.sections>.collection-shelf:nth-child(2) .apx-product_home_list').length > 0){        
        const list = '.sections>.collection-shelf:nth-child(2) .apx-product_home_list';
        $(list).removeClass('normal');
        $('<li><div class="banner"> <a href="'+ apx_bannersPage.url_s + '" > <picture class="img-fluid" data-iesrc="'+ apx_bannersPage.image_s_d.replace('.webp', '.png') + '" > <source srcset="'+ apx_bannersPage.image_s_d.replace('.webp', '.png') +'" media="(min-width: 576px)"> <source srcset="'+ apx_bannersPage.image_s_m.replace('.webp', '.png') +'" media="(min-width: 100px)"> <img src="'+ apx_bannersPage.image_s_d.replace('.webp', '.png') +'"> </picture> </a> </div></li>').prependTo(list);
        $(list).addClass('withBanner');
    }

    $('.custom-html .divider').closest('section').addClass('break-page');

    if($('#instafeed').length){
        $('#instafeed').closest('.custom-html').addClass('instafeed-container');
        var obj = new InstagramFeed({
            'username': 'moaraacessorios',
            'container': document.getElementById("instafeed"),
            'display_profile': false,
            'display_biography': false,
            'display_gallery': true,
            'display_captions': false,
            'display_igtv': false,
            'get_raw_json': false,
            'lazy_load':false,
            'callback': null,
            'styling': false,
            'items': 4,
            'items_per_row': 4,
            'margin': 1
        });
    }
});
