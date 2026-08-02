# Editorial brutalist styling boundary

The portfolio adopts editorial brutalism as its visual system across the homepage and project case studies. Reusable foundations such as tokens, reset rules, typography, shared layout primitives, accessibility fallbacks, and interaction effects stay in global CSS; page-specific composition and one-off styling use Tailwind utilities in JSX. This preserves locality for unique layouts while keeping the design language consistent and avoids introducing another styling dependency.

## Considered options

- Put all styling in global CSS: rejected because one-off rules would accumulate in a large, hard-to-navigate stylesheet.
- Move all styling to Tailwind utilities: rejected because tokens, preference fallbacks, shared primitives, and interaction effects would be duplicated across callers.

## Consequences

The redesign may change markup where a new layout needs it, but it must preserve semantic landmarks, accessible names, routes, content, and existing user flows. The fixed desktop section rail remains the navigation signature and becomes an overlay drawer on smaller screens.
