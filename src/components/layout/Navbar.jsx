import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      px-6
      py-4
      "
    >
      <div
        className="
        glass
        max-w-7xl
        mx-auto
        rounded-2xl
        px-6
        py-4
        flex
        items-center
        justify-between
        "
      >
        <h2
          className="
          text-xl
          font-bold
          text-cyan-400
          "
        >
          Dimensimu 3D
        </h2>

        <nav className="hidden md:flex gap-8">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#catalog">Catalog</a>
          <a href="#contact">Contact</a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          <HiMenuAlt3 size={28} />
        </button>
      </div>

      {open && (
        <div
          className="
          md:hidden
          glass
          mt-2
          rounded-2xl
          p-4
          "
        >
          <a href="#about" className="block py-2">
            About
          </a>

          <a href="#services" className="block py-2">
            Services
          </a>

          <a href="#catalog" className="block py-2">
            Catalog
          </a>

          <a href="#contact" className="block py-2">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
