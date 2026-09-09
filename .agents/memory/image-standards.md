# EcoHaul Dubai — Blog Article Image Standards (`image-standards.md`)

**Domain**: `https://getjunkremovalsdubai.com`  
**Companion Documents**: [`content-rules.md`](file:///d:/Projects/Dubai/Uncle/.agents/memory/content-rules.md) and [`keywords.md`](file:///d:/Projects/Dubai/Uncle/.agents/memory/keywords.md)

_Reference documentation location_: [`.agents/memory/image-standards.md`](file:///d:/Projects/Dubai/Uncle/.agents/memory/image-standards.md)

---

## 1. The Rule of Exactly 2 Images per Article

Every published article must contain **exactly 2 high-quality, topic-relevant images**:

```
┌─────────────────────────────────────────────────────────────┐
│                    Article Visual Layout                    │
├─────────────────────────────────────────────────────────────┤
│  [H1 Article Title & Author Row]                            │
│                                                             │
│  📸 IMAGE 1: Hero Cover Image (1200 × 800 px)               │
│     • Placed immediately below header / above the fold      │
│     • Sets context and feeds OpenGraph / Twitter cards      │
│                                                             │
│  [Key Takeaways Box & Opening Content Sections]             │
│                                                             │
│  📸 IMAGE 2: In-Body Contextual Image (1200 × 800 px)       │
│     • Embedded midway through the article (Section 2 or 3)  │
│     • Illustrates a specific step, scenario, or process     │
│                                                             │
│  [Remaining Sections, Internal Links & CTA]                 │
└─────────────────────────────────────────────────────────────┘
```

1. **Image 1 (Hero Cover Image)**:
   - **Role**: Primary featured image introducing the main topic.
   - **Placement**: Top of the article, above the fold.
   - **Social Sharing**: Reused automatically as the Open Graph (`og:image`) and Twitter Card image.
   - **Loading Directive**: `priority={true}` to maximize Largest Contentful Paint (LCP) performance.

2. **Image 2 (In-Body Contextual Image)**:
   - **Role**: Supporting editorial image demonstrating a concrete scenario, step-by-step process, property type, or material sorting phase.
   - **Placement**: Positioned midway through the article body (between the second and third body sections).
   - **Loading Directive**: Lazy loaded by default with responsive `sizes` attribute.

---

## 2. Image Sourcing Priority (Generate First, Stock Second)

Both images must be sourced in this strict order of priority. Never source an image from a lower priority when a higher one is available.

**Priority 1 — Generate the image yourself.**

- If image generation is available, generate a **unique, article-specific image** for each of the two slots.
- Each generated image must be genuinely relevant to that article's topic and to the Dubai reality rules in Section 3 — not a reused or near-duplicate render from another article.
- Prompt for the exact subject the article covers (the property type, the material, the step being described), at **1200 × 800 px (3:2)**, then compress to the targets in Section 4.

**Priority 2 — Existing Pexels / image sourcing workflow.**

- Fall back to the established stock sourcing workflow (Pexels / Unsplash) **only** when image generation is unavailable, or when generation cannot produce a suitable, relevant, on-brand image after a genuine attempt.
- Sourced images are held to the same relevance, dimension, format and alt-text standards as generated ones.

**Hard limit:** an article carries **exactly 2 images — never more**, regardless of which priority produced them. Mixing sources across the two slots (one generated, one sourced) is acceptable when generation only worked for one of them.

---

## 3. Image Relevance & Authenticity (Zero Generic Stock)

- **Must Reflect Dubai Reality**: Depict actual UAE living and working environments:
  - Luxury villa communities (Emirates Hills, Arabian Ranches, Palm Jumeirah, Dubai Hills).
  - High-rise residential towers and service elevators (Dubai Marina, JBR, Downtown, Business Bay).
  - Commercial offices and business parks (DIFC, Dubai Internet City, Dubai Design District).
  - Certified recycling and sorting facilities.
- **Banned Visuals**:
  - ❌ Generic American/European suburban houses with timber siding and open curbside lawns.
  - ❌ Giant commercial steel roll-off dumpsters not permitted in Dubai residential communities.
  - ❌ Cartoonish clip art, staged corporate handshakes, or irrelevant decorative graphics.
  - ❌ Low-resolution, blurry, or heavily watermarked images.

---

## 4. Format, Performance & Compression

- **Modern WebP Format**: All article images must be served in modern **WebP** (`.webp`) format (or optimized via Next.js Image optimization pipeline with automated WebP/AVIF transformation).
- **Target File Size**:
  - Hero Image (Image 1): `< 150 KB` compressed.
  - In-Body Image (Image 2): `< 100 KB` compressed.
- **Next.js `<Image>` Implementation**:

  ```tsx
  // Hero Cover Image (Image 1)
  <Image
    src={post.coverImage}
    alt={post.coverImageAlt}
    width={1200}
    height={800}
    priority
    className="h-auto w-full rounded-3xl object-cover shadow-card"
  />

  // In-Body Contextual Image (Image 2)
  <Image
    src={sectionImage.src}
    alt={sectionImage.alt}
    width={1200}
    height={800}
    sizes="(min-width: 1024px) 800px, 100vw"
    className="h-auto w-full rounded-2xl object-cover shadow-soft"
  />
  ```

---

## 5. Dimensions, Aspect Ratios & Zero Layout Shift (CLS = 0)

- **Standard Aspect Ratio**: **3:2 (1200 × 800 px)** across both Image 1 and Image 2 for visual consistency.
- **Explicit Dimensions**: Always supply explicit `width={1200}` and `height={800}` attributes to ensure browsers allocate exact layout space before download, preventing Cumulative Layout Shift (CLS).
- **Responsive Styling**: Use `w-full h-auto object-cover` within styled containers to guarantee perfect scaling across mobile, tablet, and desktop screens.

---

## 6. Alt Text Standards (Descriptive & SEO-Friendly)

Alt text must describe the visual content accurately for screen-reader accessibility while naturally reinforcing the article's topic.

### Golden Rules for Alt Text:

1. **Be Specific & Accurate**: Describe the subjects, action, equipment, and environment.
2. **Contextual Keyword Inclusion**: Weave the relevant topic phrase naturally into the sentence without stuffing.
3. **No Keyword Stuffing**: Never string disconnected keywords together.

### Examples:

- **Hero Image (Image 1)**:
  - ✅ **Good**: `alt="Uniformed EcoHaul crew carefully disassembling large sectional sofa for donation in a Dubai Marina apartment"`
  - ❌ **Bad**: `alt="junk removal dubai furniture removal sofa disposal"`
- **In-Body Image (Image 2)**:
  - ✅ **Good**: `alt="Organized sorting of cardboard, scrap metal, and electronics at a certified Dubai recycling facility"`
  - ❌ **Bad**: `alt="image 2 recycling waste dubai"`

---

## 7. Visual Style Consistency

- **Color Palette Alignment**: Imagery should complement EcoHaul Dubai’s primary brand palette:
  - Vibrant Forest Green accents (`#1f9d4d`).
  - Warm neutral surfaces (`#f8faf8` / `#f3f4f6`).
  - Slate charcoal text ink (`#111827`).
- **Container Styling**:
  - Rounded border radii: `rounded-3xl` for hero cover images; `rounded-2xl` for in-body images.
  - Subtle elevation: `shadow-card` or `shadow-soft` with clean borders (`border border-border/80`).

---

## 8. Pre-Publishing Image Verification Checklist

Before publishing any article, verify all 8 items:

- [ ] **Exact Count**: The article contains **exactly 2 images** (1 Hero + 1 In-Body) — never more.
- [ ] **Sourcing Priority**: Images were generated (Priority 1); the Pexels / stock sourcing workflow was used only where generation was unavailable or unsuitable (Priority 2).
- [ ] **Relevance**: Both images directly depict the subject matter and reflect genuine Dubai property/waste scenarios.
- [ ] **Format**: Assets are served in WebP format or optimized through Next.js Image loader.
- [ ] **Dimensions & Aspect Ratio**: Both images conform to **1200 × 800 px (3:2 ratio)** with explicit width/height to prevent layout shift.
- [ ] **Alt Text Quality**: Both images feature descriptive, screen-reader friendly alt text with zero keyword stuffing.
- [ ] **Performance**: Image 1 uses `priority`; Image 2 uses lazy loading with responsive `sizes`.
- [ ] **Visual Consistency**: Both images feature rounded corners (`rounded-3xl` / `rounded-2xl`) and shadow styling consistent with the design system.
