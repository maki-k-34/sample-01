// ----- ページ読込時の動き -----

// ----- ページを読み込んだらメイン画像を左から右へ表示
$(window).on('load', function () {
  $('.cover__img').addClass('is-show');
});


// ----- ページを読み込んだら.cover__titleと.cover__listを下方向からフェードイン
$(window).on('load', function () {
  $('.fadeinup__load').addClass('animate__fadeInUp');
});


// ----- ページを読み込んだら.inview__loadを表示(回転する三角形)
window.addEventListener('load', function () {
  var elements = document.querySelectorAll('.inview__load'); //全ての.inview要素
  elements.forEach(function (element, index) {
    setTimeout(function () {
      element.classList.add('inview');
      setTimeout(function () {
        element.classList.add('rotate');
      }, 0); // フェードインの2秒後に回転開始
    }, index * 200); // 各要素のフェードイン開始を1000ms（1秒）遅らせる
  });
});


// ----- ページスクロールに付随した動き -----

// ----- スクロールに付随したフェードイン
//fadeinup
$('.fadeinup__scroll').waypoint({
  handler: function (direction) {

    if (direction === 'down') {

      $(this.element).addClass('animate__fadeInUp');
    }
  },
  // 要素が画面上部に来たらhandlerを実行
  offset: '90%',
});


// ----- スクロールに付随して三角形を表示させ回転させる
$('.inview__scroll').each(function (index) {
  $(this).waypoint({
    handler: function (direction) {
      if (direction === 'down') {
        var element = $(this.element);
        setTimeout(function () {
          element.addClass('inview');
          setTimeout(function () {
            element.addClass('rotate');
          }, 0); // フェードインの0秒後に回転開始
        }, index * 100); // 各要素のフェードイン開始を100msずつ遅らせる
      }
    },
    offset: '100%'
  });
});


// ----- ハンバーガーメニュー -----
var menu = $('.hamburger-menu');
var button = $('.hamburger-button')
var bg = $('.hamburger-menu__bg');


// ----- ハンバーガーボタンと×ボタンの切り替え
button.on('click', function () {
  $(this).toggleClass('active');
});


// ----- ハンバーガーメニューの開閉

// OPEN/CLOSEボタンをクリックしたら、
button.on('click', function () {

  //*.hamburger-menuの表示/非表示を繰り返す
  menu.toggleClass('active');
  //*背景を暗く/明るくを繰り返す
  bg.toggleClass('active');
  // 背面のスクロール禁止/解除を繰り返す
  $('html').toggleClass('active');
});


// 画面幅のサイズが変わったら、
$(window).on('resize', function () {

  //*ハンバーガーメニューを閉じる
  menu.removeClass('active');
  //xボタンを解除
  button.removeClass('active');
  // 背面のスクロール禁止を解除
  $('html').removeClass('active');

});


// ハンバーガーメニューの外をクリックしたら、
bg.on('click', function () {

  //*ハンバーガーメニューを閉じる
  menu.removeClass('active');
  //*ハンバーガーボタンを×から3本線へ戻す
  button.removeClass('active');
  //*背景暗い→明るく戻す
  bg.removeClass('active');
  // 背面のスクロール禁止を解除
  $('html').removeClass('active');
});
//↑$()にはつけ外しするクラスではなく元からついているクラスを指定する


// ----- リンククリック時の動き

// リンクをクリックしたら、ハンバーガーメニューを閉じる
$('a[href^="#"]').on('click', function () {
  //*ハンバーガーメニューを閉じる
  menu.removeClass('active');
  //*ハンバーガーボタンを×から3本線へ戻す
  button.removeClass('active');
  //*背景暗い→明るく戻す
  bg.removeClass('active');
  // 背面のスクロール禁止を解除
  $('html').removeClass('active');
});

// リンクをクリックしたら、リンク先へスクロールダウン(orアップ)
// ページ内のスムーススクロール
  $('a[href*="#"]').click(function (e) {
    const target = jQuery(this.hash === "" ? "html" : this.hash);
    if (target.length) {
      e.preventDefault();
      const headerHeight = jQuery("header").outerHeight();
      const position = target.offset().top - headerHeight; //ヘッダーとコンテンツが被らないようにする
      $("html, body").animate({ scrollTop: position }, 400, "swing");

      if (!target.is("html")) {
        // URLにハッシュを含める
        history.pushState(null, '', this.hash);
      }
    }
  });