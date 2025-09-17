'use client';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Leadership from '@/components/Leadership';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/fireflies.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Leadership />
      <Footer />
    </main>
  );
}