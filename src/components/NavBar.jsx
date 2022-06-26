import { Disclosure} from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">
                    <img className="hidden lg:block h-12 w-auto" src="https://res.cloudinary.com/dmmjxnepm/image/upload/v1656198003/LogoVectorizado_izme2l.png" alt="Zecsba"/>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6 m-auto">
                  <div className="flex space-x-4 flex-row">

                              <Link to='/'>
                                        <span className='text-white uppercase p-2 sm:text-sm'>CATALOGO</span>
                              </Link>
                              <Link to="/category/fina">
                                        <span className='text-white uppercase p-2 sm:text-sm'>Sedas finas</span>
                              </Link>

                              <Link to="/category/rugosa">
                                        <span className='text-white uppercase p-2 sm:text-sm'>Sedas Rugosas</span>
                              </Link>       
                              <Link to="/leerDatos">
                                        <span className="text-white uppercase p-2 sm:text-sm">Agrega un producto</span>
                              </Link>             
                  </div>
                </div>
              </div>
                  <CartWidget/>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
                <Disclosure.Button>
                  <div class="flex flex-col ">
                              <Link to='/'>
                                        <span className='text-white uppercase'>CATALOGO</span>
                              </Link>
                              <Link to="/category/fina">
                                        <span className='text-white uppercase'>Sedas finas</span>
                              </Link>

                              <Link to="/category/rugosa">
                                        <span className='text-white uppercase'>Sedas Rugosas</span>
                              </Link>       
                              <Link to="/leerDatos">
                                        <span className="text-white uppercase">Agrega un producto</span>
                              </Link>
                  </div>                               
                </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}