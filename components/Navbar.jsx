"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router } = useAppContext();

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 text-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-16 lg:px-32 py-4">
        {/* Logo Section */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push("/")}
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

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 font-medium text-sm">
          <Link href="/" className="hover:text-orange-400 transition">
            Home
          </Link>
          <Link href="/all-products" className="hover:text-orange-400 transition">
            Shop
          </Link>
          <Link href="/about" className="hover:text-orange-400 transition">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-orange-400 transition">
            Contact
          </Link>

          <Link
            href="/cart"
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition"
          >
            <Image src={assets.cart_icon} alt="cart icon" className="w-5 h-5" />
            Cart
          </Link>

          {isSeller && (
            <button
              onClick={() => router.push("/seller")}
              className="border border-gray-400 px-4 py-2 rounded-lg hover:bg-white/10 transition text-xs"
            >
              Seller Dashboard
            </button>
          )}
        </div>

        {/* Right side: Account + Icons */}
        <ul className="hidden md:flex items-center gap-4">
          <Image
            className="w-5 h-5 cursor-pointer"
            src={assets.search_icon}
            alt="search icon"
          />

          {/* Clerk Integration */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="flex items-center gap-2 hover:text-orange-400 transition">
                <Image src={assets.user_icon} alt="user icon" className="w-5 h-5" />
                Account
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </ul>

        {/* Mobile Menu */}
        <div className="flex items-center md:hidden gap-3">
          {isSeller && (
            <button
              onClick={() => router.push("/seller")}
              className="text-xs border border-gray-400 px-4 py-1.5 rounded-full hover:bg-white/10 transition"
            >
              Seller Dashboard
            </button>
          )}

          <SignedOut>
            <SignInButton mode="modal">
              <button className="flex items-center gap-2 hover:text-orange-400 transition">
                <Image src={assets.user_icon} alt="user icon" className="w-5 h-5" />
                Account
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
