// load
$(function () {
    function end_loader() {
      $('.loading').fadeOut(800);
    }
    $(window).on('load', function () {
      setTimeout(function () {
        end_loader();
      }, 3000)
    })
  })