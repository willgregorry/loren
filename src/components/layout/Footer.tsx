export default function Footer() {
  return (
    <footer className="w-full bg-black py-10 text-center text-white">
      <p className="font-sans text-sm opacity-60">
        © {new Date().getFullYear()} LOREN. All rights reserved.
      </p>
    </footer>
  );
}
