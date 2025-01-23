import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png"; // Adjust the path to your logo image

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-gray-800 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
         {/* Left-aligned Logo */}
<Link to="/" className="flex items-center">
  <img
    src={Logo} // Use the imported logo
    alt="Logo"
    className="w-16 h-19" // Adjust the size as needed
  />
</Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="bg-black/60 backdrop-blur-sm rounded-full px-6 py-2 flex items-center gap-6 border border-gray-700 shadow-lg">
              <Link
                to="/courses"
                className="text-gray-300 hover:text-white transition-all hover:shadow-md px-2 py-1 rounded-md"
              >
                Courses
              </Link>
              <Link
                to="/study-materials"
                className="text-gray-300 hover:text-white  transition-all hover:shadow-md px-2 py-1 rounded-md"
              >
                Study Materials
              </Link>
              <Link
                to="/practice"
                className="text-gray-300 hover:text-white transition-all hover:shadow-md px-2 py-1 rounded-md"
              >
                Practice
              </Link>
              <Link
                to="/dashboard"
                className="text-gray-300 hover:text-white transition-all hover:shadow-md px-2 py-1 rounded-md"
              >
                Dashboard
              </Link>
            </div>
          </div>

          {/* Right-aligned Sign-in Button */}
          <Link
            to="/login"
            className="hidden md:inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-red-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
          >
            Sign In
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 rounded-lg bg-black/60"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-4 space-y-3 border border-gray-700">
              <Link
                to="/courses"
                className="block text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-black/40 transition-colors shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/study-materials"
                className="block text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-black/40 transition-colors shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Study Materials
              </Link>
              <Link
                to="/practice"
                className="block text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-black/40 transition-colors shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Practice
              </Link>
              <Link
                to="/dashboard"
                className="block text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-black/40 transition-colors shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/login"
                className="block bg-gradient-to-r from-red-200 to-pink-400 text-white px-4 py-2 rounded-lg hover:from-red-200 hover:to-pink-400 transition-all text-center mt-4 shadow-lg hover:shadow-xl"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
