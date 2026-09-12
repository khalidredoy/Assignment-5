import logoText from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <button
          className="flex items-center justify-center rounded-md p-1 text-gray-700 md:hidden"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <img
            src={logoText}
            alt="Dev Stack"
            className="h-9 w-auto object-contain md:h-10"
          />
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

        <div className="flex items-center gap-2 md:gap-4">
          <button className="text-xs font-medium text-gray-600 hover:text-pink-500 md:text-sm">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-3 py-2 text-xs font-medium text-white md:px-5 md:text-sm">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
