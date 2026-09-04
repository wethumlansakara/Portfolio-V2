# Wethum Lansakara Portfolio

Personal portfolio website for Wethum Lansakara, an AI Engineer and Machine Learning Developer. The site showcases projects, technical skills, education, experience, certifications, and contact links.

## Live Website

[wethumlansakara.github.io/Portfolio-V2](https://wethumlansakara.github.io/Portfolio-V2/)

- React
- Vite
- Tailwind CSS
- Framer Motion
- Devicon and Simple Icons

## Run Locally

Requirements:

- Node.js 22 or later
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The development site will be available at the local URL shown in the terminal.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run Oxlint
```

## Project Structure

```text
src/
	components/    Reusable portfolio sections and modals
	data/          Portfolio content and skill configuration
	assets/        Imported profile, education, and certification assets
public/
	images/        Project and certificate images
```

## Deployment

The project deploys automatically to GitHub Pages through GitHub Actions whenever changes are pushed to the `main` branch.

The workflow is located at `.github/workflows/deploy.yml`. It builds the Vite app with the repository base path and publishes the `dist` directory.

For a new repository, set **Settings -> Pages -> Build and deployment -> Source** to **GitHub Actions**.

## Updating Portfolio Content

Most text, project details, links, and certificate entries can be updated in `src/data/portfolio.js`. Component layout and styling are located in `src/components/` and `src/index.css`.


