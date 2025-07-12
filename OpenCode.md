# OpenCode Memory

## Build/Test/Lint Commands
- **Dev**: `npm run dev` - Start Vite dev server with HMR
- **Build**: `npm run build` - TypeScript compile + Vite build for production
- **Lint**: `npm run lint` - Run ESLint on all TS/TSX files
- **Typecheck**: `npm run typecheck` - Run TypeScript type checking without emitting
- **Preview**: `npm run preview` - Preview production build locally

## Code Style Guidelines

### React Components (TypeScript)
- Use functional components with hooks (useState, useEffect)
- Component files: PascalCase with .tsx extension (e.g., `Navbar.tsx`, `BlogCard.tsx`)
- Props typed with interfaces: `interface NavbarProps { title: string; }`
- Props destructured in function parameters: `function Navbar({ title }: NavbarProps)`
- Default exports for components

### Imports
- React hooks imported from "react" first
- Local CSS imports after React imports
- Component imports use relative paths with explicit .tsx filenames
- Asset imports use relative paths from src/assets

### TypeScript Conventions
- Interface names: PascalCase (e.g., `BlogCardProps`, `Post`)
- Optional props marked with `?` in interfaces
- Strict type checking enabled with noUnusedLocals/noUnusedParameters
- Use `undefined` instead of `null` for optional values

### Naming Conventions
- camelCase for variables, functions, props
- PascalCase for components, interfaces, and component files
- kebab-case for CSS classes (Tailwind)
- Descriptive prop names (title, description, imageUrl, author, date)

### Error Handling
- Use ErrorBoundary from react-error-boundary for component error handling
- Fallback UI provided for error states

### Styling
- Tailwind CSS for all styling
- Responsive design with sm: breakpoint prefixes
- Custom xs breakpoint defined for 375px+ screens
- Semantic HTML elements (nav, main, section)
