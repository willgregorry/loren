import { Button } from "@/components/ui/button";
import { Mail, Clock } from "lucide-react";
import Image from "next/image";

export default function ContactForm() {
  return (
    <section className="relative flex w-full flex-col items-center bg-white pb-0 pt-20">
      <div className="mx-auto w-full max-w-[1200px] px-6">

        <div className="flex flex-col overflow-hidden rounded-3xl md:flex-row">

          <div className="flex w-full flex-col justify-center bg-loren-white p-10 md:w-1/2 md:p-16 lg:p-20">
            <h2 className="mb-6 font-dmSerifDisplay text-4xl leading-tight text-loren-black lg:text-[44px]">
              We’d Love To Hear <br /> From You
            </h2>
            <p className="mb-10 font-dmSerifText text-sm leading-relaxed text-loren-black md:text-base">
              LOREN believes that every meaningful connection begins with a
              simple conversation. Whether you are interested in our
              collections, have a question about a piece, or would like to learn
              more about LOREN, our team is here to assist.
            </p>

            <ul className="flex flex-col gap-6 font-dmSerifText text-sm font-normal text-loren-black md:text-base">
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-loren-primary" strokeWidth={2.5} />
                <span>hello@loren.com</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="relative h-5 w-5">
                  <Image src="/home/footer/instagram.png" alt="Instagram" fill className="object-contain" />
                </div>
                <span>@loren.official</span>
              </li>
              <li className="flex items-center gap-4">
                <Clock className="h-5 w-5 text-loren-primary" strokeWidth={2.5} />
                <span>Monday - Friday (09:00 - 17:00 WIB)</span>
              </li>
            </ul>
          </div>


          <div className="flex w-full flex-col justify-center bg-loren-white p-10 md:w-1/2 md:p-16 lg:p-20">
            <h2 className="mb-8 font-dmSerifDisplay text-4xl text-loren-black lg:text-[44px]">
              Send Us A Message
            </h2>

            <form className="flex flex-col gap-5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-loren-primary"
                  required
                />
                <span className="absolute right-4 top-3 text-loren-primary">*</span>
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-loren-primary"
                  required
                />
                <span className="absolute right-4 top-3 text-loren-primary">*</span>
              </div>
              <div className="relative">
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full resize-none rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-loren-primary"
                  required
                />
              </div>

              <Button
                variant="primary"
                type="button"
                className="mt-2 w-full py-6 md:w-[200px]"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>


      <div className="relative mt-24 flex w-full flex-col items-center justify-center text-center">
        <h2 className="mb-4 font-dmSerifDisplay text-5xl tracking-wide text-loren-black md:text-6xl lg:text-[72px]">
          Stay Connected
        </h2>
        <p className="mb-16 font-sans text-sm italic text-zinc-600 md:text-base">
          Follow LOREN for new collections, stories, and moments from our world.
        </p>


        <div className="relative w-full py-10">
          <div className="absolute bottom-0 left-0 top-1/2 w-full bg-loren-primary"></div>

          <div className="relative z-10 mx-auto flex max-w-[600px] flex-col items-center justify-center gap-8 rounded-xl bg-white px-8 py-6 shadow-[0px_4px_20px_rgba(0,0,0,0.08)] md:flex-row md:gap-16 lg:px-16 lg:py-8">
            <div className="flex items-center gap-4 text-zinc-500">
              <Mail className="h-6 w-6" strokeWidth={2.5} />
              <span className="font-sans text-lg font-bold tracking-wide">hello@loren.com</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-500">
              <div className="relative h-6 w-6">
                <Image src="/home/contact/instagram.png" alt="Instagram" fill className="object-contain" />
              </div>
              <span className="font-sans text-lg font-bold tracking-wide">loren.official</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
