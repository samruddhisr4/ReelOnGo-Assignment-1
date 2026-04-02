import HeroSection from "./components/HeroSection";
import InviteSection from "./components/InviteSection";
import CoupleSection from "./components/CoupleSection";
// import EventsSection from "./components/EventsSection";
// import CarSection from "./components/CarSection";
// import CountdownSection from "./components/CountdownSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <InviteSection />
      <CoupleSection />
      {/* <EventsSection />
      <CarSection />
      <CountdownSection /> */}
    </div>
  );
}
