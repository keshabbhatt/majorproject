import { motion } from 'framer-motion';
import { Brain, Sparkles, GraduationCap, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black ai-mesh-background py-1">

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto pt-32 relative z-10"
      >
        <div className="flex justify-center mb-8">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-purple-600/20 rounded-full ring-2 ring-purple-500/20"
          >
            <Brain size={48} className="text-purple-400" />
          </motion.div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
          SOE Intel
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300 leading-relaxed">
          Revolutionizing engineering education with AI-powered personalized learning
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-purple-600/10 px-6 py-3 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:bg-purple-600/20 transition-all shadow-md shadow-purple-500/10"
          >
            <Sparkles className="text-purple-400" size={20} />
            <span className="text-purple-100">35% Improved Exam Readiness</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-pink-600/10 px-6 py-3 rounded-2xl backdrop-blur-sm border border-pink-500/20 hover:bg-pink-600/20 transition-all shadow-md shadow-pink-500/10"
          >
            <GraduationCap className="text-pink-400" size={20} />
            <span className="text-pink-100">FWU-SOE Specialized</span>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-md hover:shadow-purple-500/25 flex items-center gap-2"
          >
            Start Learning Now
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-lg font-semibold hover:bg-white/10 transition-all"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
