import { Suspense, lazy } from 'react';
import { SkipToContent } from './components/SkipToContent';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';

const About = lazy(() => import('./sections/About').then((m) => ({ default: m.About })));
const Skills = lazy(() => import('./sections/Skills').then((m) => ({ default: m.Skills })));
import { Projects } from './sections/Projects';
const Experience = lazy(() => import('./sections/Experience').then((m) => ({ default: m.Experience })));
const Education = lazy(() => import('./sections/Education').then((m) => ({ default: m.Education })));
const DevOps = lazy(() => import('./sections/DevOps').then((m) => ({ default: m.DevOps })));
const Contact = lazy(() => import('./sections/Contact').then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import('./sections/Footer').then((m) => ({ default: m.Footer })));

function SectionSkeleton({ minHeight = 'min-h-[500px]' }: { minHeight?: string }) {
  return (
    <div
      className={`w-full max-w-6xl mx-auto px-4 md:px-8 py-20 ${minHeight} flex flex-col justify-center animate-pulse`}
      aria-hidden="true"
    >
      <div className="h-4 w-28 bg-surface-2 rounded mb-3" />
      <div className="h-8 w-64 bg-surface rounded mb-4" />
      <div className="h-4 w-96 bg-surface-2/60 rounded mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="h-48 bg-surface rounded-xl border border-border/50" />
        <div className="h-48 bg-surface rounded-xl border border-border/50" />
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <SkipToContent />
      <ScrollProgressBar />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Projects />
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[600px]" />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[500px]" />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[600px]" />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[500px]" />}>
          <Education />
        </Suspense>
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[600px]" />}>
          <DevOps />
        </Suspense>
        <Suspense fallback={<SectionSkeleton minHeight="min-h-[500px]" />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-32 bg-surface/50" aria-hidden="true" />}>
        <Footer />
      </Suspense>
      <ScrollToTop />
    </>
  );
}

export default App;
