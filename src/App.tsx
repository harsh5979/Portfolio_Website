import { SkipToContent } from './components/SkipToContent';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';

import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { DevOps } from './sections/DevOps';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <>
      <SkipToContent />
      <ScrollProgressBar />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Education />
        <DevOps />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
