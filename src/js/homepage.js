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

  footer.innerHTML = '<span>&copy; ' + today.getFullYear() + ' Ralph Drake</span>'

  // Scroll down on click :O
  $('a[href="#info"]').click(function () {
    var target = $('#info')
    if (target.length) {
      var top = target.offset().top
      $('html, body').animate({scrollTop: top})
    }
    return false
  })

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
