
// ナビゲーション
$(function () {
  $('#target').click(() => {
    $('#target').toggleClass('active');
    $('#nav_target').toggleClass('nav_active');
  });
  // ナビ内リンクでジャンプ時、メニューを閉じる

  $('.remove').click(() => {
    $('#target').removeClass('active');
    $('#nav_target').removeClass('nav_active');
  });
});





const FixedAnimation = () => {
  let headerHeight
}

// イベントスライダー
$(function () {
  $('#js-slider-3').slick({
    arrows: true, // 前・次のボタンを表示する
    dots: true, // ドットナビゲーションを表示する
    appendDots: $('.dots-3'), // ドットナビゲーションの生成位置を変更
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1, // 表示させるスライド数
    slidesToScroll: 1,
    centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
    variableWidth: true, // スライド幅の自動計算を無効化
    pauseOnHover: false, // マウスを乗せた際も動作を続ける
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 375,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });
});

// イベントカレンダー

$(function () {
  $('.m-ivent-calendar').on('click', () => {
    $('.m-ivent-span').toggleClass('m-span-active');
  });
});
// イベントカレンダーボタン

$(window).resize(function () {
  let x = $(window).width();
  let y = 600;
  // console.log(x)

  if (x <= y) {
    $('.m-ivent-btn').addClass('m-ivent-btn-active');
  } else {
    $('.m-ivent-btn').removeClass('m-ivent-btn-active');
  };
});

$(window).on('load', function () {
  let x = $(window).width();
  let y = 600;
  if (x <= y) {
    $('.m-ivent-btn').addClass('m-ivent-btn-active');
  } else {
    $('.m-ivent-btn').removeClass('m-ivent-btn-active');
  };
});
// 戻るボタン

const FadeinAnimation = () => {
  let headerHeight = $('#TOP').outerHeight(); // id="TOP"の高さを取得
  let scroll = $(window).scrollTop();// スクロール値
  if (scroll >= headerHeight) {
    // スクロール値がヘッダーの高さより大きい時
    $('.openbtn_top').addClass('fadein');
  } else {
    $('.openbtn_top').removeClass('fadein')
    // $('.openbtn_top').addClass('fadeout')
  }
}
// タイミング１
// 画面をスクロールした時に動かす
$(window).scroll(() => {
  FadeinAnimation();
});

// タイミング２
// ページを読みこんだ時に動かす
$(window).on('load', () => {
  FadeinAnimation();
})

$(window)