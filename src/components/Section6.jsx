import { SECTION6_DATA_LIST } from "../utils/helper";
import Card from "./common/Card";
import Heading from "./common/Heading";
import Icons from "./common/Icons";
import Button from "../components/common/Button";

const Section6 = () => {
  return (
    <div className="w-full mx-auto lg:mt-42.5 mt-10 px-4">
      <div className="max-w-285 w-full mx-auto flex flex-col gap-15 items-center relative lg:text-left text-center">
        <Heading
          h2={"Real Stories. Real Funding."}
          parentCss={"gap-3 items-center"}
          p={
            "We’ve helped small businesses from all industries get approved and grow fast. Here’s what they had to say:"
          }
          pCss={"max-w-[590px] w-full text-center"}
        />
        <div className="grid md:grid-cols-3 gap-6 md:px-0 px-6">
          {SECTION6_DATA_LIST.map((item, index) => (
            <div key={index} className="flex ">
              <Card
                desc={item.desc}
                name={item.name}
                profession={item.profession}
              />
            </div>
          ))}
        </div>
        <div
          className="max-w-285 w-full absolute mx-auto items-center flex flex-col text-center rounded-3xl text-white  -bottom-126 lg:max-h-82 overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, #7AC943, #4CAF50)",
          }}
        >
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              backgroundImage: "url(/assets/Images/Png/Bg-img2.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.5,
            }}
          />
          <div className="relative z-10 max-w-189.5 w-full flex flex-col px-4 items-center mt-15 mb-15 px-">
            <h4 className="lg:text-custom-3xl md:text-3xl text-2xls font-bold leading-[120%]">
              Love what Rabbit Did for You! <br /> Share your story and help
              others discover human-first funding.
            </h4>
            <Button
              text="Submit Your Testimonial"
              className="md:py-4.5 py-3 flex items-center text-xs md:text-base group gap-2.5 md:pr-5.5 mt-8 md:pl-8 px-4 rounded-full border-transparent  text-white bg-dark-green hover:bg-green duration-300 ease-in hover:border-white hover:border"
              svg={<Icons icon={"arrow"} pathClass={" duration-200 ease-in"} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
