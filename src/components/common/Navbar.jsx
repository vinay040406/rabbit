import Icons from "./Icons";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { NAV_LINKS_LIST } from "../../utils/helper";

// const Navbar = () => {
//   const [hamBurgerState, setHamBurgetState] = useState(false);

//   const handleHamburgerClick = () => {
//     setHamBurgetState((prev) => !prev);
//   };

//   useEffect(() => {
//     document.body.style.overflow = hamBurgerState ? "hidden" : "auto";
//   }, [hamBurgerState]);

//   return (
//     <div className="w-full bg-transparent backdrop-blur-2xl  fixed top-0 left-0 right-0 z-20">
//       <nav className="nav flex justify-between items-center py-5 max-w-285 px-4 mx-auto">
//         <a href="/" className={`z-20 md:h-15 md:w-33 h-10 w-20`}>
//           <Icons icon={"logo"} />
//         </a>
//         {/* <div
//           className={`justify-end lg:gap-44.25 md:gap-4 gap-4 items-center w-full flex menu z-10 ${hamBurgerState && "show"} `}
//         >
//           <ul className="lg:gap-6 md:gap-3 gap-2 flex md:flex-row flex-col text-center items-center ">
//             {NAV_LINKS_LIST.map((nav, i) => {
//               return (
//                 <li
//                   onClick={() => setHamBurgetState(false)}
//                   key={i}
//                   className={`md:text-base text-lg  ${nav.link == "Home" ? "font-semibold text-primary" : "font-normal text-secondary "} `}
//                 >
//                   <a>{nav.title}</a>
//                 </li>
//               );
//             })}
//           </ul>
//           <Button
//             text={"Contact Us"}
//             className={
//               "border-2 md:border-primary lg:px-7.5  md:px-6 px-4 md:py-4.5 py-2.5 rounded-full text-primary  hover:border-transparent hover:text-white hover:bg-primary duration-300 ease-in"
//             }
//           />
//         </div> */}

//         <div
//           className={`items-center w-full flex z-10
//     md:justify-end md:gap-4 lg:gap-44.25 md:static md:h-auto md:bg-transparent md:flex-row
//     fixed top-0 left-0 h-screen flex-col justify-center bg-light-green
//     transition-all duration-150 ease-linear
//     ${hamBurgerState ? "right-0" : "-right-full"}
//   `}
//         >
//           <ul className="lg:gap-6 md:gap-3 gap-2 flex md:flex-row flex-col text-center items-center">
//             {NAV_LINKS_LIST.map((nav, i) => {
//               return (
//                 <li
//                   onClick={() => setHamBurgetState(false)}
//                   key={i}
//                   className={`md:text-base text-lg ${nav.link == "Home" ? "font-semibold text-primary" : "font-normal text-secondary"}`}
//                 >
//                   <a>{nav.title}</a>
//                 </li>
//               );
//             })}
//           </ul>
//           <Button
//             text={"Contact Us"}
//             className={
//               "border-2 md:border-primary lg:px-7.5 md:px-6 px-4 md:py-4.5 py-2.5 rounded-full text-primary hover:border-transparent hover:text-white hover:bg-primary duration-300 ease-in"
//             }
//           />
//         </div>
//         {hamBurgerState ? (
//           <span
//             onClick={handleHamburgerClick}
//             className="fixed top-6 right-6  z-20 text-3xl md:hidden flex"
//           >
//             <RxCross2 />
//           </span>
//         ) : (
//           <span
//             onClick={handleHamburgerClick}
//             className="fixed top-6 right-6 text-3xl md:hidden flex z-20 "
//           >
//             <GiHamburgerMenu />
//           </span>
//         )}
//       </nav>
//     </div>
//   );
// };

const Navbar = () => {
  const [hamBurgerState, setHamBurgetState] = useState(false);

  const handleHamburgerClick = () => {
    setHamBurgetState((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = hamBurgerState ? "hidden" : "auto";
  }, [hamBurgerState]);

  return (
    <div className="w-full bg-transparent backdrop-blur-2xl fixed top-0 left-0 right-0 z-20">
      <nav className="nav flex justify-between items-center py-5 max-w-285 px-4 mx-auto">
        <a href="/" className="z-20 md:h-15 md:w-33 h-10 w-20">
          <Icons icon={"logo"} />
        </a>

        <div
          className={`items-center w-full flex z-10
            md:justify-end md:gap-4 lg:gap-44.25 md:static md:h-auto md:bg-transparent md:flex-row
            fixed top-0 left-0 h-screen flex-col justify-center bg-light-green
            transition-all duration-150 ease-linear gap-3
            ${hamBurgerState ? "translate-x-0" : "translate-x-full md:translate-x-0"}
          `}
        >
          <ul className="lg:gap-6 md:gap-3 gap-3 flex md:flex-row flex-col text-center items-center">
            {NAV_LINKS_LIST.map((nav, i) => (
              <li
                onClick={() => setHamBurgetState(false)}
                key={i}
                className={`md:text-base text-lg ${nav.link == "Home" ? "font-semibold text-primary" : "font-normal text-secondary"}`}
              >
                <a>{nav.title}</a>
              </li>
            ))}
          </ul>
          <Button
            text={"Contact Us"}
            className="border-2 md:border-primary lg:px-7.5 md:px-6 px-4 md:py-4.5 py-2.5 rounded-full text-primary hover:border-transparent hover:text-white hover:bg-primary duration-300 ease-in"
          />
        </div>

        {hamBurgerState ? (
          <span
            onClick={handleHamburgerClick}
            className="fixed top-6 right-6 z-20 text-3xl md:hidden flex"
          >
            <RxCross2 />
          </span>
        ) : (
          <span
            onClick={handleHamburgerClick}
            className="fixed top-6 right-6 z-20 text-3xl md:hidden flex"
          >
            <GiHamburgerMenu />
          </span>
        )}
      </nav>
    </div>
  );
};
export default Navbar;
