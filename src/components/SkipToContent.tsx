export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-accent-primary focus:text-black focus:font-semibold focus:text-sm focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white transition-all duration-150"
    >
      Skip to main content
    </a>
  );
}
