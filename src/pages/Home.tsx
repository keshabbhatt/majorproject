import { 
  Brain, 
  GraduationCap, 
  LineChart, 
  BookOpen, 
  ArrowRight,
  Users,
  Target,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen ai-mesh-background text-white">
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
          <p className="text-xl text-gray-300 mb-8">
            Personalized AI learning platform designed specifically for Far Western University's School of Engineering
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/about"
              className="bg-black/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-medium hover:bg-black/50 transition-colors shadow-lg border border-gray-700"
            >
              Learn More
            </Link>
          </div>
        </div>
      </header>

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
            />
            <FeatureCard
              icon={<GraduationCap className="w-6 h-6 text-indigo-400" />}
              title="Exam Preparation"
              description="Custom MCQs and mock exams aligned with your course objectives"
            />
            <FeatureCard
              icon={<LineChart className="w-6 h-6 text-purple-400" />}
              title="Progress Tracking"
              description="Real-time analytics and performance insights to guide your learning"
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
              <BenefitRow
                icon={<Target className="w-5 h-5 text-blue-400" />}
                title="Personalized Learning Path"
                description="Adaptive content tailored to your learning style and pace"
              />
              <BenefitRow
                icon={<Users className="w-5 h-5 text-indigo-400" />}
                title="FWU-Specific Content"
                description="Materials aligned with Far Western University's engineering curriculum"
              />
              <BenefitRow
                icon={<Clock className="w-5 h-5 text-purple-400" />}
                title="Time-Efficient Learning"
                description="Optimized study materials to help you learn faster and retain more"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the growing community of engineering students achieving better results with SOE Intel
          </p>
          <Link 
            to="/signup"
            className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors inline-block shadow-lg"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-800">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function BenefitRow({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg bg-black/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all border border-gray-800">
      <div className="p-2 bg-black/30 rounded-lg">{icon}</div>
      <div>
        <h3 className="font-semibold mb-1 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}