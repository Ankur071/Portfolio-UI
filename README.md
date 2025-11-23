# Portfolio UI

A clean, responsive developer portfolio for **Ankur Yadav** built with HTML5, Tailwind CSS (CDN), and lightweight vanilla JavaScript. The project focuses on performance, accessibility, and a professional presentation of experience, projects, skills, and contact information.

## Features
- Modern dark theme with subtle gradients and glass effects
- Responsive layout (mobile-first, adaptive navigation)
- Animated section entrances (CSS keyframes + utility classes)
- Project showcase with tech stack badges
- Skills grouped by category
- Contact section with copy‑to‑clipboard email utility
- Accessible semantic structure (sections + descriptive alt text)
- Easily deployable as a static site (GitHub Pages / Netlify / Vercel)

## Tech Stack
| Layer        | Technology                    | Notes |
|--------------|-------------------------------|-------|
| Markup       | HTML5                         | Semantic sections, anchor navigation |
| Styling      | Tailwind CSS (CDN) + custom CSS | Utility-first plus handcrafted effects in `styles.css` |
| Icons        | Font Awesome (CDN)            | Social + tech logos |
| Interaction  | Vanilla JS (`script.js`)      | Mobile menu, sticky nav, copy email |
| Versioning   | Git / GitHub                  | Conventional commit style |

## Getting Started
### 1. Clone the repository
```powershell
git clone https://github.com/Ankur071/Portfolio-UI.git
cd "Portfolio-UI"
```

### 2. Open Locally
Option A (direct): Double‑click `index.html` or open in browser.

Option B (live reload):
```powershell
npm install -g live-server  # optional if not installed
live-server
```
This serves the folder at `http://127.0.0.1:8080` and auto‑reloads on changes.

## Project Structure
```
Portfolio-UI/
├── index.html      # Main page markup
├── styles.css      # Custom styles + animations + scrollbar
├── script.js       # JS interactions (menu, scroll effect, copy email)
└── README.md       # Documentation
```

## Customization
| Area          | How to Modify |
|---------------|---------------|
| Colors        | Inline Tailwind config block in `<head>` |
| Hero Text     | Edit hero paragraph and metrics in `index.html` |
| Projects      | Duplicate a project card block and adjust text/links |
| Skills        | Add/remove skill-tag divs in Skills section |
| Animations    | Extend `.fade-in-up` or add new keyframes in `styles.css` |
| Avatar / Branding | Replace GitHub image URL with a personal asset |

## Deployment
### GitHub Pages
1. Commit all changes.
2. In repo settings, enable Pages → Source: `main` → root.
3. Site will appear at: `https://<username>.github.io/Portfolio-UI/`.

### Netlify / Vercel
- Drag & drop the folder or connect the Git repository; no build step required.

## Accessibility & Performance Notes
- Minimal JS footprint; no bundler overhead.
- Text contrasts tuned for dark background.
- Consider adding `loading="lazy"` if multiple images are introduced.
- Add Open Graph and Twitter meta tags for richer link previews (future enhancement).

## Conventional Commits Examples
```text
feat(projects): add Portfolio UI as fifth featured project
fix(nav): correct mobile menu toggle aria label
chore(css): remove unused animation delay classes
```

## Roadmap Ideas
- Add structured data (JSON-LD Person schema)
- Light mode toggle with `localStorage` persistence
- Expand projects into a dedicated page
- Integrate contact form (static form service)
- Optimize Tailwind via build pipeline (purge unused classes)

## License
This project is currently proprietary/personal. Add an open-source license (MIT/Apache) if you intend external contributions.

## Contributing
Feel free to fork and adapt. For formal contributions:
1. Create a branch: `git checkout -b feature/avatar-redesign`
2. Commit using conventional style.
3. Open a Pull Request.

## Author
**Ankur Yadav** – Full‑Stack Developer (Java / Spring Boot / Angular / React)

---
Questions or improvement ideas? Open an issue on the repository.
