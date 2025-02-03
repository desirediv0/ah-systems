import AboutComp from "./_components/AboutComp";
import Banner from "./_components/Banner";
import OurServices from "./_components/OurServices";
import ServiceComp from "./_components/Service-comp";
import ShippingPartners from "./_components/ShippingPartners";
import WhyGlobal from "./_components/Why-FPS-Global";


const slides = [
  {
    image: "/card/ocean-freight.jpg",
    title: "Global Logistics Solutions",
    description: "Connecting businesses worldwide"
  },
  {
    image: "/card/air-freight.jpg",
    title: "Fast & Reliable",
    description: "Expert cargo handling services"
  },
  {
    image: "/card/ground-transportation.jpg",
    title: "Global Network",
    description: "Worldwide logistics network"
  }
];


export default function Home() {
  return (
    <>
      <Banner slides={slides} interval={3000} />
      <ServiceComp />
      <AboutComp />
      <WhyGlobal />
      <OurServices />
      <ShippingPartners />
    </>
  );
}
