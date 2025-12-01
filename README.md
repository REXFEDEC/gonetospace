# GoNetoSpace

A personal portfolio website for Sameer Mann - a creative digital space showcasing thoughts, creative works, and professional interests.

## Project Overview

GoNetoSpace is a modern, interactive personal portfolio website featuring a clean design with engaging animations and a unique user experience. The site includes a hidden Konami Code easter egg that activates a magnetic effect, making elements repel from the cursor for a playful interaction.

## Features

- **Personal Portfolio**: Showcases Sameer Mann's digital presence and creative works
- **Multi-Section Layout**: Blog, Music, Movies, and Photography sections
- **Interactive Design**: Smooth animations, hover effects, and glass morphism styling
- **Konami Code Easter Egg**: Enter ↑↑↓↓←→←→BA to activate magnetic cursor effects
- **Responsive Design**: Fully responsive layout that works on all devices
- **Professional Link**: Direct link to professional portfolio at sameer.goneto.space

## Sections

- **Home**: Landing page with interactive cards linking to different sections
- **Blog**: Collection of thoughts and stories on design, photography, and gaming
- **Music**: Music recommendations and personal soundtrack
- **Movies**: Film reviews and cinema recommendations  
- **Photography**: Visual portfolio of captured moments
- **Professional**: Link to professional work and details

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with shadcn/ui components and glass morphism effects
- **State Management**: React Query (@tanstack/react-query)
- **Routing**: React Router DOM
- **Icons**: Lucide React and Hacker Noon Pixel Icon Library
- **UI Components**: Radix UI primitives
- **Animations**: Custom CSS animations with fade-in and slide-up effects

## Interactive Features

- **Glass Morphism Design**: Modern frosted glass effect throughout the UI
- **Smooth Animations**: Staggered fade-in and slide-up animations on page load
- **Hover Effects**: Interactive cards with transform and shadow effects
- **Konami Code**: Hidden feature (↑↑↓↓←→←→BA) that activates magnetic cursor repulsion
- **Responsive Navigation**: Mobile-friendly hamburger menu with slide-out drawer

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gonetospace
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

### Try the Konami Code

Once the site is loaded, try entering the Konami Code: ↑↑↓↓←→←→BA
Watch as elements start repelling from your cursor!

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── InteractiveCard.tsx
│   ├── Navbar.tsx
│   └── Typewriter.tsx
├── pages/              # Page components
│   ├── Home.tsx        # Landing page with card grid
│   ├── Blog.tsx        # Blog posts with modal view
│   ├── Music.tsx       # Music collection
│   ├── Movies.tsx      # Movie recommendations
│   ├── Photography.tsx # Photo gallery
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
└── styles/             # Global styles and CSS animations
```

## Key Components

- **InteractiveCard**: Reusable card component with hover effects and animations
- **Navbar**: Fixed navigation with scroll effects and mobile menu
- **Typewriter**: Animated text effect for the homepage
- **Glass Morphism**: Custom styling for frosted glass effects throughout

## Content Structure

- **Blog**: Features posts on design minimalism, photography, and indie gaming
- **Music**: Personal music collection and recommendations
- **Movies**: Curated film selections and reviews
- **Photography**: Visual portfolio with image galleries
- **Professional**: External link to sameer.goneto.space

## Features

- Responsive design that works on all devices
- Modern glass morphism UI with smooth animations
- Type-safe development with TypeScript
- Optimized build with Vite
- Component-based architecture
- Interactive easter eggs and animations
- Mobile-first responsive navigation

## Deployment

To deploy this application:

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider

The build will create optimized static files in the `dist` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
