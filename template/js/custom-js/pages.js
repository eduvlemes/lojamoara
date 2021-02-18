// Add your custom JavaScript for storefront pages here.
setTimeout(function(){ajustaImagens();}, 2000);
window.onscroll = function (e) {  
    ajustaImagens();
} 
function ajustaImagens(){
    let w = $('#content .product-card__pictures').first().innerWidth();
    let h = 1.4;
    $('.product-card__pictures').each(function(){
        $(this).css('height', (h*w) + 'px');   
        $(this).find('picture').css('height', (h*w) + 'px');   
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
    if(apx_bannersPage && $('#page-categories').length == 1){       
        const list = '#content .search-engine__retail > .row';
        if(apx_bannersPage.image_s_d != undefined){            
            $(list).removeClass('normal');
            $(list).addClass('withBanner');
            $('<div id="bannerLateral"><div class="banner"><a href="'+ apx_bannersPage.url_s + '" > <picture class="img-fluid" data-iesrc="'+ apx_bannersPage.image_s_d.replace('.webp', '.png') + '" > <source srcset="'+ apx_bannersPage.image_s_d.replace('.webp', '.png') +'" media="(min-width: 576px)"> <source srcset="'+ apx_bannersPage.image_s_m.replace('.webp', '.png') +'" media="(min-width: 100px)"> <img src="'+ apx_bannersPage.image_s_d.replace('.webp', '.png') +'"> </picture> </a></div></div>').prependTo('.withBanner');        
        }else{
            $(list).addClass('listNotBanner');
        }
    }

    $('#mobile-search-btn').click(function(){
        $('#search-bar').removeClass('show');
    });

    $('.divider').closest('section').addClass('break-page');

    if($('#instafeed').length){
        $('#instafeed').closest('.custom-html').addClass('instafeed-container');
        var obj = new InstagramFeed({
            'username': 'moara.oficial',
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
