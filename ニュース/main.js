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

  