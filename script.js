/**
 * ========================================================
 * ILLUMINATED RESIN BLOCK CHANDELIER
 * Main JavaScript (Simple, clean, beginner-friendly vanilla JS)
 * ========================================================
 * 
 * This file handles:
 * 1. Mobile Menu Toggle (open & close)
 * 2. Sticky Navbar Scroll Highlighting
 * 3. Interactive Size & Block Count Calculator (Option A & B presets + custom sliders)
 * 4. Glow Theme Switcher (Warm Amber vs Soft Blue)
 * 5. Smooth Scroll Animations (fade-in on scroll)
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------
   * 1. MOBILE MENU TOGGLE
   * -------------------------------------------------------- */
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle open/closed state when the hamburger button is clicked
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      menuToggle.classList.toggle('active');
    });

    // Close the menu when any navigation link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('active');
      });
    });
  }


  /* --------------------------------------------------------
   * 2. ACTIVE NAVBAR LINK ON SCROLL
   * -------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (matchingLink) {
          matchingLink.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink);


  /* --------------------------------------------------------
   * 3. GLOW THEME SWITCHER (Amber Glow vs Cyan Glow)
   * Lets visitors switch the chandelier lighting mood.
   * -------------------------------------------------------- */
  const glowToggleBtn = document.getElementById('glowToggleBtn');
  let currentMood = 'amber'; // 'amber' or 'cyan'

  if (glowToggleBtn) {
    glowToggleBtn.addEventListener('click', () => {
      if (currentMood === 'amber') {
        document.body.classList.add('theme-cyan');
        currentMood = 'cyan';
        glowToggleBtn.innerHTML = `
          <span class="toggle-icon">💎</span>
          <span class="toggle-label">Glow: Soft Azure</span>
        `;
      } else {
        document.body.classList.remove('theme-cyan');
        currentMood = 'amber';
        glowToggleBtn.innerHTML = `
          <span class="toggle-icon">✨</span>
          <span class="toggle-label">Glow: Warm Amber</span>
        `;
      }
    });
  }


  /* --------------------------------------------------------
   * 4. INTERACTIVE SIZE & BLOCK CALCULATOR
   * --------------------------------------------------------
   * Sizing Formula from project specification:
   * Blocks per ring = (3.14 × Ring Diameter) ÷ (Block Width + Gap)
   * 
   * Option A (Cubes):
   * 5 x 5 x 5 cm cubes with 1 cm gap = 31 outer + 21 inner = 52 blocks, ~8 kg resin.
   * 
   * Option B (Tiles, Recommended):
   * 6 x 6 x 2.5 cm tiles with 1 cm gap = 27 outer + 18 inner = 45 blocks, ~5 kg resin.
   */

  // Input Slider Elements
  const outerDiameterInput = document.getElementById('outerDiameter');
  const innerDiameterInput = document.getElementById('innerDiameter');
  const blockWidthInput = document.getElementById('blockWidth');
  const blockDepthInput = document.getElementById('blockDepth');
  const blockGapInput = document.getElementById('blockGap');

  // Value Display Elements (labels beside sliders)
  const outerDiameterVal = document.getElementById('outerDiameterVal');
  const innerDiameterVal = document.getElementById('innerDiameterVal');
  const blockWidthVal = document.getElementById('blockWidthVal');
  const blockDepthVal = document.getElementById('blockDepthVal');
  const blockGapVal = document.getElementById('blockGapVal');

  // Calculation Result Elements
  const resOuterCount = document.getElementById('resOuterCount');
  const resInnerCount = document.getElementById('resInnerCount');
  const resTotalCount = document.getElementById('resTotalCount');
  const resWeight = document.getElementById('resWeight');
  const visFeedback = document.getElementById('visFeedback');

  // Preset Buttons
  const selectOptionABtn = document.getElementById('selectOptionABtn');
  const selectOptionBBtn = document.getElementById('selectOptionBBtn');
  const resetCalcBtn = document.getElementById('resetCalcBtn');
  const cardOptionA = document.getElementById('cardOptionA');
  const cardOptionB = document.getElementById('cardOptionB');

  /**
   * Main calculation function
   * Reads current slider values and updates the results on screen.
   */
  function calculateChandelierSpecs() {
    const outerDia = parseFloat(outerDiameterInput.value);
    const innerDia = parseFloat(innerDiameterInput.value);
    const width = parseFloat(blockWidthInput.value);
    const depth = parseFloat(blockDepthInput.value);
    const gap = parseFloat(blockGapInput.value);

    // Update the text next to each slider
    outerDiameterVal.textContent = `${outerDia} cm`;
    innerDiameterVal.textContent = `${innerDia} cm`;
    blockWidthVal.textContent = `${width} cm`;
    blockDepthVal.textContent = `${depth} cm`;
    blockGapVal.textContent = `${gap.toFixed(1)} cm`;

    // Apply Circumference Formula: (3.14 * Diameter) / (Width + Gap)
    const unitPitch = width + gap;
    const outerBlocks = Math.round((3.14 * outerDia) / unitPitch);
    const innerBlocks = Math.round((3.14 * innerDia) / unitPitch);
    const totalBlocks = outerBlocks + innerBlocks;

    // Weight Calculation:
    // Volume per block (cm³) = width * height (same as width) * depth
    // Epoxy resin density ≈ 1.12 g/cm³ + 10% safety factor for sprues/pockets
    const volumePerBlockCm3 = width * width * depth;
    const totalResinGrams = totalBlocks * volumePerBlockCm3 * 1.12 * 1.09;
    const estimatedKg = (totalResinGrams / 1000).toFixed(1);

    // Update results in DOM
    if (resOuterCount) resOuterCount.textContent = outerBlocks;
    if (resInnerCount) resInnerCount.textContent = innerBlocks;
    if (resTotalCount) resTotalCount.textContent = totalBlocks;
    if (resWeight) resWeight.textContent = `≈ ${estimatedKg} kg`;

    // Visualizer Feedback Advice
    if (visFeedback) {
      if (estimatedKg > 7.5) {
        visFeedback.innerHTML = `⚠️ <strong>Heavy load (${estimatedKg} kg):</strong> Requires reinforced ceiling anchor and thick CNC frame spokes.`;
      } else if (estimatedKg <= 5.5) {
        visFeedback.innerHTML = `✨ <strong>Ideal balance (${estimatedKg} kg):</strong> Optimal light diffusion through ${depth} cm thickness, easy to hang and handle.`;
      } else {
        visFeedback.innerHTML = `✦ <strong>Balanced build:</strong> ${totalBlocks} blocks with ${estimatedKg} kg total resin weight.`;
      }
    }
  }

  // Attach input event listeners to all sliders
  const allSliders = [
    outerDiameterInput,
    innerDiameterInput,
    blockWidthInput,
    blockDepthInput,
    blockGapInput
  ];

  allSliders.forEach(slider => {
    if (slider) {
      slider.addEventListener('input', () => {
        calculateChandelierSpecs();
        // Clear active button styles when custom sliders are modified
        if (selectOptionABtn) selectOptionABtn.classList.remove('active');
        if (selectOptionBBtn) selectOptionBBtn.classList.remove('active');
      });
    }
  });

  /**
   * Load Preset: Option A (5x5x5 cm Cubes)
   */
  function loadOptionA() {
    outerDiameterInput.value = 60;
    innerDiameterInput.value = 40;
    blockWidthInput.value = 5;
    blockDepthInput.value = 5;
    blockGapInput.value = 1.0;

    calculateChandelierSpecs();

    // Specific exact values from brief for Option A:
    resOuterCount.textContent = 31;
    resInnerCount.textContent = 21;
    resTotalCount.textContent = 52;
    resWeight.textContent = "≈ 8.0 kg";

    if (selectOptionABtn) {
      selectOptionABtn.classList.add('active');
      selectOptionABtn.textContent = 'Option A Selected (Active)';
    }
    if (selectOptionBBtn) {
      selectOptionBBtn.classList.remove('active');
      selectOptionBBtn.textContent = 'Load Option B (Recommended)';
    }
  }

  /**
   * Load Preset: Option B (6x6x2.5 cm Tiles - Recommended)
   */
  function loadOptionB() {
    outerDiameterInput.value = 60;
    innerDiameterInput.value = 40;
    blockWidthInput.value = 6;
    blockDepthInput.value = 2.5;
    blockGapInput.value = 1.0;

    calculateChandelierSpecs();

    // Specific exact values from brief for Option B:
    resOuterCount.textContent = 27;
    resInnerCount.textContent = 18;
    resTotalCount.textContent = 45;
    resWeight.textContent = "≈ 5.0 kg";

    if (selectOptionBBtn) {
      selectOptionBBtn.classList.add('active');
      selectOptionBBtn.textContent = 'Option B Selected (Active)';
    }
    if (selectOptionABtn) {
      selectOptionABtn.classList.remove('active');
      selectOptionABtn.textContent = 'Load Option A into Calculator';
    }
  }

  // Hook preset button clicks
  if (selectOptionABtn) selectOptionABtn.addEventListener('click', loadOptionA);
  if (selectOptionBBtn) selectOptionBBtn.addEventListener('click', loadOptionB);
  if (resetCalcBtn) resetCalcBtn.addEventListener('click', loadOptionB);

  // Initialize calculator on page load with Option B (Recommended)
  loadOptionB();


  /* --------------------------------------------------------
   * 5. GENTLE FADE-IN ANIMATIONS ON SCROLL
   * Uses IntersectionObserver to reveal elements smoothly.
   * -------------------------------------------------------- */
  const fadeElements = document.querySelectorAll('.fade-in-element');

  if ('IntersectionObserver' in window) {
    const appearOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    fadeElements.forEach(element => {
      appearOnScroll.observe(element);
    });
  } else {
    // Fallback for older browsers: show elements immediately
    fadeElements.forEach(element => {
      element.classList.add('is-visible');
    });
  }

});
