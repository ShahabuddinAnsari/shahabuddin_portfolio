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
        <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)' }} />
        <Skills />
        <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)' }} />
        <Experience />
        <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)' }} />
        <Projects />
        <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)' }} />
        <YouTube />
        <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)' }} />
        <Blog />
        <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)' }} />
        <Learning />
        <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)' }} />
        {/* Profile photo — mobile only, above contact */}
        <div className="flex justify-center py-12 md:hidden">
          <img
            src="/shahab.png"
            alt="Shahabuddin Ansari"
            className="w-44 h-44 rounded-full object-cover border-2 border-accent"
            style={{ boxShadow: "0 0 28px rgba(0,212,170,0.18)" }}
          />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
