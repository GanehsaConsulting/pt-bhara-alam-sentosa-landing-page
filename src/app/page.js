"use client"
import { AboutUs } from "@/components/about-us";
import { Banner } from "@/components/banner";
import { Services } from "@/components/services";
import { Products } from "@/components/products";
import { VisionMission } from "@/components/vision-mission";
import { WhyUs } from "@/components/why-us";
import { Contact } from "@/components/contact";
import AnimateOnScroll from "@/components/animate-on-scroll";

export default function Home() {
  return (
    <>
      <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0.3}>
        <Banner />
      </AnimateOnScroll>

      <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0.3}>
        <AboutUs />
      </AnimateOnScroll>

      <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0.3}>
        <WhyUs />
      </AnimateOnScroll>

      <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0.3}>
        <VisionMission />
      </AnimateOnScroll>

      <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0.3}>
        <Products />
      </AnimateOnScroll>

      <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0.3}>
        <Services />
      </AnimateOnScroll>

      <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0.3}>
        <Contact />
      </AnimateOnScroll>
    </>
  );
}
