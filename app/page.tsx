import Hero from './components/hero/Hero';
import About from './components/about/About';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <About />
    </main>
  )
}
