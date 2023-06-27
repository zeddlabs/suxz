'use client'

import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between w-[calc(100%-2rem)] max-w-5xl mx-auto gap-[70.5px] py-10">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/images/favicon.png" width={41} height={50} alt="Logo" />
        <span className="text-xl font-bold">Suxz</span>
      </Link>
      <nav className={`absolute top-0 ${showMenu ? 'right-0' : '-right-full'} flex flex-col h-screen px-6 py-20 lg:p-0 transition-all bg-white lg:items-center lg:justify-between w-60 lg:h-auto lg:w-full lg:bg-transparent lg:flex-row lg:relative duration-300 lg:top-auto lg:right-auto`}>
        <button className="absolute right-4 top-8 lg:hidden" onClick={() => setShowMenu(false)}>
          <X size={32} color="#8C82FC"/>
        </button>
        
        <div className="flex flex-col gap-8 mb-10 font-semibold lg:mb-0 lg:gap-10 lg:flex-row lg:items-center text-navlink">
          <Link href="#home" className="hover:text-body">Home</Link>
          <Link href="#learnings" className="hover:text-body">Learnings</Link>
          <Link href="#about" className="hover:text-body">About Us</Link>
          <Link href="#testimonials" className="hover:text-body">Testimonials</Link>
        </div>
        <div className="flex items-center gap-10">
          <Link href="" className="font-semibold text-primary">Log in</Link>
          <Link href="" className="px-6 py-2 font-semibold text-white rounded-md bg-primary">Sign up</Link>
        </div>
      </nav>
      <button className="lg:hidden" onClick={() => setShowMenu(true)}>
        <List size={32} color="#8C82FC" weight="bold" />
      </button>
    </header>
  )
}
