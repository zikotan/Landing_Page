// Function to initialize animation control and toggle <hr> visibility based on viewport size
function setupAnimationAndHrControl() {
  const frame = document.getElementById('frame');
  const navToggler = document.querySelector('.navbar-toggler');
  const hr = document.getElementById('navbarHr');

  // Function to handle toggler click and toggle animation duration
  function handleTogglerClick() {
    const currentAnimationDuration = frame.style.animationDuration;
    frame.style.animationDuration = currentAnimationDuration === '0s' ? '45s' : '0s';
  }

  // Function to hide/show the <hr> element based on viewport size
  function toggleHrVisibility() {
    // Check if the viewport is small (toggler is hidden)
    const isViewportSmall = window.getComputedStyle(navToggler).display === 'none';
    hr.style.display = isViewportSmall ? 'none' : 'block';
  }

  // Add click event listener to the nav toggler for toggling animation
  navToggler.addEventListener('click', handleTogglerClick);

  // Call toggleHrVisibility initially to set the initial visibility based on viewport size
  toggleHrVisibility();

  // Add resize event listener to update visibility on window resize
  window.addEventListener('resize', toggleHrVisibility);
}

// Call the combined setup function to initialize animation control and <hr> visibility
setupAnimationAndHrControl();
