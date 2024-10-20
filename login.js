const rememberMeCheckbox = document.getElementById('remember-me');
const loaderPage = document.getElementById('loader-page');

rememberMeCheckbox.addEventListener('change', function() {
  if (this.checked) {
    this.style.backgroundColor = '#000000';
  } else {
    this.style.backgroundColor = '#ffffff';
  }
});

// Show loader page first, then load login form with smooth transition
window.addEventListener('load', function() {
  setTimeout(function() {
    loaderPage.style.opacity = '0';
    setTimeout(function() {
      loaderPage.style.display = 'none';
    }, 500);
  }, 2000); // Show loader for 2 seconds
});