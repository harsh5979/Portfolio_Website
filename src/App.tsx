import { Suspense, lazy } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';

const About = lazy(() => import('./sections/About').then((m) => ({ default: m.About })));
const Skills = lazy(() => import('./sections/Skills').then((m) => ({ default: m.Skills })));
const Projects = lazy(() => import('./sections/Projects').then((m) => ({ default: m.Projects })));
const Experience = lazy(() => import('./sections/Experience').then((m) => ({ default: m.Experience })));
const Education = lazy(() => import('./sections/Education').then((m) => ({ default: m.Education })));
const DevOps = lazy(() => import('./sections/DevOps').then((m) => ({ default: m.DevOps })));
const Contact = lazy(() => import('./sections/Contact').then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import('./sections/Footer').then((m) => ({ default: m.Footer })));

function SectionFallback() {
  return (
    <div className="flex items-center justify-center py-32" aria-hidden="true">
      <div className="w-6 h-6 rounded-full border-2 border-accent-primary border-t-transparent animate-spin" />
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <DevOps />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ScrollToTop />
    </>
  );
}

export default App;
