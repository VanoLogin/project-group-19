document.addEventListener("DOMContentLoaded", function() {
    const coversSection = document.querySelector('.covers-section');
  
    const observerOptions = {
      root: null, 
      threshold: 0.5, 
    };
  
     const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.animation-photo').forEach(photo => {
            photo.style.animationPlayState = 'running';
          });
        } else {
          entry.target.querySelectorAll('.animation-photo').forEach(photo => {
            photo.style.animationPlayState = 'paused';
          });
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(coversSection);
  });

  