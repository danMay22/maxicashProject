
$(function(){
  'use strict'

  $('#calendarSidebarShow').on('click', function(e){
    e.preventDefault()
    $('body').toggleClass('calendar-sidebar-show');

    $(this).addClass('d-none');
    $('#mainMenuOpen').removeClass('d-none');
  })

  $(document).on('click touchstart', function(e){
    e.stopPropagation();

    // closing of sidebar menu when clicking outside of it
    if(!$(e.target).closest('.burger-menu').length) {
      var sb = $(e.target).closest('.calendar-sidebar').length;
      if(!sb) {
        $('body').removeClass('calendar-sidebar-show');

        $('#mainMenuOpen').addClass('d-none');
        $('#calendarSidebarShow').removeClass('d-none');
      }
    }
  });

  window.darkMode = function(){
    $('.btn-white').addClass('btn-dark').removeClass('btn-white');
  }

  window.lightMode = function() {
    $('.btn-dark').addClass('btn-white').removeClass('btn-dark');
  }

  var hasMode = Cookies.get('df-mode');
  if(hasMode === 'dark') {
    darkMode();
  } else {
    lightMode();
  }

})
