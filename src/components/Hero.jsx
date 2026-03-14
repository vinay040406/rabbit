import Button from "./common/Button";
import Icons from "./common/Icons";

const Hero = () => {
  return (
    <div className="w-full mx-auto bg-[linear-gradient(to_bottom,#e8f5e0_0%,#f0f9ea_40%,white_100%)] pt-35 px-4">
      <div className="max-w-285 flex w-full lg:items-end justify-between mx-auto lg:px-0 px-4 lg:flex-row flex-col items-center">
        <div className="w-full flex flex-col lg:items-start items-center lg:text-left text-center  mb-6  max-w-122.5 ">
          <h1 className="lg:text-custom-5xl md:text-4xl text-3xl font-bold text-primary">
            Built by People. <br /> Backed by Tech.
          </h1>
          <p className="mt-4 text-secondary ">
            We’re not a software company pretending to care.We’re real
            underwriters — with real decision-making power — using tech to move
            faster, not think for us.
          </p>
          <Button
            text="Join the Success"
            className="md:py-4.25 py-3 flex items-center group gap-2.5 nd:pr-5.25 mt-8 md:pl-9.5 px-4 rounded-full border-white border text-white bg-green hover:text-green hover:bg-white duration-300 ease-in hover:border-green hover:border"
            svg={
              <Icons
                icon={"arrow"}
                pathClass={"group-hover:fill-green duration-200 ease-in"}
              />
            }
          />
        </div>
        <img
          src="/assets/Images/Png/Hero.png"
          alt=""
          className="xl:translate-x-22"
        />
      </div>
    </div>
  );
};

export default Hero;
