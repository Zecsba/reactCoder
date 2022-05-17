import { useState } from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Inicio", src: "home-free-icon-font", link: "#"},
    { title: "Libros", src: "book-free-icon-font"}
  ];

  return (
    <div className="itemNavBar flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-stone-700 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/arrow_left.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/LogoVectorizado.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Zecsba
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <a href={`${Menu.link}`} className="flex">
                <img src={`./src/assets/${Menu.src}.png`} className="mr-5 w-5 h-5"/>
                <span className={`${!open && "hidden"} origin-left duration-200 text-base`}>
                  {Menu.title}                
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-3">
        <h1 className="text-2xl font-semibold "><CartWidget /></h1>
      </div>
    </div>
  )
}

export default NavBar