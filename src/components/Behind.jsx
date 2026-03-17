import Heading from "./common/Heading";

const Section3 = () => {
  return (
    <div className="w-full md:my-42.5 my-15 px-4 lg:px-0">
      <div
        className="max-w-285 w-full flex lg:flex-row flex-col justify-between mx-auto lg:items-start
       items-center"
      >
        <img
          src="/assets/Images/webp/Section3Image.webp"
          alt=""
          className="max-h-88.5 max-w-123 w-full object-cover"
        />
        <div className="flex flex-col mt-10 max-w-124 gap-3 lg:text-left text-center">
          <Heading
            parentCss={"gap-3"}
            h2={"Who’s Behind Rabbit?"}
            pCss={"text-secondary"}
            p={
              'Our team isn’t just from finance. We’re ex-operators, formerfounders, and recovering bankers who got tired of saying "no" when we knew there was a better way to fund.'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
