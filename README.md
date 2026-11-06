# SkillVault — Certification & Skills Tracker

A responsive, privacy-first certification and skills tracker. It is a static website for **GitHub Pages** and uses **Supabase Free** for passwordless sign-in and live, cross-device data sync.

## Publish in about 10 minutes

1. Create a free Supabase project. In **Authentication → URL Configuration**, set the Site URL to `https://YOUR_GITHUB_USERNAME.github.io/certification-skills-tracker/` and add the same URL as a Redirect URL.
2. In **SQL Editor**, run the complete contents of `supabase-schema.sql`.
3. Copy your Project URL and **anon public** key from **Project Settings → API** into `config.js`. Do not use or publish the `service_role` key.
4. Create a GitHub repository named `certification-skills-tracker`, upload these files, and push to `main`.
5. In GitHub, open **Settings → Pages**, select **GitHub Actions** as the source. The included workflow deploys the site.

Your verified URL will appear in the GitHub Actions deployment summary as `https://YOUR_GITHUB_USERNAME.github.io/certification-skills-tracker/`.

## Security model

- Sign-in uses Supabase magic links; no passwords are stored by this app.
- Supabase Row Level Security restricts every certification and skill to its owner.
- The browser uses only the public anon key. The privileged service-role key is never included.
- Real-time updates are enabled for both data tables, so open sessions update after changes on another device.
