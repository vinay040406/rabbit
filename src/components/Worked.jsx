import Button from "./common/Button";
import Heading from "./common/Heading";
import Icons from "./common/Icons";

const Worked = () => {
  return (
    <div className="w-full mx-auto bg-linear-to-b from-[rgba(76,175,80,0.1)] to-[rgba(76,175,80,0)] px-4 md:py-25.75 py-15">
      <div className="max-w-[734.29px] w-full mx-auto relative flex items-center justify-center">
        <Icons icon={"rabbit"} />

        <div className="absolute flex flex-col  w-full items-center text-center px-4">
          <div className="flex flex-col max-w-147.5 ">
            <Heading
              parentCss={"gap-3"}
              h2={"Worked With Rabbit?"}
              p={
                "We love hearing success stories. Submit your testimonial and helpothers fund their story."
              }
              pCss={"text-secondary"}
            />
          </div>
          <Button
            text="Share Yours"
            className="md:py-4.25 py-3 flex items-center group gap-1.5 mt-8 md:pl-10 px-5 rounded-full border-white border text-white bg-greener hover:text-green hover:bg-white duration-300 ease-in hover:border-green hover:border"
            svg={
              <Icons
                icon={"arrow"}
                pathClass={"group-hover:fill-green duration-200 ease-in"}
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Worked;
