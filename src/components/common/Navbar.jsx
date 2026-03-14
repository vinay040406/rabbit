import Icons from "./Icons";
import { NAV_LINKS_LIST } from "../../utils/helper";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [hamBurgerState, setHamBurgetState] = useState(false);
  const handleHamburgerClick = () => {
    setHamBurgetState((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = hamBurgerState ? "hidden" : "auto";
  }, [hamBurgerState]);

  return (
    <div className="w-screen bg-light-green fixed top-0 left-0 right-0 z-20">
      <nav className="nav flex justify-between items-center py-5 max-w-285 px-4  mx-auto">
        <a href="/" className={`z-20 h-15 w-33`}>
          <Icons icon={"logo"} />
        </a>
        <div
          className={`justify-end lg:gap-44.25 md:gap-4 gap-4 items-center w-full flex menu ${hamBurgerState && "show"}`}
        >
          <ul className="lg:gap-6 md:gap-3 gap-2 flex md:flex-row flex-col text-center ">
            {NAV_LINKS_LIST.map((nav, i) => {
              return (
                <li
                  onClick={() => setHamBurgetState(false)}
                  key={i}
                  className={`md:text-base text-lg  ${nav == "Home" ? "font-semibold text-primary" : "font-normal text-secondary "} `}
                >
                  <a>{nav}</a>
                </li>
              );
            })}
          </ul>
          <Button
            text={"Contact Us"}
            className={
              "border-2 md:border-primary lg:px-8.25 px-6 py-4 rounded-full text-primary  hover:border-transparent hover:text-white hover:bg-primary duration-300 ease-in"
            }
          />
        </div>

        {hamBurgerState ? (
          <span
            onClick={handleHamburgerClick}
            className="fixed top-8 right-6 text-3xl md:hidden flex"
          >
            <RxCross2 />
          </span>
        ) : (
          <span
            onClick={handleHamburgerClick}
            className="fixed top-8 right-6 text-3xl md:hidden flex  "
          >
            <GiHamburgerMenu />
          </span>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
