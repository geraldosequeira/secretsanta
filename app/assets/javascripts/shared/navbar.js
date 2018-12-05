$(document).on('ready', function() {
  elem = document.querySelector('#slide-out');
  instance = new M.Sidenav(elem, {});
  instance.sideNav();
});

$(document).on('ready', function() {
  elem = document.querySelector('#slide-out');
  instance = M.Sidenav.getInstance(elem);
  instance.destroy();
})