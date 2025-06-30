'use client';
import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Desktop: Vertical fixed navbar */}
      <nav className="fixed top-16 text-md md:text-3xl right-0 h-[calc(100vh-4rem)] w-50 text-white mt-25 mr-5 p-4 font-['Bariol_Regular'] hidden md:flex flex-col items-end gap-y-18">
        <Link href="/" className={`relative px-3 py-1 rounded-md text-white transition duration-300
    ${pathname === '/' ? 'active-link' : 'hover:text-teal-300'}
  `}>Home</Link>
        <Link href="/aboutme" className={`relative px-3 py-1 rounded-md text-white transition duration-300
    ${pathname === '/aboutme' ? 'active-link' : 'hover:text-teal-300'}
  `}>About Me</Link>
        <Link href="/projects" className={`relative px-3 py-1 rounded-md text-white transition duration-300
    ${pathname === '/projects' ? 'active-link' : 'hover:text-teal-300'}
  `}>Projects</Link>
        <Link href="/skills" className={`relative px-3 py-1 rounded-md text-white transition duration-300
    ${pathname === '/skills' ? 'active-link' : 'hover:text-teal-300'}
  `}>Skills</Link>
        <Link href="/contactme" className={`relative px-3 py-1 rounded-md text-white transition duration-300
    ${pathname === '/contactme' ? 'active-link' : 'hover:text-teal-300'}
  `}>Contact Me</Link>
      </nav>

      {/* Mobile: Hamburger menu */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button onClick={() => setOpen(!open)}>
          <Menu className="text-white" />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white p-4 text-lg font-['Bariol_Regular'] rounded-xl shadow-lg">
            <Link href="/" className="block py-1 hover:text-teal-300">Home</Link>
            <Link href="/aboutme" className="block py-1 hover:text-teal-300">About Me</Link>
            <Link href="/projects" className="block py-1 hover:text-teal-300">Projects</Link>
            <Link href="/skills" className="block py-1 hover:text-teal-300">Skills</Link>
            <Link href="/contactme" className="block py-1 hover:text-teal-300">Contact Me</Link>
          </div>
        )}
      </div>
    </>
  );
}
