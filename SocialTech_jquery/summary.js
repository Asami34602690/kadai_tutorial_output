$(function () {
    // change-colortがクリックされたら
    $('#change-color').on('click', function () {
        //文字色が任意の色に更新されている
        $('#target').css('color','red');
      });
    });

$(function () {
     // change-textがクリックされたら
    $('#change-text').on('click', function () {
        //任意の文字内容に更新される
        $('#target').text("Hello!");
      });
    });

$(function () {
     // ade-outがクリックされたら
    $('#fade-out').on('click', function() {
        // フェードアウトで文字が消える
        $('#target').fadeOut();
        });
    });

$(function () {
     //fade-inがクリックされたら
     $('#fade-in').on('click', function() {
      //フェードインで文字が現れる
      $('#target').fadeIn();
  });
  });