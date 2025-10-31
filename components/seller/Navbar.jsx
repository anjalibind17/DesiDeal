import React from 'react';
import { assets } from '../../assets/assets';
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';

const Navbar = () => {
  const { router } = useAppContext();

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 text-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-16 lg:px-32 py-4">
        
        {/* Logo */}
        <div
          onClick={() => router.push('/')}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Image
            src={assets.logo}
            alt="DesiDeal Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col leading-tight">
            <h1 className="text-xl font-semibold text-orange-400">DesiDeal</h1>
            <span className="text-xs text-gray-300">Shop Smart, DesiDeal Style</span>
          </div>
        </div>

        {/* Logout Button */}
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full 
          text-sm transition-all duration-200 shadow-md"
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
