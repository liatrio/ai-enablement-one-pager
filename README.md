# The AI Daily - Liatrio x Anthropic Partnership Site

A scrolly-telling newspaper-style site built to pitch Anthropic on a Liatrio partnership.

## Running

Just open `index.html` in a browser:

```bash
open index.html
```

Or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

No build tools, no dependencies. Single HTML file with inline CSS and JS.

## Editing Content

All text content is mirrored in `content.md` for easy editing. Make your changes there, then update the corresponding sections in `index.html`.

## Files

- `index.html` -- The site (newspaper scrolly-telling version)
- `content.md` -- Editable text content for all sections
- `example_with_newspaper.html` -- Reference newspaper style from another project
