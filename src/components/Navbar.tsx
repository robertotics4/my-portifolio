export function Navbar() {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-semibold text-white">LogoAqui</div>
        <div className="md:hidden">
          <button className="text-white" id="menu-toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex">
          <ul className="space-x-4 md:flex">
            <li className="md:inline-block">
              <a href="#" className="text-white">
                Home
              </a>
            </li>
            <li className="md:inline-block">
              <a href="#" className="text-white">
                About
              </a>
            </li>
            <li className="md:inline-block">
              <a href="#" className="text-white">
                Tech Stack
              </a>
            </li>
            <li className="md:inline-block">
              <a href="#" className="text-white">
                Projects
              </a>
            </li>
            <li className="md:inline-block">
              <a href="#" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
