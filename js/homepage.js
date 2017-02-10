(function() {
  var today = new Date()
  var footer = document.getElementsByTagName('footer')[0]

  footer.innerHTML = '<span>&copy; ' + today.getFullYear()
    + ' Ralph Drake</span>'

  $('a[href="#info"]').click(function() {
    $('html, body').animate({scrollTop: $('#info').offset().top}, 1 * 1000)
    return false;
  })
})()
