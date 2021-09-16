import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function AddEffect(props) {
  return (
    <div class="flex items-center bg-amazon_blue p-1 flex-grow py-2">
      <div class="grid gap-8 items-start justify-center w-screen">
        <div class="relative group w-screen">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-700 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div class="relative px-7 py-4 bg-amazon_blue rounded-lg leading-none flex items-center divide-x divide-gray-600">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
function Header() {
  return (
    <header>
      <AddEffect>
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
          {/* top nav */}
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            {/* image amazon logo */}
            <Image
              src="https://www.freepnglogos.com/uploads/ice-png/ice-cube-transparent-vector-graphic-pixabay-36.png"
              width={150}
              height={40}
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>
          {/* Search */}
          <div className="hidden sm:flex items-center h-10 rounded-md flex-grow">
            {/* <input className="p2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none" type="text" />
                <SearchIcon className="h-12 p-4"/> */}
          </div>
          {/* Right */}
          <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
            <div className="link">
              <p> Hello bhuvan</p>
              <p className="font-extrabold md:text-sm"> Account & List</p>
            </div>
            <div className="link">
              <p>Returns</p>
              <p className="font-extrabold md:text-sm">& Orders</p>
            </div>
            <div className=" relative link flex items-center">
              <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                0
              </span>
              <ShoppingCartIcon className="h-10" />
              <p className="hidden md:inline font-extrabold md:text-sm mt-2">
                Basket
              </p>
            </div>
          </div>
        </div>
      </AddEffect>

      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        {/* bottom nav */}
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">GlassBowl Video</p>
        <p className="link">GlassBowl Business</p>
        <p className="link">Todays Deal</p>
        <p className="link hidden lg:inline-flex">Electornics</p>
        <p className="link hidden lg:inline-flex">Food and Grocery</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper ToolKit</p>
        <p className="link hidden lg:inline-flex">Health and Personal</p>
      </div>
    </header>
  );
}

export default Header;
