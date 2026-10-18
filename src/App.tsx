import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Work from '@/pages/Work';
import CaseStudy from '@/pages/CaseStudy';
import Sketches from '@/pages/Sketches';
import CV from '@/pages/CV';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

/* Route table (brief §4). All routes share <Layout> (header/main/footer,
   skip link, scroll+focus reset). Keep this simple — it's a static
   personal site, no data loaders or code-splitting needed yet. */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="work/:slug" element={<CaseStudy />} />
        <Route path="sketches" element={<Sketches />} />
        <Route path="cv" element={<CV />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
