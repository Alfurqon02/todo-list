# Design Direction: Mohammad Al Furqon Portfolio

## 1. Identity & Character
- **Subject**: Personal engineering and machine learning research portfolio for **Mohammad Al Furqon** (Software Engineer & ML Researcher, B.Sc. Informatics at Universitas Sebelas Maret, GPA 3.77/4.00).
- **Direction**: Chained 3D Hardware Monograph & Technical Index.
- **Core Concept**: A continuous 3D hardware signal bus connecting seven real engineering stations (00 Processor Core, 01 Seven Production Systems, 02 Dual-View DenseNet-LSTM Pipeline, 03 Four Operational Arenas, 04 Eleven Career Cartridges, 05 Six Technical Cassettes, 06 Direct Workstation Terminal), paired with a structured full-index dossier view.
- **Liveliness Dials**: `ENERGY 4` · `VARIANCE 4` · `MOTION 4` · `DENSITY 2` · `RHYTHM 3`.

## 2. Color Palette (Dark & Light Themes, WCAG AA Verified)

### Dark Theme (`:root.dark`)
| Token | Value | Contrast vs `#050a11` | One-Line Purpose (R-31) |
| :--- | :--- | :--- | :--- |
| `--cy-bg` | `#050a11` | — | Deep obsidian stage background that maximizes depth contrast for the 3D hardware bus |
| `--cy-panel` | `#091723` | — | Elevated hardware specification surface for role and system inspection cards |
| `--cy-text` | `#eaf3f9` | `17.1:1` (AAA) | High-legibility primary display and body text over the 3D viewport |
| `--cy-muted` | `#9caebc` | `8.2:1` (AAA) | Secondary narrative and engineering context copy |
| `--cy-dim` | `#7e94a4` | `5.6:1` (AA) | Monospace dates, chapter coordinates, and metadata |
| `--cy-accent` | `#45d7ff` | `11.8:1` (AAA) | Primary signal-bus trace color marking active chapters, selected ports, and focus outlines |

### Light Theme (`:root:not(.dark)`)
| Token | Value | Contrast vs `#e8eff2` | One-Line Purpose (R-31) |
| :--- | :--- | :--- | :--- |
| `--cy-bg` | `#e8eff2` | — | Daylight laboratory slate background for high-ambient reading environments |
| `--cy-panel` | `#f7fafb` | — | Elevated dossier and specification surface in light mode |
| `--cy-text` | `#102534` | `13.4:1` (AAA) | Primary headings and body copy |
| `--cy-muted` | `#395463` | `6.8:1` (AA) | Secondary narrative and role descriptions |
| `--cy-dim` | `#4d6776` | `5.1:1` (AA) | Monospace dates and metadata meeting WCAG AA 4.5:1 |
| `--cy-accent` | `#006c87` | `5.4:1` (AA) | High-contrast deep cyan-teal signal accent for light mode |

## 3. Typography (2 Font Families)
- **Primary Sans (`--cy-font`)**: `'Plus Jakarta Sans', 'Segoe UI', Arial, sans-serif` — geometric humanist sans chosen for clean display headlines and dense technical bullet lists.
- **Technical Monospace (`--cy-mono`)**: `'JetBrains Mono', monospace` — used strictly for station indices (`00`–`06`), system codes (`SYS-01`–`SYS-07`), date ranges, and hardware labels.

## 4. Purpose Log for Visual & Motion Decisions (R-01 to R-31)
- **3D Instanced Hardware Bus (`buildCyberWorld.ts`)**: Visualizes the user's real engineering work (CPU housing, 3-layer server rack with 7 endpoint ports, dual X-ray radiography frames + 5 DenseNet-LSTM feature planes, 4 domain hubs, 11 career cartridges, 6 skill cassettes, workstation terminal) as one connected machine rather than decorative shapes.
- **Chained Camera Spline & Damping (`CyberWorldCanvas.vue`)**: Guides the viewer along the Z-axis hardware bus from Station 00 to Station 06 with continuous exponential damping so scrolling is physically weighted and reversible.
- **Pre-Mounted Chapter Stages (`CyberJourneyExperience.vue`)**: Keeps all 7 chapter HUD panels mounted in the DOM so scrolling updates only GPU-composited `opacity` and `translate3d` without DOM teardown or layout jumps.
- **Full Index View (`PortfolioExperience.vue`)**: Provides a complete, non-3D reading ledger with varied section compositions (editorial profile, interactive 7-system master-detail explorer, 3-stage DenseNet-LSTM diagram, 4-arena table, 11-role career archive, and 6-cluster toolkit matrix).
