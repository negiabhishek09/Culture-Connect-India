import { PartyPopper, Utensils, Music, Flower2, Shirt, Palette } from 'lucide-react';
import { motion } from 'motion/react';

export function EnhancedCategories() {
  const categories = [
    {
      icon: PartyPopper,
      name: 'Festivals',
      description: 'Celebrate vibrant festivals',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      count: '200+',
    },
    {
      icon: Utensils,
      name: 'Food',
      description: 'Discover regional cuisines',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      count: '500+',
    },
    {
      icon: Music,
      name: 'Dance',
      description: 'Experience traditional dances',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      count: '150+',
    },
    {
      icon: Flower2,
      name: 'Traditions',
      description: 'Learn age-old customs',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      count: '300+',
    },
    {
      icon: Shirt,
      name: 'Clothing',
      description: 'Explore ethnic fashion',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      count: '400+',
    },
    {
      icon: Palette,
      name: 'Handicrafts',
      description: 'Support local artisans',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      count: '250+',
    },
  ];

  return (
    <section id="explore" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full font-semibold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Explore Categories
          </motion.span>
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
            Cultural <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Categories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dive deep into the diverse aspects of Indian culture and heritage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className={`group relative p-8 ${category.bgColor} rounded-3xl hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent overflow-hidden`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Hover Background Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.4 }}
              />

              {/* Count Badge */}
              <motion.div 
                className="absolute top-4 right-4 px-3 py-1 bg-white rounded-full text-sm font-bold text-gray-700 shadow-md"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {category.count}
              </motion.div>

              <motion.div
                className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 relative z-10`}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <category.icon className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2 relative z-10">
                {category.name}
              </h3>
              <p className="text-gray-600 mb-4 relative z-10">{category.description}</p>
              
              <motion.div 
                className="flex items-center gap-2 text-orange-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity relative z-10"
                initial={{ x: -20 }}
                whileHover={{ x: 0 }}
              >
                Explore <span>→</span>
              </motion.div>

              {/* Animated Border */}
              <motion.div
                className={`absolute inset-0 rounded-3xl border-2 border-transparent`}
                whileHover={{
                  borderImage: `linear-gradient(135deg, ${category.color.includes('orange') ? '#f97316' : '#6366f1'}, transparent) 1`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
