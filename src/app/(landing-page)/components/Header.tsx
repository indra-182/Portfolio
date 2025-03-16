import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container fixed mx-auto border border-[#33353F] bg-opacity-100 top-0 left-0 right-0 z-10 bg-gray-900 bg-opactiy-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto py-2 p-8 sm:p-20">
        <Link
          href="/"
          className="text-2xl md:text-3xl text-white font-semibold"
        >
          WebBlog
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex mt-0 p-4 md:p-0 md:flex-row md:space-x-8 ">
            <li key="about">
              <Link href="/about" className="hover:text-slate-200">
                About
              </Link>
            </li>
            <li key="projects">
              <Link href="/projects" className="hover:text-slate-200">
                Projects
              </Link>
            </li>
            <li key="blog">
              <Link href="/blog" className="hover:text-slate-200">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
