import hubShipyard from "../../assets/blogs/hub-shipyard.jpg";
import hullWelders from "../../assets/blogs/hull-welders.jpg";
import subseaDrone from "../../assets/blogs/subsea-drone.jpg";

export function BlogsHub() {
  return (
    <>
      <section className="hub-head">
        <span className="eyebrow">Policy &amp; Vision</span>
        <h1 className="hub-title">Aaron’s Strategic Initiatives</h1>
        <p className="hub-intro">Big ideas, built on Rhode Island’s strengths. Here is how we put our shipyards, our skilled trades, and our working families at the center of America’s security and prosperity.</p>
      </section>

      <div className="banner">
        <img src={hubShipyard} width="1920" height="1072" alt="A submarine hull section on the waterfront of a Narragansett Bay shipyard at dawn, with gantry cranes and an American flag" />
        <div className="over"><p>Rhode Island doesn’t just support America’s defense. We build it. It’s time our economy, our workforce, and our leadership reflected that.</p></div>
      </div>

      <section className="cards" aria-label="Initiatives">
        <a className="card" href="#undersea-compact">
          <div className="thumb"><img src={hullWelders} width="1920" height="1072" alt="Union tradesmen welding a submarine hull ring" loading="lazy" /></div>
          <div className="body">
            <div>
              <span className="tag">Labor &amp; Shipbuilding</span>
              <h3>The American Undersea Compact: A 30-Year Guarantee for Rhode Island Labor</h3>
              <p>Three commitments, four pillars, and five first steps to lock in decades of protected, high-wage work in Rhode Island’s shipyards, union halls, and machine shops.</p>
            </div>
            <span className="read">Read the plan →</span>
          </div>
        </a>
        <a className="card" href="#industrial-sovereignty">
          <div className="thumb"><img src={subseaDrone} width="1920" height="1072" alt="Engineers lowering an autonomous underwater drone into Narragansett Bay" loading="lazy" /></div>
          <div className="body">
            <div>
              <span className="tag">Industry &amp; Defense</span>
              <h3>Keeping American Jobs Great Again: Rhode Island’s Industrial Sovereignty Plan</h3>
              <p>Subsea technology, domestic materials, reliable energy, local supply chains, and real protection for the men and women doing the heavy lifting.</p>
            </div>
            <span className="read">Read the plan →</span>
          </div>
        </a>
      </section>

      
    </>
  );
}
