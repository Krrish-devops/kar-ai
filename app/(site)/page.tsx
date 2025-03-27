import { Metadata } from "next";
import Head from "next/head";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import TestimonialProject from "@/components/ProjectTestimonial";

export const metadata: Metadata = {
  title: "Kar AI Solutions - Web, Mobile App & AI Development in Karaikudi",
  description:
    "Kar AI Solutions specializes in web and mobile app development, along with cutting-edge AI solutions. Based in Karaikudi, owned by Maharajan Popular Software Company.",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Kar AI Solutions - Web, Mobile App & AI Development in Karai
        </title>
        <meta
          name="description"
          content="Kar AI Solutions specializes in web and mobile app development, along with cutting-edge AI solutions. Based in Karai, owned by Maharajan Popular Software Company."
        />
        <meta
          name="keywords"
          content="karai, kar ai solution, web development, mobile app development, AI solutions, AI company in Karai, Maharajan Popular Software Company"
        />
        <meta
          property="og:title"
          content="Kar AI Solutions - Web, Mobile App & AI Experts in Karai"
        />
        <meta
          property="og:description"
          content="Expert in AI, Web, and Mobile App development. Based in Karai, providing intelligent business solutions."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://karai.techfreak.info" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Brands />
        <TestimonialProject />
        <Feature />
        <FeaturesTab />
        <FunFact />
        <Integration />
        <Testimonial />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
