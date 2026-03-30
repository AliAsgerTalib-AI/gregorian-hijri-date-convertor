# Design System: The Digital Lithograph

> **Creative North Star:** Mid-Century Swiss Design meets Strict Brutalism  
> **Design System Name:** International Typographic  
> **Color Mode:** Light · Monochrome  
> **Device Target:** Desktop

---

## 1. Color Palette

### Core Tokens

| Token | Hex | Role |
|---|---|---|
| `primary` | `#000000` | Structural borders, primary text, high-impact CTAs |
| `primary-container` | `#3b3b3b` | Secondary surfaces, gradient target for ink-density effect |
| `on-primary` | `#e2e2e2` | Text on primary backgrounds |
| `on-primary-container` | `#ffffff` | Text on dark containers |
| `secondary` | `#5e5e5e` | Secondary elements, surface tint |
| `secondary-container` | `#d4d4d4` | Light grey container |
| `on-secondary` | `#ffffff` | Text on secondary |
| `on-secondary-container` | `#1b1b1b` | Text on secondary container |
| `tertiary` | `#3b3b3b` | Tertiary elements |
| `tertiary-container` | `#747474` | Tertiary container |

### Surface Tokens

| Token | Hex | Role |
|---|---|---|
| `surface` | `#f9f9f9` | "The Paper" — primary background canvas |
| `surface-container-lowest` | `#ffffff` | Pure white layer |
| `surface-container-low` | `#f3f3f4` | Low contrast sections |
| `surface-container` | `#eeeeee` | Active input zones, focused areas |
| `surface-container-high` | `#e8e8e8` | Higher-emphasis zones |
| `surface-container-highest` | `#e2e2e2` | Maximum emphasis tier |
| `surface-dim` | `#dadada` | Dimmed surface |
| `surface-variant` | `#e2e2e2` | Variant surface |
| `background` | `#f9f9f9` | Page background |

### Text & Border Tokens

| Token | Hex | Role |
|---|---|---|
| `on-surface` | `#1a1c1c` | Primary text on light surfaces |
| `on-surface-variant` | `#474747` | Secondary/descriptive text |
| `on-background` | `#1a1c1c` | Text on background |
| `outline` | `#777777` | Disabled states only |
| `outline-variant` | `#c6c6c6` | Subtle borders |

### Error Tokens

| Token | Hex |
|---|---|
| `error` | `#ba1a1a` |
| `error-container` | `#ffdad6` |
| `on-error` | `#ffffff` |
| `on-error-container` | `#410002` |

### Color Rules

- **Binary contrast:** Black (`#000000`) vs Paper (`#f9f9f9`) drives all visual hierarchy.
- **No mid-greys for decoration.** `outline` (`#777777`) is reserved for disabled states only.
- **Ink-density gradients:** Large black areas (footer, primary CTA) use a subtle gradient from `primary` → `primary-container` to mimic print ink variation.
- **No color accents.** This is a strictly monochrome system.

---

## 2. Typography

### Font Stack

| Role | Font Family |
|---|---|
| Headlines | **Inter** |
| Body | **Inter** |
| Labels | **Inter** |

### Type Scale

| Role | Size | Weight | Usage |
|---|---|---|---|
| `display-lg` | `3.5rem` | Bold | Converted date output — intentionally oversized to demand focus |
| `headline-md` | ~`2rem` | Semi-bold | Numeric entry in input fields |
| `headline-sm` | `1.5rem` | Semi-bold | Primary input numbers (Day / Month / Year) |
| `body-md` | `0.875rem` | Regular | Instructional text, secondary data |
| `label-md` | `0.75rem` | Medium | Field descriptors — **UPPERCASE**, letter-spacing `0.05rem` |
| `label-sm` | `0.6875rem` | Medium | Technical annotations — **UPPERCASE**, letter-spacing `0.05rem` |

### Typography Rules

1. **Flush-left only.** Never center-align text. Everything is left-aligned, ragged-right.
2. **Top-heavy hierarchy.** Pair massive display type with tiny utilitarian labels — the page should feel like a bespoke poster.
3. **Labels are always uppercase** with `letter-spacing: 0.05rem` for legibility against grid lines.
4. **Neo-Grotesque ethos.** Inter emulates Helvetica's mathematical precision.

---

## 3. Layout & Grid

### The Swiss Grid

The interface is built on a strict mathematical grid where every element aligns to common vertical axes.

```
┌─────────────────────────────────────────────────────┐
│  5.5rem margin                                      │
│  ┌──────────┬──────────┬──────────┬────────────┐    │
│  │  LABEL   │  LABEL   │  LABEL   │            │    │
│  │  0.75rem ↕                                  │    │
│  │  INPUT   │  INPUT   │  INPUT   │  [CONVERT] │    │
│  ├──────────┴──────────┴──────────┴────────────┤    │
│  ║                                             ║    │
│  ║  RESULT OUTPUT (display-lg)                 ║    │
│  ║  2px border                                 ║    │
│  ╚═════════════════════════════════════════════╝    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Spacing Scale

| Token | Value | Usage |
|---|---|---|
| Outer margins | `5.5rem` (`spacing-24`) or `4.5rem` (`spacing-20`) | Page frame — white space border |
| Gutter | `0.4rem` (`spacing-2`) | Internal cell padding between border and content |
| Vertical rhythm | `0.75rem` (`spacing-3.5`) | Distance from label to its input value |
| Spacing scale | `1` (tight) | Base multiplier |

### Shape & Borders

| Property | Value |
|---|---|
| Border radius | **`0px` everywhere** — no exceptions |
| Standard border | `1px solid #000000` on all containers |
| Result border | `2px solid #000000` — the only thickness exception |
| Grid dividers | `1px #000000` lines bleeding to viewport edges |

### Layout Rules

1. **The "Visible Skeleton" rule:** Every container is defined by a `1px solid #000000` border. No background color shift exists without a defining stroke.
2. **No border radius.** All corners are `0px`. Any radius breaks the mathematical integrity of the Swiss Grid.
3. **Align everything.** If a label starts at `2.25rem` from the left, the result text must also start there.
4. **Empty cells are valid.** A completely empty grid cell is a legitimate way to create visual breathing room.
5. **Grid lines as navigation.** Vertical lines should align across the entire page, creating "columns of data" the eye follows from input to result.

---

## 4. Elevation & Depth

### The Flat Stack

There are **no shadows** in this design system. Depth is purely mathematical.

| Technique | Description |
|---|---|
| **Nesting** | Depth = smaller 1px box nested within a parent 1px grid cell |
| **Tonal shift** | Active areas shift from `surface` → `surface-container` |
| **Ink gradients** | Large dark areas use `primary` → `primary-container` gradient |
| **No blur** | No `box-shadow`, no `backdrop-filter` |

### Depth Rules

1. **No shadows.** If an element needs to "pop," give it `primary` background with `on-primary` text.
2. **No blur effects.** No glassmorphism, no frosted glass.
3. **Tonal layering only.** Use the surface token hierarchy to create visual depth.

---

## 5. Components

### Input Fields

```css
/* Input cell occupies a full Swiss Grid cell */
.input-field {
  border: 1px solid #000000;
  background: #f9f9f9;           /* surface */
  border-radius: 0;
  font-size: 1.5rem;             /* headline-sm for numeric entry */
  padding: 0.4rem;               /* spacing-2 gutter */
}

.input-field:focus {
  background: #eeeeee;           /* surface-container */
  outline: none;
}
```

- No standalone "box" — the input occupies its full grid cell
- Focus state: background shifts, no border color change
- Numeric text uses `headline-md` to make typing feel consequential

### Buttons ("The Block Button")

```css
.btn-primary {
  background: #000000;           /* primary */
  color: #e2e2e2;                /* on-primary */
  border: 1px solid #000000;
  border-radius: 0;
  text-transform: uppercase;
  font-size: 0.75rem;            /* label-md */
  letter-spacing: 0.05rem;
}

.btn-primary:hover {
  background: #e2e2e2;           /* on-primary */
  color: #000000;                /* primary — full inversion */
}
```

- Hover = full color inversion (high-contrast "flash")
- No shadows, no scale transforms

### Date Result Display

```css
.result-display {
  border: 2px solid #000000;     /* The only 2px exception */
  padding: 0.4rem;
  text-align: left;              /* flush-left, bottom-justified */
}

.result-display .date {
  font-size: 3.5rem;             /* display-lg */
  color: #1a1c1c;                /* on-surface */
}
```

- 2px border denotes the "Final Truth" of the calculation
- Text sits `display-lg`, justified to the bottom-left of the cell

### Grid Dividers

```css
.grid-divider-h {
  height: 1px;
  background: #000000;           /* primary */
  width: 100vw;                  /* bleeds to viewport edges */
  margin-left: calc(-5.5rem);    /* break out of margins */
}
```

---

## 6. Transitions & Animation

| Property | Value |
|---|---|
| Duration | `≤ 0.1s` |
| Easing | `linear` |
| Style | Hard cuts preferred |

- Transitions should feel **mechanical**, not fluid.
- No spring animations, no easing curves, no bouncing.
- If a state changes, it snaps — like a typesetter changing a plate.

---

## 7. Do's and Don'ts

### ✅ Do

- **Do** align every element to a common vertical axis
- **Do** use whitespace (empty grid cells) as a structural element
- **Do** treat the UI as a static document — hard cuts, fast fades
- **Do** use `1px solid #000000` borders to define every container
- **Do** use extreme typographic scale contrast (3.5rem → 0.6875rem)
- **Do** use uppercase + letter-spacing for all labels

### ❌ Don't

- **Don't** use border radius — ever (`0px` absolute)
- **Don't** use shadows of any kind
- **Don't** center-align text — flush-left only
- **Don't** use icons unless absolutely necessary (geometric, 1-2px stroke if needed)
- **Don't** use mid-grey for decoration — `outline` is for disabled states only
- **Don't** use pure white `#ffffff` for large backgrounds — use `surface` (`#f9f9f9`)
- **Don't** use 1px borders for decoration — every line must be a functional boundary
- **Don't** use color accents — this is a monochrome system

---

## 8. CSS Custom Properties Reference

```css
:root {
  /* Core */
  --color-primary: #000000;
  --color-primary-container: #3b3b3b;
  --color-on-primary: #e2e2e2;
  --color-on-primary-container: #ffffff;

  /* Secondary */
  --color-secondary: #5e5e5e;
  --color-secondary-container: #d4d4d4;
  --color-on-secondary: #ffffff;
  --color-on-secondary-container: #1b1b1b;

  /* Tertiary */
  --color-tertiary: #3b3b3b;
  --color-tertiary-container: #747474;

  /* Surfaces */
  --color-surface: #f9f9f9;
  --color-surface-container-lowest: #ffffff;
  --color-surface-container-low: #f3f3f4;
  --color-surface-container: #eeeeee;
  --color-surface-container-high: #e8e8e8;
  --color-surface-container-highest: #e2e2e2;
  --color-surface-dim: #dadada;
  --color-surface-variant: #e2e2e2;
  --color-background: #f9f9f9;

  /* Text */
  --color-on-surface: #1a1c1c;
  --color-on-surface-variant: #474747;
  --color-on-background: #1a1c1c;

  /* Borders */
  --color-outline: #777777;
  --color-outline-variant: #c6c6c6;

  /* Error */
  --color-error: #ba1a1a;
  --color-error-container: #ffdad6;
  --color-on-error: #ffffff;
  --color-on-error-container: #410002;

  /* Typography */
  --font-family: 'Inter', sans-serif;
  --font-display-lg: 3.5rem;
  --font-headline-sm: 1.5rem;
  --font-body-md: 0.875rem;
  --font-label-md: 0.75rem;
  --font-label-sm: 0.6875rem;
  --letter-spacing-label: 0.05rem;

  /* Spacing */
  --spacing-gutter: 0.4rem;
  --spacing-vertical-rhythm: 0.75rem;
  --spacing-outer-margin: 5.5rem;
  --spacing-outer-margin-alt: 4.5rem;

  /* Shape */
  --radius: 0px;
  --border-standard: 1px solid var(--color-primary);
  --border-result: 2px solid var(--color-primary);

  /* Motion */
  --transition-duration: 0.1s;
  --transition-easing: linear;
}
```
