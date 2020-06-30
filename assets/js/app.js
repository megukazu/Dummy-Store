$(function () {

  /*
    Drawer Menu
  ------------------------------------------------*/

  $('.js-button__hamburger').click(function () {

    // エリア属性 true/false
    // ドロワー中 overlay
    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true);
      $('body').append('<div class="overlay"></div>');
      $('.overlay').fadeIn(300);
    } else {
      $(this).attr('aria-expanded', false);
      $('.overlay').fadeOut(300, function () {
        $('.overlay').remove();
      });
    };

    // メニュー開閉
    $('.l-global-nav').slideToggle(300);
    $('body').toggleClass('is-active-drawer');
  });

  // overlay非表示イベント
  $('body').on('click', '.overlay', function () {
    $('body').removeClass('is-active-drawer');
    $('.l-global-nav').slideUp(300);
    $('.js-button__hamburger').attr('aria-expanded', false);
    $(this).fadeOut(300, function () {
      $(this).remove();
    });
  });
});
