import Link from "next/link";

export default function Contact() {
  return (
    <section className="w-full py-20 px-4 bg-[url('/images/bg_contact.png')] bg-center bg-cover text-center text-white">
      <h2 className="font-extrabold text-3xl leading-normal sm:text-4xl sm:leading-normal mb-6">So? What Are You Waiting For</h2>
      <p className="font-medium mb-10">It's time to build your career, study in a relaxed and purposeful manner</p>
      <div className="flex items-center justify-center gap-12">
        <Link href="" className="px-7 py-3 sm:px-12 sm:py-4 font-bold text-white rounded-lg bg-primary">Get Started</Link>
        <Link href="" className="font-bold">Contact Us</Link>
      </div>
    </section>
  )
}
