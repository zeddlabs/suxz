import Image from "next/image";
import Link from "next/link";

export default function Learnings() {
  return (
    <section id="learnings" className="bg-light-purple py-20">
      <div className="w-[calc(100%-2rem)] max-w-5xl mx-auto">
        <div className="lg:w-1/2 mb-14">
          <span className="text-primary font-bold">LEARNINGS</span>
          <h2 className="text-title font-bold text-3xl leading-normal sm:text-4xl sm:leading-normal mb-4">Online Learning Platform International Curriculum</h2>
          <p className="font-medium text-body leading-relaxed lg:w-2/3">Study and understand the material class is more relaxed without time limit.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-14">
          <div className="p-7 bg-white rounded-xl">
            <Image src="/images/learning_1.png" width={80} height={80} alt="Starter" className="mb-7" />
            <h5 className="font-bold text-lg text-title mb-3">Starter</h5>
            <p className="text-body text-sm mb-7">Free class access for that start learning code and design</p>
            <Link href="" className="block w-full bg-accent py-2 text-white text-center rounded-md text-sm font-bold">See Class</Link>
          </div>
          <div className="p-7 bg-white rounded-xl">
            <Image src="/images/learning_2.png" width={80} height={80} alt="Starter" className="mb-7" />
            <h5 className="font-bold text-lg text-title mb-3">Premium</h5>
            <p className="text-body text-sm mb-7">Advanced material from the Starter & learn to build projects</p>
            <Link href="" className="block w-full bg-accent py-2 text-white text-center rounded-md text-sm font-bold">See Class</Link>
          </div>
          <div className="p-7 bg-primary rounded-xl">
            <Image src="/images/learning_3.png" width={80} height={80} alt="Starter" className="mb-7" />
            <h5 className="font-bold text-lg text-white mb-3">Superstar</h5>
            <p className="text-white text-sm mb-7">Materials for experts who have completed the premium package</p>
            <Link href="" className="block w-full bg-accent py-2 text-white text-center rounded-md text-sm font-bold">See Class</Link>
          </div>
          <div className="p-7 bg-white rounded-xl">
            <Image src="/images/learning_4.png" width={80} height={80} alt="Starter" className="mb-7" />
            <h5 className="font-bold text-lg text-title mb-3">Bootcamp</h5>
            <p className="text-body text-sm mb-7">Informatics science training program with the latest material</p>
            <Link href="" className="block w-full bg-accent py-2 text-white text-center rounded-md text-sm font-bold">See Class</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
