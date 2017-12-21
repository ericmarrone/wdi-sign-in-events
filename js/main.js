document.addEventListener('DOMContentLoaded', function() {
  var body = document.body;
  var signInButton = document.querySelector('.signin');
  var modal = document.querySelector('.modal');
  var closeButton = document.querySelector('.close');
  var submitButton = document.querySelector('.submit');
  var inputFields = document.querySelectorAll('input');

  signInButton.addEventListener('click', function(e) {
    modal.style.display = 'block';
  })

  closeButton.addEventListener('click', function(e) {
    modal.style.display = 'none';
  })

  submitButton.addEventListener('click', function(e) {
    e.stopPropagation();
    inputFields.forEach(function(input) {
      input.classList.add('error');
    })

  })

  inputFields.forEach(function(input) {
    input.addEventListener('click', function(e) {
      e.stopPropagation();
      e.target.classList.remove('error');
    })
  })
  modal.addEventListener('click', function(e) {
    modal.style.display = 'none';
  });
});
