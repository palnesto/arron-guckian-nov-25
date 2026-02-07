import Home from "../components/section/Home";
import { NewEra } from "../components/section/NewEra";
import newera from "../assets/newera.png";
import sign from "../assets/sign.png";
import MeetAaron from "../components/section/MeetAaron";
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
    </section>
  );
};

export default Main;
