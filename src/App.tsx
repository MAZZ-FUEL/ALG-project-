import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Founder } from './components/Founder';
import { Divisions } from './components/Divisions';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Strip } from './components/Strip';
import { Divider } from './components/Divider';
import { FAB } from './components/FAB';
import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <Divider />
      <Founder />
      <Strip />
      <Divisions />
      <Divider />
      <ContactForm />
      <Footer />
      <FAB />
    </>
  );
}
