import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-white text-lg font-semibold">Contact Us</h2>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" /> Kanchanpur, Nepal
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-green-500" /> 9805762636
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-500" /> majorproject@info.com
            </p>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h2 className="text-white text-lg font-semibold">Useful Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h2 className="text-white text-lg font-semibold">Follow Us</h2>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-400 transition"
              >
                <FaTwitter className="text-white" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-pink-500 transition"
              >
                <FaInstagram className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} SOE Intel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
