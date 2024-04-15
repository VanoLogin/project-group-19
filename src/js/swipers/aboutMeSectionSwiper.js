document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.about-me-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      const detailsId = toggle.getAttribute('aria-controls');
      const details = document.getElementById(detailsId);

      toggle.setAttribute('aria-expanded', !isExpanded);
      
      if (details) {
        if (isExpanded) {
          details.style.display = 'none';
          toggle.innerHTML = '&#9660;'; 
        } else {
          details.style.display = 'block';
          toggle.innerHTML = '&#9650;'; 
        }
      }
    });
  });
});
