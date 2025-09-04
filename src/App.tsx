import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

const BlogIndex = lazy(() => import("./components/BlogIndex"));
const PostLoader = lazy(() => import("./components/PostLoader"));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<BlogIndex />} />
            <Route path="/post/:slug" element={<PostLoader />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
