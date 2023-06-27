import Image from "next/image";

export default function Companies() {
  return (
    <section id="companies" className="bg-light-purple py-20">
      <div className="w-[calc(100%-2rem)] max-w-5xl mx-auto">
        <h2 className="text-title font-extrabold text-3xl leading-normal sm:text-4xl sm:leading-normal mb-6 text-center">Companies That Recruit Our Graduates</h2>
        <p className="text-body font-medium text-center mb-16">Our graduates have worked in more than 400 companies around the World</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-items-center gap-10">
          <Image src="/images/Github.png" width={170} height={54} alt="Github Logo" />
          <Image src="/images/Microsoft.png" width={190} height={40} alt="Microsoft Logo" />
          <Image src="/images/Redis.png" width={170} height={55} alt="Redis Logo" />
          <Image src="/images/Amazon.png" width={168} height={34} alt="Amazon Logo" />
          <Image src="/images/Paypal.png" width={170} height={43} alt="Paypal Logo" />
          <Image src="/images/Linkedin.png" width={160} height={43} alt="Linkedin Logo" />
          <Image src="/images/Reddit.png" width={160} height={52} alt="Reddit Logo" />
          <Image src="/images/Medium.png" width={180} height={38} alt="Medium Logo" />
        </div>
      </div>
    </section>
  )
}
