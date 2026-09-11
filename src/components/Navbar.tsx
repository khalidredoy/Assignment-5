const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

       
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-xs font-bold text-white">
            DS
          </div>

          <h1 className="text-lg font-bold text-gray-900">
            Dev <span className="text-pink-500">Stack</span>
          </h1>
        </div>

     
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-pink-500">
            Home
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-500 hover:text-pink-500"
          >
            Technologies
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-500 hover:text-pink-500"
          >
            Projects
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-500 hover:text-pink-500"
          >
            About
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-500 hover:text-pink-500"
          >
            Contact
          </a>
        </div>

       
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-gray-600 hover:text-pink-500">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-5 py-2 text-sm font-medium text-white">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;