# Daily Builder Quotes

A new tab page that shows you one quote from [Lenny's Podcast](https://www.lennysnewsletter.com/podcast) every day — 365 of them, one for each day of the year.

Each poster has the quote in big type, the speaker's name and role, and a "Read more" button that unpacks what the quote means, how the guest argues for it, and what you (as a builder) should do about it on Monday morning.

![preview](preview.png)

## Install

### Option 1 — Chrome Web Store (coming soon)

Once the listing is approved, install with a single click. This page will link to it.

### Option 2 — Load unpacked (works today)

1. Click **Code → Download ZIP** above (or `git clone https://github.com/KellyGong0301/builder-quotes.git`)
2. Unzip it to anywhere on your machine
3. Open `chrome://extensions/` in Chrome / Edge / Brave
4. Toggle **Developer mode** (top-right)
5. Click **Load unpacked** and pick the unzipped folder
6. Open a new tab — you should see today's builder quote

## Hide the Chrome footer (one-time, recommended)

Chrome 138+ adds a small "Customize Chrome" bar at the bottom of every extension-overridden new tab — it cannot be suppressed by extension code. To hide it for good in your Chrome profile:

- Right-click the bar → **Hide footer on New Tab page**
- Or open Customize Chrome → toggle off **Show footer on New Tab page**

This is a per-profile Chrome setting, persistent. Every new-tab extension (Momentum, Daily Builder Quotes, etc.) is subject to the same Chrome behavior.

## Keyboard shortcuts

| Key | Action |
|---|---|
| `→` / `R` / `Space` | Next (random new quote you haven't seen this session) |
| `←` | Previous (walks back through what you've seen) |
| `S` | Open the Read more modal |
| `ESC` | Close the modal |

## Tech

- Pure HTML/CSS/JS — no build, no framework, no tracking
- 502KB total (index.html + posters.js with all 365 quotes + their unpackings)
- Auto-scaling typography for quotes from 5 to 25 words
- 30 hand-tuned color palettes cycled by index
- Stagger animation on quote entry, modal with backdrop blur

## Credits

All quotes are real guest words from [Lenny's Podcast](https://www.lennysnewsletter.com/podcast). Transcripts come from Lenny's open dataset at [LennysData.com](https://lennysdata.com/).

Each poster links to the full YouTube episode in the summary modal. This project is not affiliated with or endorsed by Lenny Rachitsky.

## License

MIT — see [LICENSE](LICENSE).
