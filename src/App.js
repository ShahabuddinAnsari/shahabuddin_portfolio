import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import Skills     from './components/Skills';
import Experience from './components/Experience';
import Projects   from './components/Projects';
import YouTube    from './components/YouTube';
import Blog       from './components/Blog';
import Learning   from './components/Learning';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

function App() {
  useScrollReveal();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr style={{ border: 'none', borderTop: '1px solid #1e1e2e' }} />
        <Skills />
        <hr style={{ border: 'none', borderTop: '1px solid #1e1e2e' }} />
        <Experience />
        <hr style={{ border: 'none', borderTop: '1px solid #1e1e2e' }} />
        <Projects />
        <hr style={{ border: 'none', borderTop: '1px solid #1e1e2e' }} />
        <YouTube />
        <hr style={{ border: 'none', borderTop: '1px solid #1e1e2e' }} />
        <Blog />
        <hr style={{ border: 'none', borderTop: '1px solid #1e1e2e' }} />
        <Learning />
        <hr style={{ border: 'none', borderTop: '1px solid #1e1e2e' }} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
