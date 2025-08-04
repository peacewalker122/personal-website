# AGENTS.md

## Build, Lint, and Test Commands
- **Start dev server:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Preview build:** `npm run preview`
- **Single test:** _No test script found; add tests and a test script for test support._

## Code Style Guidelines

- **Imports:** Use ES module syntax. Group external imports first, then local.
- **Formatting:** 2 spaces per indent. Prefer single quotes for strings except in JSX.
- **Types:** Use TypeScript everywhere. Prefer explicit types for props and state.
- **Naming:** Use PascalCase for components, camelCase for variables/functions, UPPER_SNAKE_CASE for constants.
- **Error Handling:** Use try/catch for async code. Handle errors gracefully in UI.
- **React:** Use function components and hooks. Props interfaces should be explicit.
- **JSX:** Use self-closing tags when possible. Indent nested elements.
- **Linting:** Follows ESLint recommended, TypeScript recommended, React Hooks, and Vite React Refresh rules.
- **Strictness:** TypeScript is strict; unused locals/params are errors.
- **File Structure:** Place components in `src/components/`. Styles in CSS files.
- **Accessibility:** Use `aria-*` attributes for interactive elements.
- **Comments:** Use JSDoc for functions/components if non-trivial.
