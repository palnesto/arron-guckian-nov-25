import Home from "../components/section/Home";
import { NewEra } from "../components/section/NewEra";
import sign from "../assets/sign.png";
import MeetAaron from "../components/section/MeetAaron";
import { Support } from "../components/section/Donation";
import { FivePillars } from "../components/section/FivePillars";
import Get from "../components/section/Get";
import GroundGallery from "../components/section/GroundGallery";

const Main = () => {
  return (
    <section className="">
      <Home />
      <NewEra signatureSrc={sign} />
      <Support />
      <MeetAaron />
      <FivePillars />
      <Get />
      <GroundGallery />
    </section>
  );
};

export default Main;
