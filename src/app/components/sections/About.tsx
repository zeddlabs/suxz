import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-[calc(100%-2rem)] max-w-5xl mx-auto pt-20 flex flex-col items-center lg:flex-start lg:flex-row lg:gap-36">
      <div className="">
        <Image src="/images/about_img.png" width={600} height={666} alt="About Image" />
      </div>
      <div className="mb-20">
        <span className="text-primary font-bold">ABOUT US</span>
        <h2 className="text-title font-extrabold text-3xl leading-normal sm:text-4xl sm:leading-normal mb-4">We Help Improve Your Work Experience</h2>
        <p className="font-medium text-body leading-relaxed mb-8">We help you to increase self-confidence and train yourself in a direction.</p>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-6">
            <Image src="/icons/check.svg" width={36} height={36} alt="Check Icon" />
            <span className="font-semibold text-title">Study and produce creation to get a job</span>
          </div>
          <div className="flex items-center gap-6">
            <Image src="/icons/check.svg" width={36} height={36} alt="Check Icon" />
            <span className="font-semibold text-title">Up to date material and created by expert creators</span>
          </div>
          <div className="flex items-center gap-6">
            <Image src="/icons/check.svg" width={36} height={36} alt="Check Icon" />
            <span className="font-semibold text-title">Complete classes and projects and get a certificate from us</span>
          </div>
        </div>
      </div>
    </section>
  )
}
