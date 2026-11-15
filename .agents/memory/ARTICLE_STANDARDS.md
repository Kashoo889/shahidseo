# Article Standards Index

Last verified: **2026-09-02**

The complete article rules remain canonical in:

1. `content-rules.md` — intent, keyword placement, cannibalization, editorial quality, linking, metadata, CTA and final QA.
2. `image-standards.md` — exactly two relevant 1200 × 800 images (1 featured + 1 in-body, never more), the generate-first / Pexels-fallback sourcing priority, descriptive alt text and Next.js image requirements.
3. `keywords.md` — approved keywords, intent and URL ownership.
4. `ARTICLE_REGISTRY.md` — published keyword-to-URL mappings and counts.

No article may publish unless it passes the final editorial checklist in `content-rules.md` and the eight-point image checklist in `image-standards.md`.

## Scheduled publishing

Set the publish date (`publishedAt`, `YYYY-MM-DD` in `data/blog.ts`) to a future date to schedule an article; it is deployed but stays hidden (404, not in listings/sitemap/feed) until that date (Asia/Dubai), then goes live automatically within ~1 hour. Logic: `lib/publish.ts` (`isPublished`).
