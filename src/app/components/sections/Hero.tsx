import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-8 lg:gap-0 lg:flex-row w-[calc(100%-2rem)] max-w-5xl mx-auto" id="home">
      <div className="order-2 w-full lg:order-1">
        <span className="font-bold text-primary">S U X Z  M A K E  I T  E A S Y</span>
        <h1 className="mt-2 mb-6 text-5xl font-extrabold leading-tight lg:text-6xl text-title">Find Your Way Of Success</h1>
        <p className="mb-10 font-medium leading-relaxed text-body">We help you to increase self-confidence and train yourself in a direction, and make you more creative in developing a work</p>
        <div className="flex flex-wrap items-start gap-2 lg:gap-4 mb-12">
          <Link href="" className="px-7 py-3 sm:px-12 sm:py-4 font-bold text-white rounded-lg bg-primary">Get Started</Link>
          <Link href="" className="px-7 py-3 sm:px-12 sm:py-4 font-bold bg-gray-100 rounded-lg text-secondary">Our Service</Link>
        </div>
      </div>
      <div className="order-1 w-full lg:order-2">
        <Image src="/images/header_img.png" width={674} height={638} alt="Hero Image" />
      </div>
    </section>
  )
}
