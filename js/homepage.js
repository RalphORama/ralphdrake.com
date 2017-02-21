/* global $ */
(function () {
  var today = new Date()
  var footer = document.getElementsByTagName('footer')[0]

  function addNavListener (elem, target, delay = 1) {
    $(elem).click(function () {
      $('html, body').animate({scrollTop: $(target).offset().top}, delay * 1000)
      return false
    })
  }

  function addProject (title, description, notes) {
    var projectsSeciton = document.getElementById('projects')
    var notesText = ''

    for (var i = 0; i < notes.length; ++i) {
      notesText += `<li>${notes[i]}</li>`
    }

    var newPanel = `
    <div class="project">
      <h1>${title}</h1>
      <p>${description}</p>
      <ul>${notesText}</ul>
      <hr>
    </div>`

    projectsSeciton.innerHTML += newPanel
  }

  // Cre
  addNavListener('a[href="#info"]', '#info')
  addNavListener('a[href="#intro"]', '#intro')
  addNavListener('a[href="#projects"]', '#projects')

  footer.innerHTML = '<span>&copy; ' + today.getFullYear() + ' Ralph Drake</span>'

  $.getJSON('/projects.json', function (jdata) {
    $.each(jdata, function (key, value) {
      addProject(key, value['accomplishments'], value['notes'])
    })
  })
})()
