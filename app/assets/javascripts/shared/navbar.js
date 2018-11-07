$(document).on('ready turbolinks:load', function() {
  elem = document.querySelector('#slide-out');
  instance = new M.Sidenav(elem, {});
});

$(document).on('ready turbolinks:before-visit', function() {
  elem = document.querySelector('#slide-out');
  instance = M.Sidenav.getInstance(elem);
  instance.destroy();
})