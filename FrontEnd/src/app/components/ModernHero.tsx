import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';

export function ModernHero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-indigo-50"></div>
      
      {/* Animated Blobs */}
      <motion.div 
        className="absolute top-20 left-10 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-40 right-10 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute bottom-20 left-1/2 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating Elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="text-orange-500 w-6 h-6" />
          </motion.div>
          <span className="text-orange-600 font-semibold tracking-wide text-lg">
            Discover the Real India
          </span>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="text-orange-500 w-6 h-6" />
          </motion.div>
        </motion.div>

        <motion.h1 
          className="text-5xl sm:text-6xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover India's
          <br />
          <motion.span 
            className="bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            style={{
              backgroundSize: '200% auto',
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Cultural Diversity
          </motion.span>
        </motion.h1>

        <motion.p 
          className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Explore traditions, festivals, artisans and heritage from every corner of India
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="group px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all flex items-center gap-3 relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/explore')}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Explore Culture</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
          </motion.button>

          <motion.button
            className="group px-10 py-5 bg-white text-orange-600 border-2 border-orange-600 rounded-full font-semibold text-lg hover:bg-orange-50 transition-all flex items-center gap-3"
            whileHover={{ scale: 1.05, y: -2, boxShadow: "0 20px 40px rgba(251, 146, 60, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/community')}
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Join Community</span>
          </motion.button>
        </motion.div>

        {/* Enhanced Stats */}
        <motion.div 
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { number: '29', label: 'States & UTs', color: 'from-orange-500 to-orange-600' },
            { number: '1000+', label: 'Festivals', color: 'from-indigo-500 to-indigo-600' },
            { number: '500+', label: 'Artisans', color: 'from-purple-500 to-purple-600' },
            { number: '22', label: 'Languages', color: 'from-pink-500 to-pink-600' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white/80 backdrop-blur-sm rounded-3xl hover:shadow-2xl transition-all cursor-pointer border border-gray-100 group"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <motion.div 
                className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}
                whileHover={{ scale: 1.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
              <motion.div 
                className={`h-1 bg-gradient-to-r ${stat.color} rounded-full mt-4`}
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1, delay: 1.5 + index * 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
