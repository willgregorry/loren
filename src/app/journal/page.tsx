import Hero from "@/components/sections/journal/Hero";
import JournalSections from "@/components/sections/journal/JournalSections";
import CTA from "@/components/sections/journal/CTA";
import PageLoadingBar from "@/components/ui/PageLoadingBar";

const imagesToPreload = [
  "/journal/hero.jpg",
  "/journal/the_campaign.png",
  "/journal/the_details.png",
  "/journal/the_journey.png",
  "/journal/the_atmosphere.png",
];

export default function JournalPage() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <PageLoadingBar imagesToLoad={imagesToPreload} />
      <Hero />
      <JournalSections />
      <CTA />
    </main>
  );
}
