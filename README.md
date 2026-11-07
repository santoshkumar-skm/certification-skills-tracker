# SkillVault â€” NVIDIA Omniverse Learning Tracker

A responsive static application hosted on GitHub Pages, with Supabase password sign-in and owner-only cloud records. No email-link sign-in is used.

## Learning plan

The user-specified five-phase plan contains 5 ordered tracks, 30 study modules, 120 weighted sub-topics, 26 planned weeks (personal study allocations), and a 390-hour study target. The sequence follows the supplied course titles. Provider resources are linked per sub-topic. Supporting resources are labeled where an exact session link is unconfirmed. Practice quizzes are locally authored study aids, not official exam questions. Each module offers topic checkboxes, a recommended preceding module, and an official NVIDIA learning resource. Separate views show weekly planning, practical projects, progress, and study history. Weeks indicate suggested starting weeks; practice can continue across weeks.

Existing credentials and manually added skills remain available, with edit and delete controls. Only credentials entered by the user appear as earned certifications.

## Authentication and synchronization

- Supabase persists the session in this browser and refreshes its tokens. Closing and reopening the browser normally retains sign-in. Clearing browser storage, private browsing, or a server-side session revocation can require another sign-in.
- Sign out revokes this device's session and clears its displayed private data. Other devices remain signed in.
- In Supabase Authentication, enable the Email provider and account signup, and disable Confirm email for the requested email-free password signup flow.
- Run `supabase-schema.sql` once when setting up a new database. Existing deployments need no migration for this roadmap update.
- Owner-only Row Level Security applies to both tables. Realtime subscriptions refresh changes from other devices. Refresh data, returning to the page, and reconnecting also fetch current records.

## Data compatibility

To work with the deployed schema without a privileged database migration, roadmap progress and study entries use reserved `@sv1/` names in the existing `skills` table. Normal skills are displayed separately. Topic IDs are deterministic per account and topic, so repeated updates do not create duplicates. Study entries have independent IDs and store module, date, and minutes in their reserved names. Their lengths remain within the existing 100-character constraint. These records use the same owner-only policies and realtime publication as manual skills.

## Configuration and deployment

`config.js` contains only the Supabase URL and public publishable key; never include a service-role key. The established repository publishes `main` to GitHub Pages. The included workflow also supports deployments through GitHub Actions when configured as the Pages source.

## Validation

Run `node --test tests/workspace.test.cjs` and `node --check app.js` (also check `learning.js` and `roadmap.js`). Tests exercise session restoration and refresh events, roadmap views and totals, saved progress across reloads, account isolation, study totals, sign-out cleanup, sync/write errors, existing skill updates, and safe credential URLs using a simulated database and DOM. These do not substitute for a real signed-in browser test of production authentication and cross-device delivery.

The floating roadmap uses orange for started/current, green for complete, and grey for pending modules. Quiz scores sync separately from weighted topic completion. Resource HTTP checks are recorded in resource-verification.json; HTTP availability does not verify enrollment eligibility. Version 2 course IDs intentionally do not reuse completion flags from the earlier proposed syllabus. Earlier records remain stored.

## Expandable catalog and assessments

There is no fixed module cap. Counts, totals, scheduling and roadmap arrows derive from the catalog. The current expansion has 38 main topics and 246 sub-topics, including the linked OpenUSD lesson outline. This is a maintained study catalog, not a claim to exhaust every evolving provider syllabus.

Each topic and sub-topic carries a specific path ID. NVIDIA OpenUSD preparation maps to NCP-OUSD; the other existing courses map to their named course paths, not an invented professional certification. Existing IDs and completion records remain intact.

Sub-topic quiz popups select 15 questions from curated domain question banks, ranking related concepts against the selected sub-topic. Related sub-topics share prerequisite questions. These are practice questions, not official exam questions or 3,690 independently authored questions. Stable selection and option ordering preserve per-question answers across reloads. First submitted answers are retained for review. Results do not automatically mark learning complete. Backend reads are paginated for large histories.

The catalog can grow by appending stable IDs, source URLs, path IDs and positive weights totaling 100 per module. Register an appropriate question bank for any new domain rather than assigning unrelated questions. Updating question semantics requires a new answer-key version to prevent stale attempts being reinterpreted.

## Profile, theme and quiz retakes

The top-right Profile menu includes section shortcuts, Data Refresh, Set / Reset Password, Sign Out and the theme switch. Password changes use the signed-in account. Light/dark preference is saved on this browser and applies to the sign-in page, dashboard and dialogs.

Reset Quiz beside the sub-topic statistics clears only that account’s answers for that quiz after confirmation. Other quizzes and learning completion are preserved. Failed resets retain the saved answers.
