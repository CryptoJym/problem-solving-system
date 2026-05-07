# GitHub Pages Playback Design

## Context

The README links to repo-hosted MP4 files, but those links do not consistently behave like inline players in GitHub's repository README view. The MP4 files are valid H.264 assets, so the safer fix is to put them on a static GitHub Pages page that can use browser-native `<video>` controls.

## Selected Approach

Publish the repository root through GitHub Pages and add a dependency-free `index.html` gallery. Root publishing keeps the existing `assets/skill-domain-videos/*.mp4` paths available without duplicating video files into `docs/`.

The page uses:

- static HTML
- static CSS
- vanilla JavaScript for the lesson theater playlist
- existing SVG images as posters
- existing MP4 files as video sources
- native browser controls

No SDK, framework, package install, or runtime is required.

## Media Architecture

The video generator now creates:

- narrated MP4 files in `assets/skill-domain-videos/`
- AAC voiceover files and transcript text in `assets/skill-domain-voiceovers/`
- 16:9 poster images in `assets/skill-domain-posters/`

The Pages site reads the checked-in media directly. The primary player swaps lessons through `site.js`, while the complete library remains available as direct MP4 links.

## Acceptance Criteria

- `index.html` renders a public media gallery.
- Every skill has a `<video controls>` element.
- Every video source points to the checked-in MP4 asset.
- README links to the GitHub Pages gallery for reliable playback.
- GitHub Pages is configured to deploy from `main` at `/`.
- Every MP4 includes an AAC audio stream.
