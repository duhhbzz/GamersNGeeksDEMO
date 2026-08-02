import { CommunityHighlights } from "@/components/sections/CommunityHighlights";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Hero } from "@/components/sections/Hero";
import { WhyGamersNGeeks } from "@/components/sections/WhyGamersNGeeks";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <WhyGamersNGeeks />
      <CommunityHighlights />
    </main>
  );
}
