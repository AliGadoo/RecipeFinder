import logo from "/logo.png";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <div className="flex items-center gap-1">
        <img
          className="w-10 h-10 md:w-16 md:h-16"
          src={logo}
          alt="Recipe Finder LOGO"
        />
        <h1 className="text-xl md:text-2xl font-extrabold text-green-800">
          Recipe Finder
        </h1>
      </div>
      <nav>
        <ul className="flex gap-4 text-green-600">
          <li>
            <a
              className="hover:text-green-800 transition-colors duration-200"
              href=""
            >
              Random Recipe
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
