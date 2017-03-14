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

  initFooter(initAbout)

  function initFooter (callback) {
    console.log('initFooter()...')
    footer.innerHTML = '<span>' +
      '&copy; ' + today.getFullYear() + ' Ralph Drake' + ' | ' +
      '<a href="https://github.com/RalphORama/ralphdrake.com">GitHub</a>' +
      '</span>'

    callback(initProjects)
  }

  function initAbout (callback) {
    console.log('initAbout()...')
    // Populate the about section with our markdown file
    $.get(aboutFile, function (data) {
      $('.description').html(converter.makeHtml(data))
    })

    callback(initAnchors)
  }

  function initProjects (callback) {
    console.log('initProjects()...')
    // Automatically populate the 'projects' section
    $.getJSON(projectsFile, function (jdata) {
      $.each(jdata, function (key, value) {
        addProject(key, value['accomplishments'], value['notes'])
      })
    })

    callback()
  }

  function initAnchors () {
    console.log('initAnchors()...')

    createScroll('a[href="#info"]', '#info', 1000)

    // Something weird happens when filling the markdown, so this has to have
    // a delay (otherwise it fails). Not sure what's up, not even a callback
    // could fix this.
    window.setTimeout(function () {
      createScroll('a[href="#projects"]', '#projects', 1000)
    }, 250)
  }

  function createScroll (elem, target, duration) {
    $(elem).click(function () {
      var t = $(target)
      if (t.length) {
        var top = t.offset().top
        $('html, body').animate({scrollTop: top}, duration)
        return false
      }
    })
  }

  function addProject (title, description, notes) {
    var notesText = ''

    for (var i = 0; i < notes.length; ++i) {
      notesText += '<li>' + notes[i] + '</li>'
    }

    $('#projects').append('<div class="project">' +
      '<h1><a href="https://' + title + '">' + title + '</a></h1>' +
      '<p>' + description + '</p>' +
      '<ul>' + notesText + '</ul>' +
    '</div>')
  }
})()
