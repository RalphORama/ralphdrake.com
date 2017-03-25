/* global $ showdown */
(function () {
  var today = new Date()

  var converterOptions = {
    'noHeaderId': true,
    'simplifiedAutoLink': true,
    'tasklists': true
  }
  var converter = new showdown.Converter(converterOptions)

  var footer = document.getElementsByTagName('footer')[0]

  var aboutFile = '/markdown/about.md'
  var projectsFile = '/markdown/projects.md'

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
    $.get(projectsFile, function (data) {
      $('#projects').html(converter.makeHtml(data))
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
})()
