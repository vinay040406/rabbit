import { TESTIMONIALS_DATA } from "../utils/helper";
import Heading from "./common/Heading";
import Card from "./common/Card";
import { useEffect, useState } from "react";

const Results = () => {
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
    <div className="max-w-285 mx-auto flex flex-col items-center md:gap-15 gap-5 px-4 md:mb-42.5 mb-15">
      <Heading h2={"Real People. Real Results."} parentCss={"text-center"} />
      <div className="grid sm:grid-cols-2 gap-6 md:px-0 px-6 xl:w-285 w-full">
        {TESTIMONIALS_DATA.slice(0, visibleCount).map((card, i) => (
          <div key={i} className="flex lg:h-98.5 h-auto">
            <Card
              image={card.image}
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

export default Results;
