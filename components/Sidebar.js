import React from 'react'
import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon
} from "@heroicons/react/outline"

const Sidebar = () => {
  return (
    <div>
      <button className="flex items-center space-x-2 hover:text-white">
        <HomeIcon className="h-5 w-5" />
        <p>Home</p>
      </button>
      <button className="flex items-center space-x-2 hover:text-white">
        <SearchIcon className="h-5 w-5" />
        <p>Search</p>
      </button>
      <button className="flex items-center space-x-2 hover:text-white">
        <LibraryIcon className="h-5 w-5" />
        <p>Your library</p>
      </button>
    </div>
  );
}

export default Sidebar