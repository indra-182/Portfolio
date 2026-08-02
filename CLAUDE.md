@AGENTS.md

## Agent skills

### Issue tracker

Issues are tracked in GitHub Issues using the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Use the default canonical triage labels: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, and `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

This is a single-context repository with root `CONTEXT.md` and `docs/adr/`. See `docs/agents/domain.md`.

## Portfolio UX reference

- The visual system is editorial brutalism across the homepage and project case studies: oversized type, sharp rules, rigid grids, flat surfaces, and warm paper, ink, and signal-orange tokens.
- Hero imagery is sourced from `public/Mahadi Indra - LinkedIn Photo.png` and rendered with `next/image` using a deliberate portrait crop and descriptive alt text.
- Keep `Download CV` in the hero and contact section, but do not add it to the global footer.
- `MouseGlow` is an optional decorative fine-pointer interaction. It must remain pointer-transparent, avoid replacing the cursor, and fall back off for coarse pointers or reduced-motion preferences.
