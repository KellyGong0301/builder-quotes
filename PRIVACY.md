# Privacy Policy — Daily Builder Quotes

**Last updated:** 2026-05-13

Daily Builder Quotes is a Chrome extension that replaces your new tab page with one curated quote per day.

## Data we collect

**None.**

The extension does not collect, store, transmit, log, or share any data about you, your browser, your browsing history, or the pages you visit. It does not use:

- Cookies
- IndexedDB / Web SQL
- Analytics (no Google Analytics, no telemetry of any kind)
- Crash reporting
- A/B testing or feature flags
- Account systems

**One local-only flag:** The extension stores a single key in your browser's `localStorage` named `bqOnboarded`. Its value is just `"1"` and it indicates that you've dismissed the first-install welcome screen. This flag never leaves your machine and is not associated with any identifier. You can clear it any time via your browser's site-data settings.

## Permissions we request

The extension requests **no Chrome permissions**. It uses only the `chrome_url_overrides` manifest field to register itself as the new tab page; this does not grant access to any user data.

There are no host permissions. The extension cannot read or modify any other web page.

## Network requests

The extension makes one type of network request: loading two web fonts (Bricolage Grotesque and JetBrains Mono) from `fonts.googleapis.com`. This is standard browser font-loading behavior. The request does not include any user identifiers or browsing data. Google's privacy policy for Google Fonts: https://policies.google.com/privacy

No other external resources are loaded. All quote data, layout code, and rendering logic ship inside the extension and run entirely on your machine.

## Quote content

The quotes displayed are excerpts from Lenny Rachitsky's openly published podcast transcripts (lennysdata.com). Each quote is attributed to the original guest speaker and links to the full episode on YouTube. The extension is not affiliated with or endorsed by Lenny Rachitsky.

When you click "Watch the full episode," your browser navigates to YouTube, which has its own privacy policy: https://policies.google.com/privacy

## Changes to this policy

If the extension's data practices ever change, this file will be updated with a new "Last updated" date, and the change will be announced in the extension's release notes on GitHub.

## Contact

Source code, issues, and questions: https://github.com/KellyGong0301/builder-quotes
