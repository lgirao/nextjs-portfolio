import Hero from './components/hero/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <About />
      <Projects />
    </main>
  )
}
