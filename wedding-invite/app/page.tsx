import CreateTemplate from "./createTemplate/page";
import Showcase from "./showcase/showcase";
import HeroSection from "./southindian/components/HeroSection";

export default function Home() {
  return (
    <div>
      <Showcase />
      <CreateTemplate />
    </div>
  );
}
