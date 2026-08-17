import { Suspense } from "react";
import Collection from "@/components/sections/collection/Collection";

export default function CollectionPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-loren-white" />}>
      <Collection />
    </Suspense>
  );
}
