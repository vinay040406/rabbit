import Button from "./common/Button";
import Icons from "./common/Icons";

const Hero = () => {
  return (
    <div className="w-full mx-auto bg-linear-to-b from-[rgba(76,175,80,0.1)] to-[rgba(76,175,80,0)] pt-35 px-4">
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
            className="md:py-4.25 py-3 flex items-center group gap-2.5 md:pr-5.25 mt-8 md:pl-9.5 px-4 rounded-full border-white border text-white bg-greener hover:text-green hover:bg-white duration-300 ease-in hover:border-green hover:border"
            svg={
              <Icons
                icon={"arrow"}
                pathClass={"group-hover:fill-green duration-200 ease-in"}
              />
            }
          />
        </div>
        <img
          src="/assets/Images/webp/Hero.webp"
          alt="heroImage"
          className="xl:translate-x-22 max-w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
