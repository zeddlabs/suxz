import { secureHeapUsed } from "crypto";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-[calc(100%-2rem)] max-w-5xl mx-auto py-20">
      <span className="block text-center font-bold text-primary">TESTIMONIALS</span>
      <h2 className="text-title font-extrabold text-3xl leading-normal sm:text-4xl sm:leading-normal mb-6 text-center">Our Alumni Say</h2>
      <p className="text-body font-medium text-center mb-24">These are the words of people who have taken our class</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-16 lg:gap-14">
        <div className="text-center px-6 pb-10 py-12 border border-primary rounded-lg relative">
          <Image src="/images/avatar_1.png" width={72} height={72} alt="Avatar" className="absolute -top-9 left-1/2 -translate-x-1/2" />
          <h5 className="font-bold text-title text-lg">Jason Todd</h5>
          <span className="text-gray-400 text-sm mb-6 block">Entrepreneur</span>
          <p className="text-body">“The mentor is cool, how to convey each material is also detailed and easy to understand..”</p>
        </div>
        <div className="text-center px-6 pb-10 py-12 border border-primary rounded-lg relative">
          <Image src="/images/avatar_2.png" width={72} height={72} alt="Avatar" className="absolute -top-9 left-1/2 -translate-x-1/2" />
          <h5 className="font-bold text-title text-lg">Cassandra K</h5>
          <span className="text-gray-400 text-sm mb-6 block">Web Developer</span>
          <p className="text-body">“The mentor is cool, how to convey each material is also detailed and easy to understand..”</p>
        </div>
        <div className="text-center px-6 pb-10 py-12 border border-primary rounded-lg relative">
          <Image src="/images/avatar_3.png" width={72} height={72} alt="Avatar" className="absolute -top-9 left-1/2 -translate-x-1/2" />
          <h5 className="font-bold text-title text-lg">Peter Parker</h5>
          <span className="text-gray-400 text-sm mb-6 block">PHP Enthusiast</span>
          <p className="text-body">“The mentor is cool, how to convey each material is also detailed and easy to understand..”</p>
        </div>
        <div className="text-center px-6 pb-10 py-12 border border-primary rounded-lg relative">
          <Image src="/images/avatar_4.png" width={72} height={72} alt="Avatar" className="absolute -top-9 left-1/2 -translate-x-1/2" />
          <h5 className="font-bold text-title text-lg">Jean Gray</h5>
          <span className="text-gray-400 text-sm mb-6 block">Designer</span>
          <p className="text-body">“The mentor is cool, how to convey each material is also detailed and easy to understand..”</p>
        </div>
      </div>
    </section>
  )
}
