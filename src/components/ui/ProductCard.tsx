import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

export default function ProductCard({ image, title, price }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <div className="group flex flex-col space-y-4">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-100 rounded-md">
        <Image
          src={image}
          alt={title}
          fill
          draggable={false}
          className="object-cover select-none transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col space-y-1">
        <h3 className="font-sans text-base md:text-lg text-loren-black">{title}</h3>
        <p className="font-sans text-xl md:text-2xl font-semibold text-loren-black">
          {formattedPrice}
        </p>
      </div>
    </div>
  );
}
