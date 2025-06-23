import { AboutUs } from "@/components/about-us";
import { Banner } from "@/components/banner";
import { Services } from "@/components/services";
import { VisionMission } from "@/components/vision-mission";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <VisionMission />
      <Services />
    </>
  );
}
