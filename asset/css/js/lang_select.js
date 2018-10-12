(function(){
  "use strict";
  var element = document.getElementById('lang-select-wrap');
  function changeLang() {
    var lang = element.dataset.lang
    
    var path = window.location.pathname.split('/').pop() || ''
    if (lang !== 'zh-cn') path = lang + '/' + path
    location.href = '/' + path
  }
  element.addEventListener('click', changeLang)
})();