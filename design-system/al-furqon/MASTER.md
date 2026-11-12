# Design System Master: Mohammad Al Furqon Portfolio

## 1. Design Read & Aesthetic Direction
- **Subject**: Personal engineering and machine learning research portfolio for **Mohammad Al Furqon** (Software Engineer & ML Researcher from Indonesia with experience in Indonesia, Japan, and Taiwan).
- **Direction**: Technical Monograph & Architectural Dossier.
- **Liveliness Dials**: `VARIANCE 4` · `MOTION 4` · `DENSITY 2` · `RHYTHM 3`.

## 2. Color Tokens (Dark & Light Themes, WCAG AA Verified)

### Dark Theme (`:root` / `.dark`)
| Token | Value | Contrast vs `#0c0f0d` | Usage |
| :--- | :--- | :--- | :--- |
| `--fs-bg` | `#0c0f0d` | — | Primary warm carbon background |
| `--fs-surface` | `#121714` | — | Card and specification surface |
| `--fs-surface-2` | `#171d19` | — | Elevated dossier and modal surface |
| `--fs-text` | `#edeee9` | `16.52:1` (AAA) | Primary headings and body copy |
| `--fs-muted` | `#b4bdb7` | `10.01:1` (AAA) | Secondary narrative and role copy |
| `--fs-dim` | `#8f9a93` | `6.62:1` (AA) | Monospace metadata and periods |
| `--fs-accent` | `#b8e892` | `13.76:1` (AAA) | Primary botanical-mineral signal accent |
| `--fs-on-accent` | `#09140c` | `13.43:1` vs `#b8e892` | Text on filled primary buttons |

### Light Theme (`:root:not(.dark)`)
| Token | Value | Contrast vs `#f2efe9` | Usage |
| :--- | :--- | :--- | :--- |
| `--fs-bg` | `#f2efe9` | — | Warm archival stone background |
| `--fs-surface` | `#e8e4dc` | — | Card and specification surface |
| `--fs-surface-2` | `#fbfaf7` | — | Elevated dossier and modal surface |
| `--fs-text` | `#161c18` | `15.08:1` (AAA) | Primary headings and body copy |
| `--fs-muted` | `#3d4741` | `8.41:1` (AAA) | Secondary narrative and role copy |
| `--fs-dim` | `#525e57` | `5.91:1` (AA) | Monospace metadata and periods |
| `--fs-accent` | `#1f5934` | `7.21:1` (AAA) | Deep forest verdigris accent |
| `--fs-on-accent` | `#f7f6f2` | `7.66:1` vs `#1f5934` | Text on filled primary buttons |

## 3. Typography (2 Font Families Maximum)
- **Primary Display & Body (`--fs-font`)**: `'Plus Jakarta Sans', system-ui, -apple-system, sans-serif`
- **Technical Monospace (`--fs-mono`)**: `'JetBrains Mono', ui-monospace, monospace`

## 4. Layout & Motion Architecture
- **Case-Study Ledger**: Replaces generic Bento Grid mosaics with an asymmetric featured architectural deep-dive (`01 · Meiwa Industry Japan`) paired with a structured 3-row engineering dossier (`02 · DISPERKIMTAN Bontang City`, `03 · Paragon Technology and Innovation`, `04 · Rapixus Taiwan`).
- **Scroll Synchronization**: Single Lenis smooth-scroll instance (`lerp: 0.08`) broadcasting sub-pixel `scroll` and `velocity` via `onSmoothScroll` to the sticky Research Pipeline (`ResearchPipeline.vue`), timeline progress rail (`useFlagship.ts`), and 3D GPU particle formations (`ParticleJourneyExperience.vue` + `ParticleWorld.vue`).
