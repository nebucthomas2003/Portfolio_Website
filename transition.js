document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    const navLinks = document.querySelectorAll('.nav-link');
  
    function handleTransition(event) {
      event.preventDefault();
      const href = this.getAttribute('data-href');
      content.classList.add('fade-out');
      setTimeout(function() {
        window.location.href = href;
      }, 1000); // Adjust the delay as needed
    }
  
    navLinks.forEach(function(link) {
      link.addEventListener('click', handleTransition);
    });
  });
  