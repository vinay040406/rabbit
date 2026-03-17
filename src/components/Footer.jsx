import { FOOTER_LINKS } from "../utils/helper";
import Icons from "./common/Icons";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="w-full bg-ternary lg:mt-99.5 md:mt-70 mt-45 px-4">
      <div className="px-4">
        <div className="max-w-285 mx-auto relative flex flex-col items-center md:pt-50 pt-35  md:gap-15 text-secondary ">
          <a href="/" className="md:max-w-74.5 w-full flex items-start ">
            <Icons icon={"logo"} className={"md:h-full md:w-full h-25 w-35"} />
          </a>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-0 md:gap-5 sm:gap-5 gap-7 w-full max-w-249 lg:h-50">
            <div className="flex flex-col gap-3">
              <h5 className="text-secondary font-semibold leading-none">
                Rated 4.9 on trustpilot.
              </h5>
              <Icons
                icon={"trustPilot"}
                className={"md:h-20.25 md:w-42.75 h-15 w-30"}
              />
            </div>
            {FOOTER_LINKS.map((item, i) => (
              <div className="flex flex-col gap-3" key={i}>
                <h3 className="text-secondary font-semibold">{item.title}</h3>
                <ul className="flex flex-col gap-3">
                  {item.links.map((item, idx) => (
                    <li key={idx} className="md:text-base text-sm">
                      <a href="">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="md:flex flex-col gap-3 flex ">
              <h3 className="text-secondary font-semibold">Contact</h3>
              <ul className="gap-3 flex flex-col md:text-base text-sm">
                <li>
                  <a href="tel:520-702-5510" className="flex gap-2 group ">
                    <Icons
                      icon={"tel"}
                      pathClass={"group-hover:fill-[#5daf50]"}
                    />
                    520-702-5510
                  </a>
                </li>
                <li className="">
                  <a
                    href="mailto:Admin@rabbitfunding.io"
                    className="flex gap-2 group underline hover:no-underline"
                  >
                    <Icons
                      icon={"email"}
                      pathClass={"group-hover:fill-[#5daf50]"}
                    />
                    Admin@rabbitfunding.io
                  </a>
                </li>
                <li className="">
                  <a
                    href="geo:NY"
                    className="flex gap-2 group whitespace-nowrap"
                  >
                    <Icons
                      icon={"geo"}
                      pathClass={"group-hover:fill-[#5daf50]"}
                    />
                    28 Liberty St, NY, NY, 10005
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center lg:pb-3.5 pb-2 w-full flex flex-col gap-4 md:mt-10 mt-8">
            <p className="md:text-base text-sm">
              © {date} Rabbit Funding, LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <span className="border border-primary opacity-10 block w-full sm:-translate-y-13  -translate-y-15 " />
    </div>
  );
};

export default Footer;
