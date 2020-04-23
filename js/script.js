$(function() {
  // トップに戻るボタンの処理
  var backBtn = $('#back-btn');
  backBtn.hide();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      backBtn.fadeIn();
    } else {
      backBtn.fadeOut();
    }
  })
  backBtn.click(function() {
    $('html, body').animate({
      'scrollTop': 0
    }, 500)
    return (false);
  });

  // フォームにスクロールするボタンの処理
  $('.form-btn').click(function() {
    var form = $('#form');
    var headerHeight = $('#header').height();
    var position = form.offset().top - headerHeight + 30;

    $('html, body').animate({
      'scrollTop': position
    }, 500)
  });

  // アコーディオンの開閉処理
  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');

    if ($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').html('<i class="fas fa-chevron-down"></i>');
    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('span').html('<i class="fas fa-chevron-up"></i>');
    }
  });

  $('.flow').click(function() {
    var $txt = $(this).find('.flow-txt');
    var width = $(window).width();
    var spWidth = 780;

    if (width <= spWidth) {
      if ($txt.hasClass('open')) {
        $txt.removeClass('open');
        $txt.slideUp();
        $(this).find('span').html('<i class="fas fa-chevron-down"></i>');
      } else {
        $('.open').removeClass('open').slideUp().prev().find('span').html('<i class="fas fa-chevron-down"></i>');
        $txt.addClass('open');
        $txt.slideDown();
        $(this).find('span').html('<i class="fas fa-chevron-up"></i>');
      }
    }
  });

  $(window).resize(function() {
    var width = $(window).width();
    var spWidth = 780;

    if (width >= spWidth) {
      $('.flow-txt').show();
    }
  })
});
