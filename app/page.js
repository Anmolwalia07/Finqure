import Features from "@/components/features";
import Footer from "@/components/footer";
import Goals from "@/components/goals";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Lines from "@/components/lines";
import Services from "@/components/services";
import Tagline from "@/components/tagline";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Tagline/>
    <Features/>
    {/* <Services/> */}
    <Goals/>
    <Lines/>
    <Footer/>
    </>
  );
}
