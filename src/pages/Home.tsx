import { BookOpen, Target, Bot, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen overflow-y-auto bg-gradient-to-r from-blue-800 via-indigo-600 to-pink-800 text-white">
      
      {/* CTA Section */}
      <section className="py-16 pt-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            <Bot className="w-6 h-6 inline-block mr-2 text-white" />
            AI Tutor
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Access AI tutor now
          </p>

          {/* Search Box */}
          <Link
            to="/search"
            className="flex items-center justify-between bg-white text-black w-full max-w-xl mx-auto px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg mb-12"
          >
            <input
              type="text"
              placeholder="Search for AI tutor..."
              className="w-full bg-transparent outline-none text-black placeholder-gray-400"
            />
            <Search className="w-6 h-6 text-black" />
          </Link>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14 text-gradient bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <div className="mb-4">
                <BookOpen className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Smart Content Generation</h3>
              <p className="text-gray-300">
                Automatically generates concise notes and study materials from FWU's curriculum
              </p>
            </div>

            {/* You can add more feature cards here */}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-black/20 backdrop-blur-sm border-t border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            Why Choose SOE Intel?
          </h2>
          <div className="space-y-6">
            {/* Benefit Row 1 */}
            <div className="flex items-center space-x-4">
              <div className="text-blue-400">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Personalized Learning Path</h3>
                <p className="text-gray-300">Adaptive content tailored to your learning style and pace</p>
              </div>
            </div>

            {/* Repeat similar structure for other benefits */}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black/60 backdrop-blur-sm py-16 text-white border-y border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">35%</div>
              <p className="text-blue-300">Improvement in Exam Readiness</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-blue-300">Students in Pilot Program</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-blue-300">AI Tutor Availability</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
