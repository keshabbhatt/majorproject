import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // import AOS styles
import {
  Brain,
  GraduationCap,
  LineChart,
  BookOpen,
  ArrowRight,
  Users,
  Target,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Bot } from 'lucide-react'; 
import { Search } from 'lucide-react';

export function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust animation duration if needed
      easing: 'ease-in-out', // Optional easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col bg-[#111122] justify-between overflow-x-hidden text-white" style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}>
      {/* Navbar */}
      <div className="flex items-center bg-[#111122] p-4 pb-2 justify-between">
        <h2 className="text-lg font-bold leading-tight text-white text-center flex-1 pl-12">SOE Intel</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex items-center justify-center h-12 w-12 rounded-xl bg-transparent text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="... (SVG path data) ..." />
            </svg>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 rounded-full mb-6">
            <Brain className="w-5 h-5 text-white" />
            <span className="text-white font-medium">AI-Powered Learning</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            Transform Engineering Education with SOE Intel
          </h1>
          <p className="text-xl text-gray-300 mb-8">Personalized AI learning platform designed specifically for Far Western University's School of Engineering</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/about" className="bg-black/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-medium hover:bg-black/50 transition-colors shadow-lg border border-gray-700">
              Learn More
            </Link>
          </div>
        </div>
      </header>
     

{/* CTA Section */}
<section className="bg-gradient-to-r from-black-600 to-indigo-600 py-16">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-white mb-6">
      <Bot className="w-6 h-6 inline-block mr-2 text-white" /> {/* Adding AI icon before the text */}
      AI tutor
    </h2>
    <p className="text-red-100 mb-8 max-w-2xl mx-auto">
      Access AI tutor now
    </p>

    {/* Search Box */}
    <Link
      to="/search"
      className="flex items-center justify-between bg-white text-black w-full max-w-xl mx-auto px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg"
    >
      <input
        type="text"
        placeholder="Search for AI tutor..."
        className="w-full bg-transparent outline-none text-black placeholder-gray-400"
      />
      <Search className="w-6 h-6 text-black" /> {/* Using Search icon from lucide-react */}
    </Link>
  </div>
</section>


      {/* Features Section */}
      <section className="py-16 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen className="w-6 h-6 text-blue-400" />}
              title="Smart Content Generation"
              description="Automatically generates concise notes and study materials from FWU's curriculum"
              aos="fade-up"
            />
            <FeatureCard
              icon={<GraduationCap className="w-6 h-6 text-indigo-400" />}
              title="Exam Preparation"
              description="Custom MCQs and mock exams aligned with your course objectives"
              aos="fade-up"
            />
            <FeatureCard
              icon={<LineChart className="w-6 h-6 text-purple-400" />}
              title="Progress Tracking"
              description="Real-time analytics and performance insights to guide your learning"
              aos="fade-up"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-black/40 backdrop-blur-sm border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Why Choose SOE Intel?
            </h2>
            <div className="space-y-6">
              <BenefitRow icon={<Target className="w-5 h-5 text-blue-400" />} title="Personalized Learning Path" description="Adaptive content tailored to your learning style and pace" aos="fade-up" />
              <BenefitRow icon={<Users className="w-5 h-5 text-indigo-400" />} title="FWU-Specific Content" description="Materials aligned with Far Western University's engineering curriculum" aos="fade-up" />
              <BenefitRow icon={<Clock className="w-5 h-5 text-purple-400" />} title="Time-Efficient Learning" description="Optimized study materials to help you learn faster and retain more" aos="fade-up" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black/50 backdrop-blur-sm py-16 text-white border-y border-gray-800">
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

function FeatureCard({ icon, title, description, aos }: { icon: React.ReactNode; title: string; description: string; aos: string }) {
  return (
    <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-800" data-aos={aos}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function BenefitRow({ icon, title, description, aos }: { icon: React.ReactNode; title: string; description: string; aos: string }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg bg-black/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all border border-gray-800" data-aos={aos}>
      <div className="p-2 bg-black/30 rounded-lg">{icon}</div>
      <div>
        <h3 className="font-semibold mb-1 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}
