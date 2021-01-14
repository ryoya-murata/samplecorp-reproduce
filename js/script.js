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
// results
// ===========


var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1.3,
  spaceBetween: 20,
  initialSlide: 0,
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
  },
  breakpoints:{
    768:{
      slidesPerView: 1.8,
      },
      1050:{
          slidesPerView: 2.8,
          spaceBetween: 40,
      }
  }
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


// ==========
// contact
// ==========

$(document).ready(function () {

    $('#form').submit(function (event) {
      var formData = $('#form').serialize();
      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdMam3QgiVYJpvFjsOwep-l7Ns0vskS7oZnr-Ti0KCZQ2dnTQ/formResponse",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            $(".form__end-message").slideDown();
            $(".form__body").fadeOut();
          },
          200: function () {
            $(".form__false-message").slideDown();
          }
        }
      });
      event.preventDefault();
    });

  });

// =======================
//  totop
// =======================

  $(function(){
    // windowsがスクロールされたときに以下の内容を実行
    $(window).scroll(function(){    
        // windowの現在のスクロール位置を取得
        var scrollTop = $(window).scrollTop();
        // 対象エリアの高さを取得
        var areaHeight = $('.top').innerHeight();
        
        // 現在のスクロール位置が対象エリアより大きければ以下の内容を実行
        if(scrollTop > areaHeight){
            $(".totop-button-wrapper").fadeIn();
        } else {
            $(".totop-button-wrapper").fadeOut();
        }
    })
})
