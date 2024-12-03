import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RssFeed from './components/RssFeed';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Rizky Fauzan Hanif - Network Engineer',
  description: "Fauzan's Personal Website.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='bg-base-300 flex flex-col items-center'>
        <div className='max-w-2xl w-full p-4'>
        <Hero />
        <RssFeed />
        </div>
      </div>
      <Footer />
    </>
  );
}
