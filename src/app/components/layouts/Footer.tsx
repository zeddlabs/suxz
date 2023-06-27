'use client'

import { Envelope, Phone } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-[calc(100%-2rem)] max-w-5xl mx-auto py-20 flex flex-col lg:flex-row gap-16 justify-between">
      <div>
        <Link href="/" className="flex items-center gap-3 mb-9">
          <Image src="/images/favicon.png" width={41} height={50} alt="Logo" className="w-8" />
          <span className="text-2xl font-bold text-title">Suxz</span>
        </Link>
        <p className="font-medium text-body mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.</p>
        <p className="font-medium text-body text-sm mb-1">Designed by <Link className="underline" href="https://www.figma.com/@irhammshidiq" target="_blank">Irham Shidiq</Link></p>
        <p className="font-medium text-body text-sm mb-1">Developed by <Link className="underline" href="https://github.com/zulfikarpinem" target="_blank">Mhd. Zulfikar Pinem</Link></p>
        <p className="font-medium text-body text-sm">Built with TypeScript + NextJS + TailwindCSS</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-16">
        <div className="flex flex-col gap-6">
          <h5 className="text-xl text-title font-bold">Company</h5>
          <Link href="" className="text-body font-medium">Home</Link>
          <Link href="" className="text-body font-medium">Blogs</Link>
          <Link href="" className="text-body font-medium">Careers</Link>
          <Link href="" className="text-body font-medium">Portfolios</Link>
        </div>
        <div className="flex flex-col gap-6 whitespace-nowrap">
          <h5 className="text-xl text-title font-bold">Links</h5>
          <Link href="" className="text-body font-medium">Privacy & Policy</Link>
          <Link href="" className="text-body font-medium">Github</Link>
          <Link href="" className="text-body font-medium">Supports</Link>
          <Link href="" className="text-body font-medium">FAQs</Link>
        </div>
        <div className="flex flex-col gap-6">
          <h5 className="text-xl text-title font-bold">Contacts</h5>
          <Link href="" className="flex items-center gap-2">
            <Phone size={24} weight="fill" color="#8C82FC" />
            <span className="font-medium text-primary">(021) 31048184</span>
          </Link>
          <Link href="" className="flex items-center gap-2">
            <Envelope size={24} weight="fill" color="#8C82FC" />
            <span className="font-medium text-primary">zul@suxz.com</span>
          </Link>
          <p className="text-body font-medium">Jl. Narogong. Perum Cileungsi Elok Blok A No.5. Jakarta Selatan. 12240.</p>
        </div>
      </div>
    </footer>
  )
}
