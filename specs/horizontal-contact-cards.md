# Feature Spec: Horizontal Contact Cards Revamp

## 1. Overview & Objectives
- **Summary**: Revamp the Contact section (`src/components/Contact.jsx` and `src/styles/contact.css`) to eliminate the "Send a Message" form and elevate the direct communication channels (Email, LinkedIn, GitHub, and Resume) into prominent portrait vertical rectangle cards with dedicated action footers.
- **Goals**:
  - Remove the contact message form, input state, validation banners, and submission logic to make direct communication channels the primary focus.
  - Present the 4 connection channels (Email with 1-click copy, LinkedIn Profile, GitHub Profile, and Resume Download) as an attractive 4-column row of portrait vertical rectangle cards with generous vertical breathing room and action footers (`Copy Address →`, `Visit Profile →`, `View Projects →`, `Download CV →`).
  - Keep the contact layout clean and focused by removing the redundant availability banner.
  - Update section header subtitle to reflect direct outreach ("Reach out directly via email, connect on professional networks, or review my credentials.").
  - Maintain the Catppuccin Mocha aesthetic: sharp borders (`border-radius: 0px`), surface contrast, clear iconography, vibrant hover accent states, and clipboard copy animations.
- **Non-Goals**:
  - Re-introducing third-party contact form embeds or form handling backend services.
  - Modifying the global navigation links (the `#contact` anchor remains valid and cleanly focuses on this revamped section).

---

## 2. User Experience & Design
- **Visual Aesthetic & Theme**: Catppuccin Mocha dark palette (`#11111b` crust, `#1e1e2e` base, `#313244` surface0, `#45475a` borders, `#89b4fa` blue, `#a6e3a1` green).
- **Key UI Components**:
  - **Section Header**: Retains `[ 06. TRANSMISSION_CHANNEL ]` tag, `Initiate Connection` title, and an updated direct-connection subtitle.
  - **Portrait Vertical Channel Cards Grid**: A 4-column responsive grid where each channel is a dedicated portrait vertical rectangle card:
    - **Email Card**: Clickable card with mail icon, monospaced tag `[ DIRECT_EMAIL ]`, email address label, "Click to copy email address" helper (or "Copied to clipboard!" state), and bottom action CTA "Copy Address →" (switches to "Copied to Clipboard ✓").
    - **LinkedIn Card**: External link card with LinkedIn icon, monospaced tag `[ PROFESSIONAL ]`, "LinkedIn Profile" label, "Connect professionally" helper, and bottom action CTA "Visit Profile →".
    - **GitHub Card**: External link card with GitHub icon, monospaced tag `[ REPOSITORIES ]`, "GitHub Profile" label, "Explore open-source repositories" helper, and bottom action CTA "View Projects →".
    - **Resume Card**: Download action card with document icon, monospaced tag `[ CREDENTIALS ]`, "Download Resume" label, "Latest updated curriculum vitae (PDF)" helper, and bottom action CTA "Download CV →".
- **Interactions & Animations**:
  - Hover effects on cards: subtle upward translation (`translateY(-5px)`), accent border glowing, and surface highlight transition.
  - 1-click copy for the email address with 2-second visual feedback ("Copied to clipboard!" + green check icon).
  - Reveal animations with staggered entrance timing.

---

## 3. Architecture & Technical Design
- **Tech Stack**: React 19, Vanilla CSS, Lucide React icons (`Mail`, `Linkedin`, `Github`, `FileText`, `Copy`, `Check`, `ArrowUpRight`).
- **Component Breakdown**:
  - `src/components/Contact.jsx`: Main Contact component. Strips out form state (`formData`, `feedback`, `isSubmitting`), keeping only `emailCopied` state and the clipboard handler. Renders the section header, the 4 connection cards, and the availability card.
  - `src/styles/contact.css`: Redesigns `.contact-grid` and card styles to support the horizontal layout, replacing vertical sidebar styles with the 4-column `.contact-channels-grid` and full-width `.availability-banner-card`.
- **State Management**:
  - Single boolean state `emailCopied` for copy-to-clipboard feedback with auto-reset via `setTimeout`.

---

## 4. Detailed Feature Breakdown

### 4.1 Contact Component (`src/components/Contact.jsx`)
- Clean up unused imports (`Send`, `CheckCircle2`, `AlertCircle`).
- Remove `formData`, `feedback`, `isSubmitting`, `handleChange`, `handleSubmit`.
- Retain `handleCopyEmail` with clipboard write and 2-second `emailCopied` timeout.
- Render:
  1. Section Header: Tag, title, and refreshed subtitle.
  2. Channels Grid (`.contact-channels-grid`): 4 portrait vertical cards (Email copy button, LinkedIn link, GitHub link, Resume link).

### 4.2 Styling & Layout (`src/styles/contact.css`)
- Remove obsolete form and availability banner styles.
- Create `.contact-channels-grid`: `display: grid`, `grid-template-columns: repeat(4, 1fr)`, `gap: 1.25rem`.
- Style individual `.contact-channel-card`:
  - Portrait vertical rectangle sizing (`min-height: 250px`, `padding: 1.5rem 1.35rem`), sharp borders (`border-radius: 0`), card background (`var(--bg-card)`), border (`var(--border-color)`).
  - Top header row with 42px icon box and top-right action indicator.
  - Body section with category tag, title, and description subtitle.
  - Dedicated footer row with divider and action CTA prompt (`Copy Address →`, `Visit Profile →`, `View Projects →`, `Download CV →`).
  - Smooth hover transitions (`translateY(-5px)`, sapphire/blue border glow, icon scale).
- Responsive breakpoints:
  - `@media (max-width: 1024px)`: 2 columns for the channels grid (`repeat(2, 1fr)`).
  - `@media (max-width: 600px)`: 1 column for the channels grid (`1fr`, auto min-height).

---

## 5. File Structure
```
src/
├── components/
│   └── Contact.jsx        # Revamped contact section with portrait vertical cards
└── styles/
    └── contact.css        # 4-column portrait card grid, card styles & responsive breakpoints
```

---

## 6. Acceptance Criteria
- [ ] The "Send a Message" form and "Ready for Full-Time Roles" availability banner are completely removed.
- [ ] Direct connections are displayed as 4 portrait vertical rectangle cards in a row on desktop (Email, LinkedIn, GitHub, Resume).
- [ ] Each card features an icon box, category tag, title, subtitle, and interactive action footer CTA.
- [ ] Clicking the Email card copies the email to clipboard, changes icon to a green checkmark, and displays "Copied to clipboard!" and "Copied to Clipboard ✓".
- [ ] LinkedIn and GitHub cards open their respective URLs in new tabs with secure attributes (`rel="noopener noreferrer"`).
- [ ] Resume card triggers the resume download action.
- [ ] Responsive layout adapts smoothly: 4 columns on desktop, 2 columns on tablet, 1 column on mobile.
- [ ] Header docstring, function comments, and junior-developer inline comments are maintained according to rules.
- [ ] `CHANGELOG.md` is updated with a real timestamp and link to this spec.
