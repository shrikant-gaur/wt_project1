const termsCheckbox = document.getElementById('terms');
const signupForm = document.getElementById('signup-form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

// Add event listener for form submission
signupForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Check if passwords match
  if (passwordInput.value === confirmPasswordInput.value) {
    // Redirect to index.html only if passwords match
    window.location.href = 'index.html';
  } else {
    // Display an error message or handle mismatched passwords
    alert('Passwords do not match. Please try again.');
  }
});
function validateForm() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const usernameError = document.getElementById('usernameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  let isValid = true;
  // Username validation
  if (!/^[a-zA-Z]+$/.test(username)) {
    usernameError.textContent = 'Username must contain only alphabetic characters.';
    isValid = false;
  } else {
    usernameError.textContent = '';
  }
  // Email validation
  if (!/^[^\s@]+@(gmail|email|yahoo)+\.(in|com)$/.test(email)) {
    emailError.textContent = 'Please enter a valid email address ';
    isValid = false;
  } else {
    emailError.textContent = '';
  }
  // Password validation
  if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,8}$/.test(password)) {
    passwordError.textContent = 'Password must be 6-8 characters long, include 1 uppercase letter, 1 number, and 1 special character.';
    isValid = false;
  } else {
    passwordError.textContent = '';
  }
  // Password match validation
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    isValid = false;
  }
  if (!isValid) {
    return false; // Prevent form submission
    window.location.href = "index.html";
  }
  // Redirect to verify.html if all validations pass
  return false; // Prevent default form submission
}
// Real-time validation for username
document.getElementById('username').addEventListener('input', function () {
  const usernameError = document.getElementById('usernameError');
  if (!/^[a-zA-Z]*$/.test(this.value)) {
    usernameError.textContent = 'Username must contain only alphabetic characters.';
  } else {
    usernameError.textContent = '';
  }
});
// Real-time validation for email
document.getElementById('email').addEventListener('input', function () {
  const emailError = document.getElementById('emailError');
  if (!/^[^\s@]+@(gmail|email|yahoo)+\.(in|com)$/.test(this.value)) {
    emailError.textContent = 'Please enter a valid email address ';
  } else {
    emailError.textContent = '';
  }
});
// Real-time validation for password
document.getElementById('password').addEventListener('input', function () {
  const passwordError = document.getElementById('passwordError');
  if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,8}$/.test(this.value)) {
    passwordError.textContent = 'Password must be 6-8 characters long, include 1 uppercase letter, 1 number, and 1 special character.';
  } else {
    passwordError.textContent = '';
  }
});