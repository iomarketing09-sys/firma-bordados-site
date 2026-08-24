/** Design: Color que Trabaja — keep the staging experience focused as a single accessible corporate landing page. */
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";

export default function App() {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
}
