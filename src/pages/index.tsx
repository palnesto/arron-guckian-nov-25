import Home from "../components/section/Home";
import { NewEra } from "../components/section/NewEra";
import newera from "../assets/newera.png";
import sign from "../assets/sign.png";
import MeetAaron from "../components/section/MeetAaron";
import Get from "../components/section/Get";
import { Support } from "../components/section/Donation";
import { FivePillars } from "../components/section/FivePillars";

const Main = () => {
  return (
    <section className="">
      <Home />
      <NewEra photoSrc={newera} signatureSrc={sign} />
      <Support />
      <MeetAaron />
      <FivePillars />
      <Get />
    </section>
  );
};

export default Main;
