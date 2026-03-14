import Icons from "../common/Icons";

const Card = ({ desc, name, profession, image }) => {
  return (
    <div className="p-6 flex flex-col justify-between gap-7 shadow-[0_4px_54px_0_rgba(0,0,0,0.05)] rounded-3xl hover:scale-102 cursor-pointer transition-all duration-200">
      <div className="flex gap-4 flex-col">
        <Icons icon="rating" />
        <p className="text-base text-secondary font-normal leading-[150%]">
          {desc}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <span className="border border-primary opacity-10 w-full"></span>
        <div className="flex gap-1.25">
          <img
            src={image && null}
            alt=""
            className="h-12.5 w-12.5 rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="text-primary font-semibold text-base">{name}</h3>
            <p className="text-secondary text-sm font-normal">{profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
