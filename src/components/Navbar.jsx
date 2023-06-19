import { useState } from "react";
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";
import { FaReact } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    {
      title: "Beranda",
      link: "#home",
    },
    {
      title: "Tentang Saya",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Hubungi Saya",
      link: "#contact",
    },
  ];

  return (
    <div className="fixed top-0 w-full bg-[#212121] h-16 z-[99999]">
      <div className="h-full text-white md:flex justify-between w-[90%] m-auto items-center ">
        <div className="h-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-2">
            <span className="animate-spin-slow">
              <FaReact size={30} />
            </span>
            <h1 className="font-extrabold text-xl inline-block">
              Eka Priyanthara
            </h1>
          </div>
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiOutlineX size={30} /> : <HiMenuAlt1 size={30} />}
          </div>
        </div>
        <ul
          className={`flex flex-col items-start p-10 justify-start gap-5 py-5 md:py-4 top-[4rem] absolute -z-10 w-[300px] h-screen md:h-auto md:bg-[#212121] bg-[#252525] text-white md:text-white md:flex md:flex-row md:justify-center md:items-center md:z-auto md:gap-4 md:static md:w-auto transition-all duration-300 ease-in-out
          ${isOpen ? "right-[0px]" : "right-[-300px]"}`}
        >
          {navigation.map((nav) => (
            <li
              key={nav.title}
              className="font-bold"
              onClick={() => setIsOpen(!isOpen)}
            >
              <a href={nav.link}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
