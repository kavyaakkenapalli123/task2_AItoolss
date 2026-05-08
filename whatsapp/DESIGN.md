---
name: Premium Messaging System
colors:
  surface: '#f7f9fc'
  surface-dim: '#d8dadd'
  surface-bright: '#f7f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f7'
  surface-container: '#eceef1'
  surface-container-high: '#e6e8eb'
  surface-container-highest: '#e0e3e6'
  on-surface: '#191c1e'
  on-surface-variant: '#3d4946'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f4'
  outline: '#6d7a77'
  outline-variant: '#bdc9c5'
  surface-tint: '#006b5f'
  primary: '#00685d'
  on-primary: '#ffffff'
  primary-container: '#008376'
  on-primary-container: '#f4fffb'
  inverse-primary: '#72d8c8'
  secondary: '#006d2f'
  on-secondary: '#ffffff'
  secondary-container: '#5dfd8a'
  on-secondary-container: '#007232'
  tertiary: '#18675d'
  on-tertiary: '#ffffff'
  tertiary-container: '#388075'
  on-tertiary-container: '#f4fffb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#8ff4e3'
  primary-fixed-dim: '#72d8c8'
  on-primary-fixed: '#00201c'
  on-primary-fixed-variant: '#005047'
  secondary-fixed: '#66ff8e'
  secondary-fixed-dim: '#3de273'
  on-secondary-fixed: '#002109'
  on-secondary-fixed-variant: '#005322'
  tertiary-fixed: '#a8f0e3'
  tertiary-fixed-dim: '#8cd4c7'
  on-tertiary-fixed: '#00201c'
  on-tertiary-fixed-variant: '#005047'
  background: '#f7f9fc'
  on-background: '#191c1e'
  surface-variant: '#e0e3e6'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  container-margin: 20px
  gutter: 16px
---

## Brand & Style

This design system is engineered to evoke a sense of professional reliability, immediate familiarity, and premium clarity. It occupies the space between **Minimalism** and **Modern Corporate** aesthetics, stripping away unnecessary embellishments to prioritize the speed of communication and the legibility of content.

The visual narrative is defined by a "Digital Sanctuary" philosophy—creating an environment that feels calm, organized, and focused. By leveraging a high-contrast text strategy against a spacious, light-drenched layout, the user experience remains effortless even during prolonged usage. The emotional response is one of security and efficiency, ensuring that every interaction feels intentional and high-quality.

## Colors

The palette is anchored in the heritage of the signature green tones but elevated through a sophisticated distribution of neutral space. 

- **Teal Green (#128C7E):** Serves as the primary functional color for headers, primary actions, and active states.
- **Light Green (#25D366):** Utilized sparingly as a vibrant accent for notifications, status indicators, and success confirmations.
- **Signature Dark Green (#075E54):** Reserved for high-level navigation backgrounds or deep-contrast branding elements to provide grounding.
- **Soft Grays (#F0F2F5):** Used for background surfacing and subtle divisions between content blocks to prevent visual fatigue.
- **High-Contrast Text:** Primary text uses a near-black ink (#111B21) to ensure maximum readability against white surfaces.

## Typography

This design system utilizes **Inter** for its exceptional legibility and systematic precision. The typographic hierarchy is strictly enforced to ensure clear information architecture.

- **Headlines:** Use tighter letter-spacing and heavier weights to create strong visual anchors.
- **Body Text:** Optimized with generous line-height (1.5x) to facilitate rapid scanning of messages.
- **Labels:** Small caps or medium-weight labels are used for metadata like timestamps and message statuses to differentiate from the primary conversation flow.
- **Contrast:** Always maintain a minimum 4.5:1 contrast ratio for body text to meet accessibility standards.

## Layout & Spacing

The design system follows a strict **8px spacing scale** to maintain rhythm and mathematical harmony. The layout philosophy is centered on "Spacious Minimalism," utilizing whitespace as a structural element rather than a void.

- **Grid:** A 12-column fluid grid for desktop and a single-column fluid layout for mobile with fixed 20px side margins.
- **Margins:** Generous internal padding within cards and message bubbles prevents content crowding.
- **Vertical Rhythm:** Consistent use of 16px (md) or 24px (lg) spacing between major sections to allow the user's eye to rest.

## Elevation & Depth

Depth in this design system is achieved through **Tonal Layering** and **Ambient Shadows** rather than heavy gradients.

- **Surface Tiers:** Backgrounds live at the lowest level (#F0F2F5). Content cards and message bubbles sit on the secondary level (#FFFFFF).
- **Shadows:** Use extremely soft, low-opacity shadows (Blur: 12px, Y: 4px, Color: #000000 at 4-6% opacity). This creates a "lifted" effect without breaking the minimalist aesthetic.
- **Chat Bubbles:** Subtle directional elevation is used to distinguish between incoming and outgoing messages. Outgoing bubbles utilize a slight depth to appear "active," while incoming bubbles remain flat against the surface.
- **Transitions:** All elevation changes (e.g., hovering over a contact) must use a smooth 200ms ease-in-out transition.

## Shapes

The shape language is consistently **Rounded**, promoting a friendly and approachable feel.

- **Search Bars:** Fully rounded (pill-shaped) to distinguish them from other input fields and content containers.
- **Cards & Containers:** Use a 16px (rounded-lg) radius to soften the interface.
- **Message Bubbles:** A 12px radius is standard, with a sharper 4px corner on the primary anchor point of the bubble to indicate the speaker.
- **Interactive Elements:** Buttons and selection chips utilize a 50px pill shape to maximize clickability perception.

## Components

### Buttons
- **Primary:** Filled with Teal Green (#128C7E), white text, pill-shaped.
- **Secondary:** Outlined in Teal Green with a clear background.
- **Ghost:** No border or background; uses Teal Green text for subtle actions.

### Search Bars
- **Style:** Background of #F0F2F5, fully rounded corners (pill-shaped).
- **Icons:** Centered search icon with a subtle transition to the left upon focus.

### Message Bubbles
- **Incoming:** White (#FFFFFF) with #111B21 text.
- **Outgoing:** Light Green (#E7FFDB) with #111B21 text.
- **Elevation:** Minimal 1px border or extremely light shadow to separate from background.

### Lists (Chat List)
- **Structure:** 64px fixed height for rows. 12px circular avatars.
- **Dividers:** 1px solid #F0F2F5, inset by 72px to align with the text content, not the avatar.

### Inputs & Text Fields
- **Style:** Underlined or softly boxed with #F0F2F5. Focus state transitions the border color to Teal Green (#128C7E).

### Chips & Badges
- **Unread Count:** Light Green (#25D366) circle with high-contrast dark text or white text, depending on accessibility weight.
- **Filters:** Pill-shaped, #F0F2F5 background, transitions to Teal Green when active.