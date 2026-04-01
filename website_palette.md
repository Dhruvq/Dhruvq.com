# Neon Noir Design System

This document outlines the **Neon Noir** visual identity and the core design principles for creating cohesive, professional, and visually balanced web applications.

## The Palette

The Neon Noir style builds upon a stark, ultra-dark foundation, utilizing highly saturated neon accents strictly for emphasis and status.

| Color Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Pitch Black** | `#000000` | Primary application backgrounds, absolute bottom layer. |
| **Deep Charcoal** | `#1e1e1e` | Surface/Panel backgrounds (often used with 85%-90% opacity and backdrop blur). |
| **Neon Green** | `#2CFF05` | "System Active" or "Healthy" status indicators, positive metrics, or selective active states. |
| **Neon Purple** | `#BF00FF` | Primary action buttons, sliders, progress bars, and focal interactive elements. |
| **Neutral White**| `#ffffff` | Primary headings, critical data points, and component titles. |
| **Dimmed Zinc** | `#a1a1aa` (Zinc-400)| Section headers, secondary text, metadata, and borders (`white/10`). |

---

## Core Design Principles

When applying this palette, the goal is effortless scannability. If everything glows, nothing stands out. Neon must be treated as a strict accent, not a default state.

### 1. Control the Glow (Reduce Noise)
- **Do NOT put a neon glow on everything.** 
- Restrict drop-shadow glows (`shadow-[0_0_15px_...]`) to only **1 or 2 key elements** per view (e.g., the main primary action button, or a tiny pulsing status dot).
- Remove glowing borders from generic cards or text. Use a subtle `border-white/10` or `border-zinc-700/50` instead.

### 2. Limit Accents Per Component
- Do not mix green and purple heavily in the same localized area. 
- Use **one highlight color at a time** depending on context. For example, use green exclusively for the system status box, and purple exclusively for the control/button area. 
- The vast majority of the UI text should remain neutral (white or gray).

### 3. Flat, Recessed Backgrounds
- Keep panel and sidebar backgrounds exceptionally subtle. 
- Avoid bright or saturated background gradients. Instead, use a nearly flat dark color (like `bg-[#1e1e1e]/85`) coupled with a subtle map/background blur (`backdrop-blur-md`).
- This allows the actual content (interactive maps, dark charts) to "breathe" without being overpowered by the UI panels layered on top of them.

### 4. Strict Typography Hierarchy
- **Module Titles:** Bold, white, or selectively colored (`text-xl font-bold text-white`).
- **Section Headers:** Dim, uppercase, tracking wide (`text-xs text-zinc-400 uppercase tracking-wider`).
- **Body Text:** Neutral gray to cleanly separate from data points (`text-zinc-400`).
- **Data & Numbers:** Pure white, cleanly contrasted, often using a monospace font (`text-white font-mono`). Only highlight numbers with neon if they represent a critical state change.

### 5. Contrast over Saturation
- Rely on contrast in brightness (White vs Dark Gray) and font weight (Bold vs Regular) rather than constantly increasing color saturation to draw attention.
- Simplify status boxes: rely on empty padding and spacing to group elements rather than thick borders or bright backgrounds.

---

### Example Tailwind Implementations

**The "Active Status" Indicator:**
```jsx
<div className="bg-zinc-800/50 p-4 border border-zinc-700/50 rounded-lg">
  <div className="w-2 h-2 rounded-full bg-[#2CFF05] shadow-[0_0_8px_rgba(44,255,5,0.6)]" />
  <p className="text-[#2CFF05] tracking-wide text-xs">SYSTEM ACTIVE</p>
</div>
```

**The Primary Action Button:**
```jsx
<button className="bg-[#BF00FF] hover:bg-[#a600e6] text-white shadow-[0_0_15px_rgba(191,0,255,0.2)]">
  Execute Model
</button>
```

**A Dark, Glassmorphism Panel:**
```jsx
<div className="bg-[#1e1e1e]/85 backdrop-blur-md border border-white/10 rounded-xl shadow-lg">
  {/* Content breathes here */}
</div>
```
