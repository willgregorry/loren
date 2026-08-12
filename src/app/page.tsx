import Image from "next/image";

export default function Home() {
  return (
    <div className="@container relative mx-auto h-[400px] w-full max-w-5xl">

      {/* --- LAYER KIRI (Lebar persis 50% dari container) --- */}
      <div className="absolute inset-0 flex w-[50cqw] items-center overflow-hidden bg-gray-100">
        {/* Ukuran font sekarang menggunakan 10cqw, artinya 10% dari lebar container */}
        <h1 className="absolute left-0 w-[100cqw] whitespace-nowrap text-center text-[10cqw] font-bold tracking-widest text-black">
          NEW FASHION
        </h1>
      </div>

      {/* --- LAYER KANAN (Lebar 50% dari container, digeser sejauh 50cqw ke kanan) --- */}
      <div className="absolute inset-0 left-[50cqw] flex w-[50cqw] items-center overflow-hidden bg-red-600">
        {/* Teks ditarik presisi ke kiri sejauh -50cqw agar menyambung dengan layer kiri */}
        <h1 className="absolute left-[-50cqw] w-[100cqw] whitespace-nowrap text-center text-[10cqw] font-bold tracking-widest text-white">
          NEW FASHION
        </h1>
      </div>

    </div>
  );
}
