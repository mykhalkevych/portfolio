import Header from './components/Header';
import './App.css';
import { Summary } from './components/Summary';
import { Navigation } from './components/Navigation';
import { SocialLinks } from './components/SocialLinks';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className='lg:flex lg:justify-between lg:gap-4 lg:py-20'>
      <div className='flex flex-col justify-between mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <Header />
        <Navigation />
        <SocialLinks />
      </div>
      <div>
        <Summary />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
