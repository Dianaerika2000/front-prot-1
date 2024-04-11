import { Link } from 'react-router-dom';

export default function NavBarMenu() {
  return (
    <nav className="bg-primary w-full">
      <div className="container mx-auto flex items-center justify-between py-5">
        <Link className="text-white text-2xl font-bold" to="/">
          {/* <img src="https://res.cloudinary.com/dwhmsrfva/image/upload/v1696700327/room_m7ooqc.png" alt="Logo" width="60" height="80" className="d-inline-block align-text-top"/> */}
          <span className="material-symbols-outlined custom-icon">DEDTE</span>
        </Link>
        {/* Button collapse */}
        <button
          className="block lg:hidden text-white focus:outline-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        {/* Nav content */}
        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-4 text-white">
            <li className="nav-item">
              <Link className="text-uppercase active" to='/periodo-academico'>
                Periodo Academico
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-uppercase active" to='/carta-descriptiva'>
                Carta Descriptiva
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
