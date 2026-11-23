# Illuminated Resin Block Chandelier — Project Website

A clean, responsive, and modern website showcasing the **Illuminated Resin Block Chandelier** design project. Built with pure **HTML5, CSS3, and JavaScript** (no complex frameworks or build steps required).

---

## 🌟 Features Included

1. **Sticky Top Menu**: Stays at the top of the screen as you scroll, with a mobile-friendly slide menu and a lighting mood switcher (Warm Amber vs Soft Azure).
2. **Hero Section**: Complete with project title, subtitle, quick overview badges, and an **animated CSS illustration of two concentric rings** with glowing resin blocks and a central light bulb core.
3. **About The Project**: Describes the design concept, dual-ring structure, and features glowing CSS resin block simulations (amber and soft blue) showcasing light diffusion.
4. **How It Is Made (Step-by-Step)**:
   - **Step 1:** 3D Printing (master block and alignment jigs)
   - **Step 2:** Moulding (silicone rubber mould and deep-pour epoxy resin casting)
   - **Step 3:** CNC (cutting dual frame rings with block pockets and spokes)
   - **Step 4:** Finishing (frosted back for diffusion + polished face for sparkle)
   - **Step 5:** Assembly (fitting blocks, wiring the light, and ceiling suspension)
5. **Size and Block Count (Interactive Calculator)**:
   - Built-in Circumference Formula: `Blocks per ring = (3.14 × Ring Diameter) ÷ (Block Width + Gap)`
   - One-click presets for **Option A** (5 cm cubes, 52 blocks, ≈8 kg) and **Option B (Recommended)** (6×2.5 cm tiles, 45 blocks, ≈5 kg).
   - Interactive sliders to test any custom diameter, block width, thickness, and spacing in real time.
6. **Design Concept Board**: Embeds your uploaded project moodboard and sketch sheet directly.

---

## 🚀 How to Run the Website (Simple Steps)

### Method 1: The Easiest Way (Double-Click)
1. Open your project folder on your computer: `portfolio/`
2. Find the file named **`index.html`**.
3. **Double-click it** (or right-click and choose **Open With > Google Chrome / Safari / Edge**).
4. The website will immediately open in your browser!

### Method 2: Using a Local Server (Recommended for Best Performance)
If you have Terminal or VS Code open:
```bash
# In the project directory, run:
python3 -m http.server 8000
```
Then open your browser and navigate to:
```
http://localhost:8000
```

---

## 📁 File Structure

```text
portfolio/
├── index.html        # All website text, structure, sections, and placeholders
├── styles.css        # Colors, glowing resin styling, animations, and mobile responsiveness
├── script.js         # Interactive calculator, smooth scrolling, and lighting mood switch
├── README.md         # This beginner-friendly instruction guide
├── images/
│   └── concept-board.jpg # Your uploaded chandelier design sketch and moodboard
└── archive-old-portfolio/ # Safe backup of previous files
```

---

## ✏️ How to Edit and Customize

### 1. Changing Text or Descriptions
Open **`index.html`** in any text editor (such as VS Code, Sublime Text, or TextEdit):
- Find any heading (e.g., `<h1>` or `<h3>`) or paragraph (`<p>`) and change the words.
- Save the file (`Ctrl + S` or `Cmd + S`) and refresh your browser to see the update.

### 2. Adding Your Own Workshop Photos (Replacing Placeholders)
In **`index.html`**, each step in the "How It Is Made" section contains a placeholder visual box with a clear comment like this:

```html
<!-- Inside Step 1 in index.html -->
<div class="placeholder-box">
  <!-- To use your own photo, comment out the css-illustration and add: -->
  <img src="images/step1-3dprint.jpg" alt="3D Printed Master Block" class="step-real-img" />
</div>
```
To use your photo:
1. Save your photo into the `images/` folder (e.g. `step1-3dprint.jpg`).
2. Replace or wrap the placeholder illustration with the `<img>` tag shown above.

### 3. Changing Colors and Glowing Highlights
Open **`styles.css`**. Right at the top (lines 9–25), you will find the CSS color variables:
```css
:root {
  --amber-core: #ffaa33;       /* Main warm amber glow */
  --blue-core: #38bdf8;        /* Soft blue accent blocks */
  --bg-deep: #07090e;          /* Main dark background */
}
```
You can change these hex codes to adjust the mood of the chandelier lighting.

---

## 💡 About the Block Calculation Formula

The calculator uses standard circle geometry:
$$\text{Blocks per ring} = \frac{3.14 \times \text{Ring Diameter}}{\text{Block Width} + \text{Gap}}$$

- **Outer Ring ($60\text{ cm}$):**
  $$\frac{3.14 \times 60}{6\text{ cm} + 1\text{ cm}} = \frac{188.4}{7} \approx 27\text{ blocks}$$
- **Inner Ring ($40\text{ cm}$):**
  $$\frac{3.14 \times 40}{6\text{ cm} + 1\text{ cm}} = \frac{125.6}{7} \approx 18\text{ blocks}$$
- **Total:** $27 + 18 = 45\text{ blocks}$ ($≈5.0\text{ kg}$ total resin).
