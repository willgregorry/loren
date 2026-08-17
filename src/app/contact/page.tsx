import Hero from "@/components/sections/contact/Hero";
import ContactForm from "@/components/sections/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Hero />
      <ContactForm />
    </main>
  );
}
