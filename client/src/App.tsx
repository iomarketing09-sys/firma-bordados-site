/** Design: Color que Trabaja — keep the staging experience focused as a single accessible corporate landing page. */
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import PrivacyNotice from "./pages/PrivacyNotice";

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  return (
    <ErrorBoundary>
      {path === "/privacidad" ? <PrivacyNotice /> : <Home />}
    </ErrorBoundary>
  );
}
