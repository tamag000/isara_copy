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
    $('html, body').stop().animate({
      'scrollTop': 0
    }, 500)
    return (false);
  });

  // フォームにスクロールするボタンの処理
  $('.form-btn').click(function() {
    var form = $('#form');
    var headerHeight = $('#header').height();
    var position = form.offset().top - headerHeight + 30;

    $('html, body').stop().animate({
      'scrollTop': position
    }, 500)
  });

  // アコーディオンの開閉処理
  $('.faq-list-item').stop().click(function() {
    var $answer = $(this).find('.answer');

    if ($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.stop().slideUp();
      $(this).find('span').html('<i class="fas fa-chevron-down"></i>');
    } else {
      $answer.addClass('open');
      $answer.stop().slideDown();
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
        $txt.stop().slideUp();
        $(this).find('span').html('<i class="fas fa-chevron-down"></i>');
      } else {
        $('.open').removeClass('open').slideUp().prev().find('span').html('<i class="fas fa-chevron-down"></i>');
        $txt.addClass('open');
        $txt.stop().slideDown();
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

  // 受講の流れのテキストのレスポンシブ対応
  $(window).resize(function() {
    var width = $(window).width();
    var spWidth = 780;
    var $txt = $('#flow-txt-change');

    if (width <= spWidth) {
      $txt.text('iSaraでは受講費以上を稼げることを保障しています。従って、事前コンサル時点で簡単なテストを実施し、場合によってはお断りをしております。（テストの内容はPCの基礎知識に関するテストですので、普段からパソコンを利用する方でしたら問題ありません。テストはもちろん無料ですので、まずはお問い合わせください。）');
    } else {
      $txt.text('iSaraでは受講料を稼げることを保障しています。従って、事前コンサル時点で簡単なテストを実施し、場合によってはお断りをしております。（テストの内容はPCの基礎知識に関するテストですので、普段からパソコンを利用する方でしたら問題ありません。テストはもちろん無料ですので、まずはお問い合わせください。）');
    }
  });
});
