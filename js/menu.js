$(function() {
    $('#nav-icon2').click(function(){
        $(this).toggleClass('open');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');
  
    menuToggle.addEventListener('click', function() {
      menuItems.classList.toggle('active');
    });
  });
  