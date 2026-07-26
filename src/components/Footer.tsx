import { Mail, Linkedin, Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black/10 backdrop-blur-sm text-white py-2 px-4 md:px-8 items-center md:flex-row justify-center">
      {/* Social Icons */}
      <div className="flex gap-6 justify-center mb-2 md:mb-0">
        <a
          href="https://mail.google.com/mail/u/3/#inbox?compose=CllgCJfpsXfpncMWvNvgfmdsMKlrggMkcJVgBczkpJJBctKNfdlSVfgScvvjwzNHrJgGDWqfbDB"
          className="hover:text-blue-400 transition"
          aria-label="Email"
        >
          <Mail size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/kumaran-saravanan-259a64240/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
          aria-label="LinkedIn"
        >
          <Linkedin size={22} />
        </a>
        <a
          href="https://wa.me/917815938246"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition"
          aria-label="WhatsApp"
        >
          <Phone size={22} />
        </a>
        <a
          href="https://www.instagram.com/kumaran61003"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"
          aria-label="Instagram"
        >
          <Instagram size={22} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs text-white/70 text-center pt-2">
        © {new Date().getFullYear()} S Kumaran. All rights reserved.
      </p>
    </footer>
  );
}