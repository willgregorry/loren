import Image from "next/image";

const journalSections = [
  {
    id: 1,
    num: "01",
    title: "The Campaign",
    subtitle: "Beyond the Garment",
    desc: "LOREN is shaped by the spaces we move through and the moments we carry with us. Our campaigns explore the connection between contemporary design, quiet confidence, and everyday life.",
    img: "/journal/the_campaign.png",
    textPosition: "right",
    bgColor: "bg-[#FF3333]",
    textColor: "text-loren-white",
    numColor: "text-loren-white",
  },
  {
    id: 2,
    num: "02",
    title: "The Details",
    subtitle: "Luxury Lives in the Details",
    desc: "Every LOREN piece begins with intention. From the texture of the fabric to the precision of every stitch, each detail is carefully considered to create a refined experience that lasts beyond the season.",
    img: "/journal/the_details.png",
    textPosition: "left",
    bgColor: "bg-white",
    textColor: "text-loren-black",
    numColor: "text-loren-primary",
  },
  {
    id: 3,
    num: "03",
    title: "The Journey",
    subtitle: "Designed to Move With You",
    desc: "Outerwear becomes part of everyday life. LOREN is designed to move naturally with you, from quiet mornings to the rhythm of the city, without compromising comfort or character.",
    img: "/journal/the_journey.png",
    textPosition: "right",
    bgColor: "bg-white",
    textColor: "text-loren-black",
    numColor: "text-loren-primary",
  },
  {
    id: 4,
    num: "04",
    title: "The Atmosphere",
    subtitle: "Quietly Distinct",
    desc: "Inspired by modern architecture, natural textures, and understated forms, the world of LOREN is defined by simplicity with intention. Every element reflects a belief that elegance does not need to be loud.",
    img: "/journal/the_atmosphere.png",
    textPosition: "left",
    bgColor: "bg-[#FF3333]",
    textColor: "text-loren-white",
    numColor: "text-loren-white",
  },
];

export default function JournalSections() {
  return (
    <section className="w-full flex flex-col">
      {journalSections.map((section) => {
        const isTextRight = section.textPosition === "right";

        return (
          <div
            key={section.id}
            className={`flex w-full flex-col ${
              isTextRight ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >

            <div className="relative h-[40vh] w-full md:h-[50vh] md:w-1/2 lg:h-[60vh]">
              <Image
                src={section.img}
                alt={section.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>


            <div
              className={`relative flex w-full flex-col justify-center px-10 py-12 md:w-1/2 md:px-16 lg:px-20 xl:px-28 ${
                section.bgColor === "bg-[#FF3333]" ? "bg-loren-primary" : section.bgColor
              } ${section.textColor}`}
            >

              <span
                className={`absolute right-10 top-10 font-dmSerifDisplay text-2xl md:right-16 md:top-12 lg:right-20 lg:top-16 xl:right-28 ${section.numColor}`}
              >
                {section.num}
              </span>

              <div className="max-w-[450px]">
                <h2 className="mb-2 font-dmSerifDisplay text-4xl md:text-5xl lg:text-6xl">
                  {section.title}
                </h2>
                <h3 className="mb-6 font-dmSerifText text-lg font-bold md:text-xl">
                  {section.subtitle}
                </h3>
                <p className="font-sans text-sm italic leading-relaxed opacity-90 md:text-base">
                  {section.desc}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
