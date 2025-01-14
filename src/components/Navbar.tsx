import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Brain } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/50 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Company Logo */}
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl">SOE Intel</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="bg-black/60 backdrop-blur-sm rounded-full px-6 py-2 flex items-center gap-6 border border-gray-700">
              <Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link>
              <Link to="/study-materials" className="text-gray-300 hover:text-white transition-colors">Study Materials</Link>
              <Link to="/practice" className="text-gray-300 hover:text-white transition-colors">Practice</Link>
              <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</Link>
            </div>
            
            <Link 
              to="/login" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
            >
              Sign In
            </Link>
          </div>

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
                className="block text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-black/40 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link 
                to="/study-materials" 
                className="block text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-black/40 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Study Materials
              </Link>
              <Link 
                to="/practice" 
                className="block text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-black/40 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Practice
              </Link>
              <Link 
                to="/dashboard" 
                className="block text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-black/40 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                to="/login" 
                className="block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all text-center mt-4"
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