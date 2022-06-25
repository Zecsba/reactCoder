import { useState } from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import Casita from "../icons/Casita";
import Flechita from "../icons/Flecha";

const NavBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-stone-700 h-screen p-5  pt-8 relative duration-300`}
      >

        <img
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <Link to="/">
          <div className="flex gap-x-4 items-center">
            <img src="./src/assets/LogoVectorizado.png" className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}/> 
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}>
              Zecsba
            </h1>
          </div>
        </Link>
        <ul className="pt-6">
            <Link to="/category/fina">
                <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}>
                      <div className="flex">
                        {/* <img src={`./src/assets/home-free-icon-font.png`} className="mr-5 w-5 h-5"/> */}
                        <Casita></Casita>
                        <span className={`${!open && "hidden"} origin-left duration-200 text-base`}>
                          Sedas Finas               
                        </span>
                      </div>
                </li>
            </Link>

            <Link to="/category/rugosa">
                <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}>
                    <div className="flex">
                      <img src={`./src/assets/book-free-icon-font.png`} className="mr-5 w-5 h-5"/>
                      <span className={`${!open && "hidden"} origin-left duration-200 text-base`}>
                        Telas Rugosas         
                      </span>
                    </div>
                </li>
            </Link>       
            <Link to="/leerDatos">
              <button className="text-white">Agrega un producto</button>
            </Link>
        </ul>
      </div>

      <div className="m-7">
        <CartWidget />
      </div>
    </div>
  )
}

export default NavBar