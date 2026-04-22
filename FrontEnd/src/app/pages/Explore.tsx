import { motion } from 'motion/react';
import { Search, Filter, MapPin, Star } from 'lucide-react';
import { ModernNavbar } from '../components/ModernNavbar';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Explore() {
  const categories = ['All', 'Festivals', 'Food', 'Dance', 'Traditions', 'Clothing', 'Handicrafts'];
  
  const items = [
    {
      title: 'Rajasthan Heritage Tour',
      category: 'Traditions',
      location: 'Jaipur, Rajasthan',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1757237367150-3c134720f075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSYWphc3RoYW4lMjBJbmRpYSUyMHBhbGFjZSUyMGNvbG9yZnVsfGVufDF8fHx8MTc3NDk0NzY0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      price: '₹2,999',
    },
    {
      title: 'Kerala Kathakali Dance',
      category: 'Dance',
      location: 'Kochi, Kerala',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1593417034675-3ed7eda1bee9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBJbmRpYSUyMGJhY2t3YXRlcnMlMjBib2F0c3xlbnwxfHx8fDE3NzUwMjUyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '₹1,499',
    },
    {
      title: 'Pushkar Camel Fair',
      category: 'Festivals',
      location: 'Pushkar, Rajasthan',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1717131554010-06626b1cc138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQdXNoa2FyJTIwY2FtZWwlMjBmYWlyJTIwSW5kaWF8ZW58MXx8fHwxNzc1MDI1MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '₹5,999',
    },
    {
      title: 'Traditional Pottery Workshop',
      category: 'Handicrafts',
      location: 'Khurja, UP',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1768321481665-b40705ab11ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBoYW5kaWNyYWZ0cyUyMGFydGlzYW4lMjBwb3R0ZXJ5fGVufDF8fHx8MTc3NTAyNTI0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      price: '₹899',
    },
    {
      title: 'Gujarat Navratri Festival',
      category: 'Festivals',
      location: 'Ahmedabad, Gujarat',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1608616693828-64dfd0f5c5ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdWphcmF0JTIwSW5kaWElMjBjdWx0dXJlJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzc1MDI1MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '₹3,499',
    },
    {
      title: 'Punjab Food Trail',
      category: 'Food',
      location: 'Amritsar, Punjab',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1723118579792-e22d17b155ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQdW5qYWIlMjBJbmRpYSUyMGdvbGRlbiUyMHRlbXBsZXxlbnwxfHx8fDE3NzUwMjUyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      price: '₹1,999',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ModernNavbar />
      
      <div className="pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Explore <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Culture</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover authentic Indian cultural experiences and traditions
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            className="mb-8 flex flex-col md:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for cultures, festivals, traditions..."
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none"
              />
            </div>
            <motion.button
              className="px-8 py-4 bg-white border-2 border-gray-200 rounded-2xl font-semibold text-gray-700 hover:border-orange-500 transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Filter className="w-5 h-5" />
              Filters
            </motion.button>
          </motion.div>

          {/* Categories */}
          <motion.div
            className="mb-8 flex gap-3 overflow-x-auto pb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap ${
                  index === 0
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-500'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-white rounded-full">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{item.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 text-orange-600" />
                    <span className="text-sm">{item.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">{item.price}</span>
                    <motion.button
                      className="px-6 py-2 bg-orange-600 text-white rounded-full font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
