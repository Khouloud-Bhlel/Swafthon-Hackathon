  // Form animation
  const form = document.getElementById('loginForm');
  const inputs = form.querySelectorAll('input');

  // Initial animations
  gsap.from('.login-container', {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out"
  });

  gsap.from('.logo-circle', {
      scale: 0,
      rotation: 360,
      duration: 1,
      delay: 0.5,
      ease: "back.out(1.7)"
  });

  // Input animations
  inputs.forEach(input => {
      input.addEventListener('focus', () => {
          gsap.to(input, {
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out"
          });
      });

      input.addEventListener('blur', () => {
          gsap.to(input, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
          });
      });
  });

  // Social buttons hover animation
  const socialButtons = document.querySelectorAll('.social-button');
  socialButtons.forEach(button => {
      button.addEventListener('mouseenter', () => {
          gsap.to(button, {
              y: -5,
              duration: 0.3,
              ease: "power2.out"
          });
      });

      button.addEventListener('mouseleave', () => {
          gsap.to(button, {
              y: 0,
              duration: 0.3,
              ease: "power2.out"
          });
      });
  });