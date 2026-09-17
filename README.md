## 📁 Complete Folder Structure
```
boldblog/
│
│  ── FILES I CREATED FOR YOU (copy these into your repo) ──
│
├── css/
│   └── style.css              ← ⭐ COMPLETE NEW STYLESHEET
├── js/
│   └── include.js             ← Updated: added scroll reveal logic
├── partials/
│   ├── header.html            ← New nav (uppercase, serif logo, thin rule)
│   └── footer.html            ← New footer (masthead grid + newsletter)
│
├── index.html                 ← ⭐ New homepage
├── about.html                 ← New about page
├── privacy.html               ← ⭐ NEW: Privacy Policy
├── terms.html                 ← ⭐ NEW: Terms of Service
├── 404.html                   ← New 404 page
├── sitemap.xml                ← Updated: includes privacy, terms, category pages
│
├── startups/
│   └── index.html             ← ⭐ NEW: Startups category page
├── ai-tools/
│   └── index.html             ← ⭐ NEW: AI Tools category page
├── tech-news/
│   └── index.html             ← ⭐ NEW: Tech News category page
│
│  ── FILES YOU ALREADY HAVE (keep as-is, they auto-style with new CSS) ──
│
├── images/
│   ├── logo.png               ← Your existing logo
│   ├── og-image.png           ← Open Graph social image
│   ├── startup-cover.png      ← Startup category cover
│   ├── ai-tools-cover.png     ← AI Tools cover
│   ├── ai-tools-cover-2.png   ← AI Tools alt cover
│   └── tech-news-cover.png    ← Tech News cover
│
├── startups/
│   ├── how-to-validate-startup-idea.html     ← Auto-styles with new CSS
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
│   ├── best-ai-tools-for-startups-2026.html
│   ├── ai-coding-assistants-compared-2026.html
│   ├── best-ai-agents-for-startups-2026.html
│   └── chatgpt-vs-claude-vs-gemini-founders.html
├── tech-news/
│   ├── ai-startup-funding-2026.html
│   ├── startup-accelerators-compared-2026.html
│   └── remote-vs-in-person-startups-2026.html
│
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── site.webmanifest
├── robots.txt
├── rss.xml
├── llms.txt
├── humans.txt
└── wrangler.toml              ← Cloudflare Pages config
```
## ✅ What's New (files you didn't have before)
| File | Purpose |
|------|---------|
| `privacy.html` | Full privacy policy — analytics, cookies, mailing list, data retention, your rights, GDPR-friendly |
| `terms.html` | Full terms of service — content ownership, disclaimers, AI review policy, liability limits |
| `startups/index.html` | Category listing page — all 10 startup articles with stagger animation |
| `ai-tools/index.html` | Category listing page — all 4 AI tool articles |
| `tech-news/index.html` | Category listing page — all 3 tech news articles |
## ⚠️ What You Still Need To Do
1. **Update each blog post's header** — Add a `.post-back` link before the `.post-tag`:
   ```html
   <a href="/startups/" class="post-back">← Startups</a>
   ```
   This gives readers a way back to the category page.
2. **Verify your blog posts look right** — The new CSS auto-styles all `.post-content` elements. Check that:
   - `h2` headings are now serif italic (this is intentional)
   - Blockquotes have a brown left border (not blue)
   - Links are brown `#8b5e3c` (not blue)
   - Table styles still work (border changed to `var(--rule)`)
3. **Update sitemap.xml** — I've included an updated version with the new pages. Replace your existing one.
4. **Update humans.txt** — Add the new pages to the inventory if you track them.
5. **Test on Cloudflare Pages** — Push all files and verify everything renders. The partials load via `fetch()` so they need to be on the same domain.

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