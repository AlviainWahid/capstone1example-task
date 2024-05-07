document.addEventListener('DOMContentLoaded', function() {
  const numbers = document.querySelectorAll('.number');

  numbers.forEach(function(number) {
      number.addEventListener('click', function() {
          this.classList.toggle('red');
      });
  });
});
