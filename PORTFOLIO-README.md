# Garis 2 Architect Portfolio

A modern, static architecture portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Project Structure

```
app/
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Navigation header
│   │   └── Footer.tsx       # Site footer
│   ├── sections/
│   │   └── Hero.tsx         # Hero section component
│   └── ui/
│       ├── Button.tsx       # Reusable button component
│       └── ProjectCard.tsx  # Project card component
├── data/
│   └── index.ts            # Static data (projects, services, etc.)
├── lib/
│   ├── animations.ts       # Framer Motion animation variants
│   └── utils.ts           # Utility functions
├── types/
│   └── index.ts           # TypeScript type definitions
├── about/
│   └── page.tsx           # About page
├── contact/
│   └── page.tsx           # Contact page
├── projects/
│   ├── page.tsx           # Projects listing page
│   └── [slug]/
│       └── page.tsx       # Individual project pages
├── layout.tsx             # Root layout with header/footer
├── page.tsx              # Homepage
└── globals.css           # Global styles

public/
├── images/
│   ├── projects/         # Project images
│   ├── hero/            # Hero section images
│   └── about/           # About page images
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your Content

#### Update Project Data
Edit `app/data/index.ts` to add your actual projects:
- Replace sample projects with your portfolio projects
- Add project images to `public/images/projects/`
- Update contact information and social media links

#### Add Your Images
- Place project images in `public/images/projects/`
- Add hero images in `public/images/hero/`
- Include about page images in `public/images/about/`

#### Customize Content
- Update `app/about/page.tsx` with your biography and experience
- Modify `app/contact/page.tsx` with your contact details
- Customize the hero section in `app/components/sections/Hero.tsx`

### 3. Styling
The website uses Tailwind CSS for styling. You can:
- Customize colors in `tailwind.config.js`
- Modify component styles directly in the JSX files
- Add custom CSS in `app/globals.css`

### 4. Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website.

### 5. Build for Production (Static Export)
```bash
npm run build
```

## Features

- ✅ **Responsive Design** - Works on all devices
- ✅ **Static Generation** - Fast loading, SEO-friendly
- ✅ **Smooth Animations** - Powered by Framer Motion
- ✅ **TypeScript** - Type-safe code
- ✅ **Modern Stack** - Next.js 15, React 19, Tailwind CSS
- ✅ **Project Showcase** - Dynamic project pages
- ✅ **Contact Form** - Ready for form handling integration

## Customization

### Adding New Projects
1. Add project data to `app/data/index.ts`
2. Add project images to `public/images/projects/`
3. The project pages will be automatically generated

### Changing Colors/Branding
1. Update Tailwind colors in component files
2. Modify the logo/brand name in `Header.tsx`
3. Update metadata in `app/layout.tsx`

### Adding New Pages
Create new folders in the `app/` directory following Next.js App Router conventions.

## Deployment

This is a static website that can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

For static export, ensure you configure `next.config.ts` for your deployment target.

## Support

This portfolio template provides a solid foundation for showcasing architectural work. Customize the content, images, and styling to match your brand and projects.