import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Journey from './components/Journey';
import Club from './components/Club';
import AskBot from './components/AskBot';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="grain relative min-h-screen overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-emerald-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <div className="h-16" aria-hidden="true" />
        <Stats />
        <About />
        <Journey />
        <Club />
        <AskBot />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
