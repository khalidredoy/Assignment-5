import logoText from "../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <img
            src={logoText}
            alt="Dev Stack"
            className="h-8 w-auto object-contain"
          />

          <p className="mt-6 max-w-xs text-sm leading-6 text-gray-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="mt-5 flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-pink-500">
              GitHub
            </a>

            <a href="#" className="hover:text-pink-500">
              Twitter
            </a>

            <a href="#" className="hover:text-pink-500">
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">Product</h3>

          <div className="mt-4 space-y-3 text-sm text-gray-500">
            <a href="#" className="block hover:text-pink-500">
              Technologies
            </a>

            <a href="#" className="block hover:text-pink-500">
              Projects
            </a>

            <a href="#" className="block hover:text-pink-500">
              Features
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">Company</h3>

          <div className="mt-4 space-y-3 text-sm text-gray-500">
            <a href="#" className="block hover:text-pink-500">
              About
            </a>

            <a href="#" className="block hover:text-pink-500">
              Contact
            </a>

            <a href="#" className="block hover:text-pink-500">
              Careers
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">Legal</h3>

          <div className="mt-4 space-y-3 text-sm text-gray-500">
            <a href="#" className="block hover:text-pink-500">
              Privacy
            </a>

            <a href="#" className="block hover:text-pink-500">
              Terms
            </a>

            <a href="#" className="block hover:text-pink-500">
              License
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-gray-500 md:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-pink-500">
              Privacy
            </a>

            <a href="#" className="hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
