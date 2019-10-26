/**
 * back to top
 */
var backToTop = function() {
  const $backToTop = $('#back-to-top');

  $(window)
    .scroll(function() {
      if ($(window)
        .scrollTop() > 100) {
        $backToTop.fadeIn(1000);
      } else {
        $backToTop.fadeOut(1000);
      }
    })

  $backToTop.click(function() {
    $('body,html')
      .animate({
        scrollTop: 0
      });
  })
}
/**
 * Table of Content fix
 */
function initToc() {
  const $toc = $('#post-toc');
  const $content = $('#content');
  if ($toc.length && $(window)
    .width() >= (1080 + 300)) {
    $(window)
      .scroll(function() {
        if ($(window)
          .scrollTop() > 100) {
          $content.css('margin', '0');
          $toc.fadeIn(1000);
        } else {
          $toc.fadeOut(100);
          $content.css('margin', '0 auto');
        }
      });
  } else {
    $toc.fadeOut(0)
  }
  console.log('window', $(window)
    .width())
}

var toc = function() {
  const tocContainer = document.getElementById('post-toc');
  if (tocContainer !== null) {
    const toc = document.getElementById('TableOfContents');
    if (toc === null) {
      // if global config 'toc = true', but there are no headings
      tocContainer.parentNode.removeChild(tocContainer);
    } else {
      initToc();
    }
  }
}

/* main */
$(document).ready(function () {
  backToTop();
  toc();
});