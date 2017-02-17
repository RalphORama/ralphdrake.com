/* global $ */
(function () {
  var today = new Date()
  var footer = document.getElementsByTagName('footer')[0]

  function addScrollListener (elem, target, delay = 1) {
    $(elem).click(function () {
      $('html, body').animate({scrollTop: $(target).offset().top}, delay * 1000)
      return false
    })
  }

  function addJumbotronPanel (num, title, description, notes) {
    var jt = document.getElementById('jumbotron')
    var offset = num * window.screen.width
    var notesText = ''

    for (var i = 0; i < notes.length; ++i) {
      notesText += `<li>${notes[i]}</li>`
    }

    var newPanel = `
    <div class="jt-panel" style="margin-left: ${offset}px;">
      <h1>${title}</h1>
      <p>${description}</p>
      <ul>${notesText}</ul>
    </div>`

    jt.innerHTML += newPanel
  }

  addScrollListener('a[href="#info"]', '#info')
  addScrollListener('a[href="#intro"]', '#intro')
  addScrollListener('a[href="#projects"]', '#projects')
  footer.innerHTML = '<span>&copy; ' + today.getFullYear() + ' Ralph Drake</span>'

  $.getJSON('/projects.json', function (jdata) {
    var count = 0
    $.each(jdata, function (_, key) {
      addJumbotronPanel(count++, key['name'], key['accomplishments'], key['notes'])
    })
  })
})()
