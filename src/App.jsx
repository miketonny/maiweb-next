import content from './data/content.json';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stack from './components/Stack';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero data={content.hero} />
      <About data={content.about} />
      <Services data={content.services} />
      <Stack data={content.stack} />
      <Portfolio data={content.portfolio} />
      <Contact data={content.contact} />
      <Footer data={content.footer} />
      <ScrollToTop />
    </>
  );
}
