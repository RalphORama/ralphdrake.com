(function() {
  var today = new Date()
  var footer = document.getElementsByTagName('footer')[0]

  footer.innerHTML = '&copy; ' + today.getFullYear() + ' Ralph Drake'

  $('a[href="#info"]').click(function() {
    $('html, body').animate({scrollTop: $('#info').offset().top}, 1 * 1000)
    return false;
  })
})()
