import react from "react"

const Nav = ()=>{
    return (
        <div>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skill">Skills</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-4xl">MK</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu font-semibold menu-horizontal px-1">
      <li><a href="/"className="text-xl bg-blue-300 rounded-full p-2 pr-4 pl-4 m-4">Home</a></li>
      <li><a href="#about"className="text-xl bg-blue-300 rounded-full p-2 pr-4 pl-4 m-4">About</a></li>
        <li><a href="#skill"className="text-xl bg-blue-300 rounded-full p-2 pr-4 pl-4 m-4">Skills</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <a className="btn text-1xl bg-black rounded-full p-2 pr-4 pl-4 m-4 text-white" href="#contact">Contact</a>
  </div>
</div>
</div>
    )
}


export default Nav;