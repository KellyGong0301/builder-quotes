# Chrome Web Store — Listing Copy

Copy-paste these into the Web Store developer dashboard.

---

## Extension name (max 45 chars)

```
Daily Builder Quotes
```
*(20 / 45)*

---

## Summary (max 132 chars, shown in search results)

```
One builder quote per day, with plain-English unpacking. 365 gems from Lenny's Podcast — every new tab is a small reset.
```
*(125 / 132)*

---

## Detailed description (no hard limit, recommend < 2000 words)

```
Daily Builder Quotes replaces your new tab with one carefully chosen line from Lenny's Podcast — every day, a different one.

Each quote is real guest words: people who built Airbnb, Stripe, Linear, Slack, ChatGPT, Cursor, and a few hundred more. No platitudes, no AI-generated wisdom, no motivational pap.

Click "Read summary" to see:
  • What it means — plain-English unpacking, no jargon
  • The argument — how the guest actually backs it up in the episode
  • Why it matters — what to do about it on Monday morning

365 quotes, one for each day of the year. Year-independent: the same date next year shows the same quote.

WHO THIS IS FOR

Builders, founders, product people, designers, engineers — anyone who reaches for a useful idea before opening a new tab. Skip the doomscroll for ten seconds and re-anchor on what you're actually trying to do.

DETAILS

  • 100% offline after install — no API calls, no tracking, no analytics
  • Zero data collection. The extension doesn't read your browsing, doesn't phone home, doesn't store anything
  • Pure HTML + CSS + JS. No frameworks, no build step
  • Auto-scaling typography from 5 to 25 words
  • 30 hand-tuned color palettes that rotate
  • Keyboard: ← → for prev / next, R for shuffle, S to open summary, ESC to close
  • Open source: github.com/KellyGong0301/builder-quotes

CREDITS

All quotes come from Lenny Rachitsky's openly published podcast transcripts (lennysdata.com). Each one is attributed to the original guest and links back to the full episode on YouTube. This extension is not affiliated with or endorsed by Lenny Rachitsky.
```

---

## Category

```
Productivity
```

(Alternative: "Workflow & Planning" if available — "Productivity" is the broadest)

---

## Language

```
English (United States)
```

---

## Single Purpose statement (required for newtab override extensions)

```
Replace the browser's new tab page with a daily builder quote.
```

---

## Permission justification — required even if no permissions

The extension requests no permissions beyond the `chrome_url_overrides` declaration, which is implicit for new-tab override extensions.

If asked specifically about `chrome_url_overrides`:

```
The extension uses chrome_url_overrides → newtab to replace the default new tab page with a static HTML page (index.html) that displays a daily curated quote. No host permissions, no content scripts, no storage, no network requests beyond loading Google Fonts (Bricolage Grotesque and JetBrains Mono) from fonts.googleapis.com.
```

---

## Privacy practices

| Question | Answer |
|---|---|
| Personally identifiable info | None collected |
| Health info | None |
| Financial info | None |
| Authentication info | None |
| Personal communications | None |
| Location | None |
| Web history | None |
| User activity | None |
| Website content | None |

Disclosure paragraph:

```
This extension does not collect, store, transmit, or share any user data. It does not use cookies, local storage, IndexedDB, or any other persistence mechanism. The only network request made by the extension is to fonts.googleapis.com to load two web fonts; this request does not include user data and is subject to Google Fonts' standard privacy policy.
```

---

## Privacy policy URL (required)

Host a copy of `PRIVACY.md` (in the same folder) on a public URL — easiest is the GitHub repo:

```
https://github.com/KellyGong0301/builder-quotes/blob/main/PRIVACY.md
```

You'll need to commit `PRIVACY.md` to the repo first.

---

## Promotional images (optional but recommended)

| Asset | Dimensions | Status |
|---|---|---|
| Small promo tile | 440 × 280 | Make later — easy |
| Marquee promo tile | 1400 × 560 | Skip for now |
| Screenshots | 1280 × 800 | ✅ 4 prepared (`01-today.png` through `04-long.png`) |

---

## Tags / keywords (used internally by reviewers)

```
new tab, builder, founder, product management, lenny podcast, daily inspiration, motivation, productivity
```

---

## Upload checklist

- [ ] Pay $5 developer registration (one-time) at chrome.google.com/webstore/devconsole
- [ ] Click "New Item" → upload `dist/builder-quotes-extension.zip`
- [ ] Paste the name, summary, description above
- [ ] Upload the 4 screenshots from `store-assets/`
- [ ] Upload icon 128×128 (already in the ZIP, also available at `icons/icon-128.png`)
- [ ] Set category to Productivity
- [ ] Add the privacy policy URL once `PRIVACY.md` is on GitHub
- [ ] Submit for review
- [ ] Wait 1-3 business days
