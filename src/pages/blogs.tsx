import { useEffect } from "react";
import { BlogsHub } from "../components/blogs/BlogsHub";
import { UnderseaCompactPost } from "../components/blogs/UnderseaCompactPost";
import { IndustrialSovereigntyPost } from "../components/blogs/IndustrialSovereigntyPost";
import "../components/blogs/strategic-initiatives.css";

const TITLE = "Aaron's Strategic Initiatives | Aaron Guckian for Governor";

const Blogs = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = TITLE;
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <section className="si" id="top">
      <div className="page">
        <BlogsHub />
        <UnderseaCompactPost />
        <IndustrialSovereigntyPost />
      </div>
    </section>
  );
};

export default Blogs;
