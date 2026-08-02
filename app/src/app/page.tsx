import { AdventureCategories } from "@/components/sections/AdventureCategories";
import { CommunityHighlights } from "@/components/sections/CommunityHighlights";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Hero } from "@/components/sections/Hero";
import { StoreInformation } from "@/components/sections/StoreInformation";
import { WhyGamersNGeeks } from "@/components/sections/WhyGamersNGeeks";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AdventureCategories />
      <FeaturedProducts />
      <WhyGamersNGeeks />
      <StoreInformation />
      <CommunityHighlights />
    </main>
  );
}
