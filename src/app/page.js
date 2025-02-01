import AboutComp from "./_components/AboutComp";
import Banner from "./_components/Banner";
import OurServices from "./_components/OurServices";
import ServiceComp from "./_components/Service-comp";
import ShippingPartners from "./_components/ShippingPartners";
import WhyGlobal from "./_components/Why-FPS-Global";


const slides = [
  {
    image: "/slider1.webp",
    title: "Global Logistics Solutions",
    description: "Connecting businesses worldwide with reliable shipping and logistics services"
  },
  {
    image: "/slider2.webp",
    title: "Fast & Reliable",
    description: "Expert handling of your cargo with speed and precision"
  },
  {
    image: "/slider3.webp",
    title: "Global Network",
    description: "Our global network of partners ensures your cargo reaches its destination"
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
