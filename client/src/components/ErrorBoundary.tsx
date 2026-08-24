/** Design: Color que Trabaja — retain a warm, direct recovery path even when the landing cannot render. */
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen items-center justify-center bg-[#fffaf3] p-6 text-[#123e75]">
          <section
            className="w-full max-w-xl border-l-8 border-[#df2b2c] bg-white p-8 shadow-[0_18px_50px_rgba(13,76,158,0.12)] sm:p-10"
            aria-labelledby="error-title"
          >
            <AlertTriangle
              size={48}
              className="mb-6 text-[#df2b2c]"
              aria-hidden="true"
            />

            <h1 id="error-title" className="font-display text-3xl font-extrabold tracking-tight">
              Esta página necesita recargarse.
            </h1>

            <p className="mt-4 max-w-lg text-base leading-7 text-[#365676]">
              Ocurrió un problema temporal al mostrar el contenido. Recarga la página para intentarlo de nuevo.
            </p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-7 inline-flex items-center gap-2 bg-[#df2b2c] px-5 py-3 font-bold text-white transition hover:bg-[#bd2022] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#f3bd25]"
            >
              <RotateCcw size={16} />
              Recargar página
            </button>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
