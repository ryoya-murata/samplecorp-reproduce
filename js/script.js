// ===========
// header
// ===========

$(function(){
    $('a[href^="#"]').click(function(){　　  
        var speed = 500;　　　　                                                      
        var adjust = $('.header').innerHeight();                                       
        var href= $(this).attr("href");　　　                                        
        var target = $(href == "#" ? 'html' : href);                                 
        var position = target.offset().top;　                                       
        $("html, body").animate({scrollTop:position - adjust}, speed, "swing");    　
        return false;
      });

})

$(function () {
    // クリック時の動作
    $('.hamberger__line-wrapper').on('click', function() {

        // メニューを閉じる
        if($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('.hamberger-menu').removeClass('open');
            $('.overlay').removeClass('open');
            $('body').removeClass('fixed');


        // メニューを開く
        } else {
            $(this).addClass('open');
            $('.hamberger-menu').addClass('open');
            $('.overlay').addClass('open');
            $('body').addClass('fixed');
        }
    });
});


// ===========
// faqs
// ===========

$(function(){
    $(".faq-item__question-wrapper").on("click", function(){
        $(this).next().slideToggle();
        var faqIcon = $(this).find(".faq-item__icon");
        

        if(faqIcon.hasClass('selected')){
            faqIcon.removeClass('selected');
            faqIcon.attr('src', '../img/plus.svg');
        } else {
            faqIcon.addClass('selected');
            faqIcon.attr('src', '../img/minus.svg');
        }
    })
})