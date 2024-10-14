import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RssFeed from './components/RssFeed';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Fzzzn.',
  description: "Fauzan's Personal Website.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='bg-base-300 flex flex-col items-center py-6'>
        <div className='max-w-2xl w-full p-4'>
        <Hero />
        <RssFeed />
        </div>
      </div>
      <Footer />
    </>
  );
}