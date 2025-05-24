// smooth-scroll.js

document.addEventListener('DOMContentLoaded', function() {
  // Get all scroll buttons with the 'scrolly' class
  const scrollButtons = document.querySelectorAll('.scrolly, .more.scrolly');

  // Add click handlers for smooth scrolling
  scrollButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();

      // Get the target section
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      // Smooth scroll to the section
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Function to handle scroll events and hide buttons
  function handleScroll() {
    const scrollPosition = window.scrollY;

    // Loop through each scrolly button
    scrollButtons.forEach(button => {
      // Get the target section ID from the href attribute
      const targetId = button.getAttribute('href');
      if (!targetId || !targetId.startsWith('#')) return;

      const targetSection = document.querySelector(targetId);
      if (!targetSection) return;

      // Calculate the target's position minus some offset
      const targetPosition = targetSection.offsetTop - 450;

      // If we've scrolled past the target section, hide the button
      if (scrollPosition >= targetPosition) {
        button.style.opacity = '0';
        button.style.pointerEvents = 'none';
      } else {
        button.style.opacity = '1';
        button.style.pointerEvents = 'auto';
      }
    });
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Run once on load in case page is refreshed in middle
  handleScroll();
});

document.addEventListener('DOMContentLoaded', function() {
  const moreButton = document.querySelector('#two .button.next');
  const aboutSection = document.querySelector('#two');

  if (moreButton && aboutSection) {
    // Add the hover-active class when hovering over the button
    moreButton.addEventListener('mouseenter', function() {
      aboutSection.classList.add('hover-active');
    });

    // Remove the hover-active class when the mouse leaves the button
    moreButton.addEventListener('mouseleave', function() {
      aboutSection.classList.remove('hover-active');
    });
  }
});

