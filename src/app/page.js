import { AboutUs } from "@/components/about-us";
import { Banner } from "@/components/banner";
import { Services } from "@/components/services";
import { Products } from "@/components/products";
import { VisionMission } from "@/components/vision-mission";
import { WhyUs } from "@/components/why-us";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <WhyUs/>
      <VisionMission />
      <Services />
      <Products />
    </>
  );
}
