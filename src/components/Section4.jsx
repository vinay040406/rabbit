import { TESTIMONIALS } from "../utils/helper";
import Heading from "./common/Heading";
import Card from "./common/Card";
import { useEffect, useState } from "react";

const Section4 = () => {
  const [visibleCount, setVisibleCount] = useState(
    window.innerWidth > 768 ? 4 : 2,
  );
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth > 768 ? 4 : 2);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-285 mx-auto flex flex-col items-center gap-15 px-4 mb-42.5">
      <Heading h2={"Real People. Real Results."} />
      <div className="grid md:grid-cols-2 gap-6 md:px-0 px-6">
        {TESTIMONIALS.slice(0, visibleCount).map((card, i) => (
          <div key={i} className="flex">
            <Card
              name={card.name}
              desc={card.desc}
              profession={card.profession}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
