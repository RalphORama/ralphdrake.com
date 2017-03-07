/* global $ showdown */
(function () {
  var today = new Date()

  var converterOptions = {
    'noHeaderId': false,
    'simplifiedAutoLink': true,
    'tasklists': true
  }
  var converter = new showdown.Converter(converterOptions)

  var footer = document.getElementsByTagName('footer')[0]

  var aboutFile = '/about.md'
  var projectsFile = '/projects.json'

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
      <h1><a href="https://${title}">${title}</a></h1>
      <p>${description}</p>
      <ul>${notesText}</ul>
    </div>`

    projectsSeciton.innerHTML += newPanel
  }

  addNavListener('a[href="#info"]', '#info')
  addNavListener('a[href="#intro"]', '#intro')
  addNavListener('a[href="#projects"]', '#projects')

  footer.innerHTML = '<span>&copy; ' + today.getFullYear() + ' Ralph Drake</span>'

  // Populate the about section with our markdown file
  $.get(aboutFile, function (data) {
    $('.description').html(converter.makeHtml(data))
  })

  // Automatically populate the 'projects' section
  $.getJSON(projectsFile, function (jdata) {
    $.each(jdata, function (key, value) {
      addProject(key, value['accomplishments'], value['notes'])
    })
  })

  // Hide the navbar, then set up our navbar scroll logic
  $('nav').hide()

  $(window).scroll(function () {
    if ($(window).scrollTop() > $('#intro').outerHeight()) {
      $('nav').fadeIn()
    } else {
      $('nav').fadeOut()
    }
  })
})()
