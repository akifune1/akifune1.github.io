# Portfolio fonts

These fonts are self-hosted by `src/styles/index.css`. The original files and their licenses are retained without modification.

- Bricolage Grotesque: [Mathieu Triay / ateliertriay/bricolage](https://github.com/ateliertriay/bricolage), `fonts/webfonts/BricolageGrotesque-{Light,Regular,Medium,SemiBold}.woff2`. Local weights: 300, 400, 500, 600. License: `Bricolage-OFL.txt`.
- Junicode: [Peter S. Baker / psb1558/Junicode-font](https://github.com/psb1558/Junicode-font), `webfiles/JunicodeVF-{Roman,Italic}.woff2`. Local variable weights: 300–700. License: `Junicode-OFL.txt`.

Junicode uses weight 500 for headings. Bricolage Grotesque uses normal-width cuts with 400-weight reading copy and 500–600-weight emphasis. Only the upright display and regular body font are preloaded; other files load when used. Both families use `font-display: swap` and have local fallbacks. The light cut remains available in the repository.
