import { SECTION6_DATA_LIST } from "../utils/helper";
import Card from "./common/Card";
import Heading from "./common/Heading";
import Icons from "./common/Icons";
import Button from "./common/Button";

const Section6 = () => {
  return (
    <div className="w-full mx-auto lg:mt-42.5 mt-15 px-4">
      <div className="max-w-285 w-full mx-auto flex flex-col md:gap-15 gap-5 items-center relative text-left">
        <Heading
          h2={"Real Stories. Real Funding."}
          parentCss={"gap-3 items-center text-center"}
          p={
            "We’ve helped small businesses from all industries get approved and grow fast. Here’s what they had to say:"
          }
          pCss={"max-w-[590px] w-full text-center text-secondary"}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:px-0 px-6">
          {SECTION6_DATA_LIST.map((item, index) => (
            <div key={index} className="flex ">
              <Card
                image={item.image}
                desc={item.desc}
                name={item.name}
                profession={item.profession}
              />
            </div>
          ))}
        </div>
        <div className="max-w-285 w-full absolute mx-auto items-center flex flex-col text-center rounded-3xl text-white  lg:-bottom-126 md:-bottom-100 -bottom-75 lg:max-h-82 overflow-hidden">
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              backgroundImage: "url(/assets/Images/webp/Bg-img2.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="relative z-10 max-w-189.5 w-full flex flex-col px-4 items-center md:top-0 mt-15 mb-15.5 px-">
            <h4 className="lg:text-custom-3xl md:text-3xl text-2xls font-bold leading-[120%]">
              Love what Rabbit Did for You! <br /> Share your story and help
              others discover human-first funding.
            </h4>
            <Button
              text="Submit Your Testimonial"
              className="md:py-4.5 py-3 md:px-8 mt-8 px-4  flex items-center text-xs md:text-base group gap-1.5 rounded-full border-transparent  text-white bg-dark-green hover:bg-green duration-300 ease-in hover:border-white hover:border"
              svg={<Icons icon={"arrow"} pathClass={" duration-200 ease-in"} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
