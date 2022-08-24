/*=================================================
  ハンバーガーメニュー
===================================================*/
$(function () {
    $('.toggle_btn').on('click', function() {
    
        if ($('#header').hasClass('open')) {
            
          $('#header').removeClass('open');
            
        } else {
            
            $('#header').addClass('open');
        }
    });
              
    $('#mask').on('click', function() {
        $('#header').removeClass('open');
    });
    /*=================================================
        スクロール時のイベント
    ===================================================*/
    $(window).scroll(function() {
        // スクロール位置を取得
        let scroll = $(window).scrollTop();
        // let scroll = $(".main_image").text($(this).scrollTop());
        // console.log(scroll);
        $('.main_image').css({
          backgroundSize: (100 + scroll/3)  + "%",
          top: -(scroll/10)  + "%"
        });
    });
});