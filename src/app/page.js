import { AboutUs } from "@/components/about-us";
import { Banner } from "@/components/banner";
import { Services } from "@/components/services";
import { Products } from "@/components/ui/products";
import { VisionMission } from "@/components/vision-mission";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <VisionMission />
      <Services />
      <Products />
    </>
  );
}
