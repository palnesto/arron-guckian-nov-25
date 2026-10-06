import { useModal } from "../../store/modals";
import subseaDrone from "../../assets/blogs/subsea-drone.jpg";
import machineShop from "../../assets/blogs/machine-shop.jpg";

export function IndustrialSovereigntyPost() {
  const { setCurrModal } = useModal();
  return (
    <>
      <article id="industrial-sovereignty" className="post">
        <a className="chip" href="#top">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          All initiatives
        </a>
        <h2 className="post-title">Keeping American Jobs Great Again: Rhode Island’s Industrial Sovereignty Plan</h2>
        <div className="byline"><span className="name">Aaron Guckian</span><span className="dot">•</span><span>October 07, 2026</span></div>

        <figure>
          <img src={subseaDrone} width="1920" height="1072" alt="Engineers lowering an autonomous underwater drone into Narragansett Bay at dusk, a lighthouse in the distance" loading="lazy" />
        </figure>

        <div className="pull">
          <p>“We cannot defend this nation with fragile supply chains. We cannot defend it with an unreliable energy grid. And we cannot defend it with paper promises written in Washington.”</p>
        </div>

        <p>Rhode Island sits at the center of American sovereignty. It’s time we started treating it that way.</p>
        <p>This plan is about making sure the work of defending this country is done here, by Rhode Islanders, with American materials and American energy. Five commitments will get us there.</p>

        <h2>1. Maritime Supremacy, Built in Narragansett Bay</h2>
        <p>Through a public-private partnership, we will launch the <strong>Naval Systems Integration Advanced Center</strong> alongside NVIDIA. Rhode Island will engineer the underwater edge data centers, robotics, and autonomous drone systems that shield our East Coast ports and vital sea lanes from adversary attacks.</p>
        <p>If anyone challenges American waters, the technology that stops them cold will have been developed right here.</p>

        <h2>2. Ending Foreign Dependence on Critical Materials</h2>
        <p>From rare-earth magnets to domestic iron and naval-grade steel, every critical alloy entering Rhode Island’s defense pipeline will be sourced, cast, and finished domestically. Period.</p>
        <p>We are insulating our shipyards and local machine shops from foreign leverage once and for all.</p>

        <h2>3. A Reliable Grid for a Manufacturing State</h2>
        <p>You can’t forge high-yield steel or mill precision components while worrying about blackouts.</p>
        <p>That’s why we are backing <strong>natural gas pipeline redundancy</strong>, securing reliable baseload power for our industrial parks and protecting working families from brutal winter utility spikes.</p>

        <h2>4. Defense Dollars Stay in Rhode Island</h2>
        <p>Working hand-in-glove with the Rhode Island Manufacturers Association, we will establish a strict <strong>Local Supply-Chain Guarantee</strong>. When Navy procurement dollars are spent, Rhode Island machine shops, precision fabricators, and local trade stewards get first call.</p>
        <figure>
          <img src={machineShop} width="1920" height="1072" alt="A machinist inspecting a precision-milled steel valve component beside a 5-axis CNC machine" loading="lazy" />
          <figcaption>Rhode Island’s small and mid-sized machine shops are the backbone of the defense supply chain.</figcaption>
        </figure>
        <p>The work stays on your floor.</p>

        <h2>5. Protecting the Worker</h2>
        <p>Contracts shift. Lines retool. But your family shouldn’t pay the price for market volatility.</p>
        <p>In partnership with the Department of Labor and our prime defense contractors, we will back <strong>wage-continuity protections and dedicated unemployment shields</strong> for workers in transition. When production lines change, your household income stays protected.</p>

        <div className="pull">
          <p>“This isn’t theory. This is complete industrial sovereignty. Reliable domestic energy. American raw materials. Cutting-edge subsea AI defending our coast. And ironclad protections for the men and women doing the heavy lifting.”</p>
          <p>“Let’s get to work.”</p>
          <cite>Aaron Guckian</cite>
        </div>

        <div className="cta">
          <a className="btn" href="https://secure.winred.com/friends-of-aaron-guckian-0394772f/donate" target="_blank" rel="noopener noreferrer">Donate Now
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
          <button type="button" className="btn ghost" onClick={() => setCurrModal("join-movement")}>Join the Movement</button>
        </div>
      </article>

    
    </>
  );
}
