/* global $ */
(function () {
  var today = new Date()
  var footer = document.getElementsByTagName('footer')[0]

  footer.innerHTML = '<span>&copy; ' + today.getFullYear() + ' Ralph Drake</span>'

  addScrollListener('a[href="#info"]', '#info')
  addScrollListener('a[href="#intro"]', '#intro')
  addScrollListener('a[href="#projects"]', '#projects')

  function addScrollListener (elem, target, delay = 1) {
    $(elem).click(function () {
      $('html, body').animate({scrollTop: $(target).offset().top}, delay * 1000)
      return false
    })
    console.log('Created listener for ' + elem + ' to ' + target + ' with delay of ' +
        delay + '.')
  }
})()
