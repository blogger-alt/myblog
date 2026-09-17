# BoldBlog — Magazine Editorial Theme
## 📁 Folder Structure
```
boldblog/
├── css/
│   └── style.css              ← Main stylesheet (magazine editorial theme)
├── js/
│   └── include.js             ← Header/footer partials + scroll reveal animations
├── partials/
│   ├── header.html            ← Shared nav (loaded via JS)
│   └── footer.html            ← Shared footer + newsletter (loaded via JS)
├── images/
│   ├── logo.png               ← Your existing logo (28×28 or 32×32)
│   ├── og-image.png           ← Open Graph social image
│   ├── startup-cover.png      ← Startup category cover image
│   ├── ai-tools-cover.png     ← AI Tools category cover image
│   ├── ai-tools-cover-2.png   ← AI Tools alt cover image
│   └── tech-news-cover.png    ← Tech News category cover image
├── startups/
│   ├── index.html             ← Startup category page
│   ├── how-to-validate-startup-idea.html
│   ├── why-startup-directories-matter-2026.html
│   ├── how-to-write-startup-pitch-deck.html
│   ├── startup-equity-splitting-guide.html
│   ├── equity-for-employees-and-advisors.html
│   ├── how-to-find-investors-for-startup.html
│   ├── seed-funding-vs-bootstrapping.html
│   ├── startup-valuation-explained.html
│   ├── safe-vs-convertible-note.html
│   └── startup-runway-calculation-guide.html
├── ai-tools/
│   ├── index.html             ← AI Tools category page
│   ├── best-ai-tools-for-startups-2026.html
│   ├── ai-coding-assistants-compared-2026.html
│   ├── best-ai-agents-for-startups-2026.html
│   └── chatgpt-vs-claude-vs-gemini-founders.html
├── tech-news/
│   ├── index.html             ← Tech News category page
│   ├── ai-startup-funding-2026.html
│   ├── startup-accelerators-compared-2026.html
│   └── remote-vs-in-person-startups-2026.html
├── index.html                 ← Homepage
├── about.html                 ← About page
├── 404.html                   ← 404 page
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── site.webmanifest
├── robots.txt
├── sitemap.xml
├── rss.xml
├── llms.txt
├── humans.txt
└── wrangler.toml              ← Cloudflare Pages config
```
## 🎨 Design System — What Changed
### Before → After
| Element | Old (Intercom-style) | New (Magazine Editorial) |
|---------|---------------------|-------------------------|
| **Headlines** | Sans-serif, 800 weight | **Serif** (Georgia), 400 weight, italic in prose |
| **Accent color** | Blue `#3B5FE0` | **Warm brown** `#8b5e3c` |
| **Background** | Cream `#f5f3ee` | Cream `#faf8f5` (warmer) |
| **Nav links** | 0.95rem, bold | **11px uppercase, 0.15em tracking** |
| **Cards** | White bg, border, shadow on hover, translateY(-3px) | **No border, no shadow, no transform** — clean |
| **Section labels** | None | **"FEATURED ─────"** magazine style |
| **Dividers** | `<hr>` with border-top | **1px warm rules** (`var(--rule)`) |
| **Category tags** | Blue, uppercase, 0.75rem | **Brown, uppercase, 10px, 0.2em tracking** |
| **Meta text** | 0.8rem, secondary color | **11px, var(--ink-faint)** |
| **Newsletter** | None | **Personal quote + border-bottom input** |
| **Footer** | Simple centered links | **Magazine masthead grid** |
| **Animations** | hover translateY + shadow | **Scroll reveal** with spring easing, image scale on hover |
### Key Design Principles (from Radical Face)
1. **Magazine design** — sections with labels and extending horizontal rules
2. **Serif headlines** — the single biggest "human editorial" signal
3. **Generous margins** — content breathes, `padding: 80px` sections
4. **Thin rules** — 1px dividers, never thick borders
5. **Uppercase labels** — 11px, 0.2em tracking — magazine section markers
6. **Warm palette** — cream + ink + single brown accent, no blue
7. **Slow hover** — 0.8s cubic-bezier for image zoom, 0.2s for color changes
8. **Personal voice** — newsletter quote, not corporate CTA
## 📋 How to Update Your Existing Blog Posts
For each blog post HTML file (e.g. `startups/how-to-validate-startup-idea.html`), update the structure to:
```html
<div class="post-single">
  <a href="/startups/" class="post-back">← Startups</a>
  <span class="post-tag">Startups</span>
  <h1 class="post-title">Your Post Title</h1>
  <p class="post-excerpt">Your excerpt here.</p>
  <div class="post-meta">
    <span class="author-name">Author Name</span>
    <span>Sep 9, 2026</span>
    <span>8 min read</span>
  </div>
  <div class="post-content">
    <!-- Your existing post content stays the same -->
    <!-- h2, h3, p, blockquote, ul, ol all work with new styles -->
  </div>
</div>
```
**Key changes per blog post:**
- Remove any `class="hero-section"` or hero area
- Add `class="post-back"` for the back link
- Change `class="post-title"` (already exists, just make sure it's there)
- Remove `class="card-image"` / featured image if you don't want images
- All `.post-content` children auto-style with the new serif/italic headings
## 📋 How to Create Category Index Pages
Create `startups/index.html`, `ai-tools/index.html`, `tech-news/index.html` with this structure:
```html
<div id="header-placeholder"></div>
<div class="category-header">
  <span class="cat-label">Category</span>
  <h1>Category Name</h1>
  <p class="cat-desc">Description text.</p>
  <p class="cat-count">X articles</p>
</div>
<div class="rule" style="max-width:var(--max-width); margin:0 auto;"></div>
<section class="post-grid-section">
  <div class="post-grid">
    <!-- Same post-card structure as homepage -->
  </div>
</section>
<div id="footer-placeholder"></div>
<script src="/js/include.js"></script>
```
## 🚀 Deployment
### Cloudflare Pages (current setup)
1. Replace the files in your repo with these new files
2. Keep all existing files that aren't overwritten (favicons, images, blog posts)
3. Push to git — Cloudflare Pages auto-deploys
### No build step needed
This is plain HTML + CSS + JS. No npm, no build, no framework.
## ⚡ Scroll Reveal Animation
The `include.js` now includes an IntersectionObserver that adds `.visible` to elements with these classes:
- `.reveal-up` — fades up from 20px below
- `.reveal-fade` — fades in only
- `.reveal-left` — slides from left
- `.stagger` — children appear one by one with 70ms delay
- `.hero-reveal` — for hero elements on page load
Add the inline `<style>` block from `index.html` to any page that uses reveal animations.
## 🔧 Color Reference
```
--cream:        #faf8f5   (main background)
--cream-dark:   #f0ede7   (card/image placeholder bg)
--ink:          #1a1a1a   (primary text)
--ink-light:    #4a4a4a   (body text in prose)
--ink-lighter:  #6b6b6b   (secondary text)
--ink-faint:    #9a9a9a   (meta text, labels)
--ink-ghost:    #c4c4c4   (placeholders, disabled)
--rule:         #ddd8d0   (borders, dividers)
--accent:       #8b5e3c   (warm brown — links, tags)
--accent-hover: #a06f48   (hover state)
--accent-muted: rgba(139,94,60,0.1)  (subtle accent bg)
```