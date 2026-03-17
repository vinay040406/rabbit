import { BETTER_DATA_LIST } from "../utils/helper";
import Icons from "./common/Icons";
import Heading from "./common/Heading";

const Better = () => {
  return (
    <div className="md:mt-22.5 mt-15 w-full lg:p-15 p-4 bg-ternary">
      <div className="max-w-285 w-full flex flex-col md:gap-10 mx-auto text-center">
        <Heading h2={"Better Tech. Better Team. Better Lending"} />
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-7.25 justify-center">
          {BETTER_DATA_LIST.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 h-41.5 items-center justify-center w-full max-w-70 "
            >
              <div className="h-14.5 w-14.5 rounded-xl bg-greener flex justify-center items-center">
                <Icons icon={item.svg} />
              </div>
              <h5 className="font-semibold lg:text-xl md:text-lg text-primary max-w-52 w-full">
                {item.title}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Better;
