var fixedDivs = document.querySelectorAll('preventScrollBubbling');

fixedDivs.forEach(e => e.addEventListener('touchmove', function (e) {

  e.preventDefault();

}, false))