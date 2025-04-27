const toggle = document.getElementById('toggle-switch');
const switchComponent = document.querySelector('.switch-component');
const body = document.body;

// 1) Figure out the toggles's position relative to the viewport to set ripple effect's origin
// 2) Convert to CSS % units and update the CSS custom properties to toggle's position
// 4) Toggle the dark class! If adding, this will animate body pseudo element's radius from 0 → 150vmax. If removing, it will shrink back from 150vmax → 0.

function setRippleOrigin() {
  const rect = switchComponent.getBoundingClientRect();
  const x = ((rect.left + rect.width / 2.5) / window.innerWidth) * 100 + '%';
  const y = ((rect.top + rect.height / 2.5) / window.innerHeight) * 100 + '%';
  document.documentElement.style.setProperty('--mask-x', x);
  document.documentElement.style.setProperty('--mask-y', y);
}

// Initialize on page load
setRippleOrigin();

toggle.addEventListener('click', (e) => {
  setRippleOrigin(); // Update in case window resizes or layout shifts
  body.classList.toggle('dark');
});

// // Update in case window resizes or layout shifts
addEventListener('resize', setRippleOrigin);
