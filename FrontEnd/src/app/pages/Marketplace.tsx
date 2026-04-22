import { motion } from 'motion/react';
import { Search, Filter, ShoppingCart, Heart, Star } from 'lucide-react';
import { useState } from 'react';
import { ModernNavbar } from '../components/ModernNavbar';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Marketplace() {
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const products = [
    {
      name: 'Banarasi Silk Saree',
      price: '₹8,999',
      originalPrice: '₹12,999',
      image: 'https://images.unsplash.com/photo-1742287721821-ddf522b3f37b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzaWxrJTIwc2FyZWUlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NzUwMjY1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      reviews: 234,
      category: 'Clothing',
    },
    {
      name: 'Traditional Gold Necklace',
      price: '₹45,999',
      originalPrice: '₹59,999',
      image: 'https://images.unsplash.com/photo-1769706039344-7ad8d7ec2442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBqZXdlbHJ5JTIwbmVja2xhY2UlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NzUwMjY1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5.0,
      reviews: 89,
      category: 'Jewelry',
    },
    {
      name: 'Handcrafted Pottery Set',
      price: '₹2,499',
      originalPrice: '₹3,499',
      image: 'https://images.unsplash.com/photo-1768321481665-b40705ab11ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBoYW5kaWNyYWZ0cyUyMGFydGlzYW4lMjBwb3R0ZXJ5fGVufDF8fHx8MTc3NTAyNTI0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.6,
      reviews: 145,
      category: 'Handicrafts',
    },
    {
      name: 'Spice Collection Box',
      price: '₹1,299',
      originalPrice: '₹1,799',
      image: 'https://images.unsplash.com/photo-1772460759097-ad68b3232a4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzcGljZXMlMjBtYXJrZXQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzUwMjUyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      reviews: 312,
      category: 'Food',
    },
    {
      name: 'Traditional Textiles',
      price: '₹3,999',
      originalPrice: '₹5,999',
      image: 'https://images.unsplash.com/photo-1773846012458-e6a66c26e49f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0ZXh0aWxlcyUyMHNob3AlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzUwMjUyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.7,
      reviews: 178,
      category: 'Textiles',
    },
    {
      name: 'Heritage Jewelry Set',
      price: '₹15,999',
      originalPrice: '₹22,999',
      image: 'https://images.unsplash.com/photo-1758995115857-2de1eb6283d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBqZXdlbHJ5JTIwdHJhZGl0aW9uYWwlMjBnb2xkfGVufDF8fHx8MTc3NTAyNTI0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      reviews: 156,
      category: 'Jewelry',
    },
  ];

  const categories = ['All', 'Clothing', 'Jewelry', 'Handicrafts', 'Food', 'Textiles'];

  const toggleLike = (index: number) => {
    setLikedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ModernNavbar />
      
      <div className="pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Cultural <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Marketplace</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Shop authentic Indian products directly from local artisans
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            className="mb-8 flex flex-col md:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
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

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-72 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full">
                      {product.category}
                    </span>
                  </div>

                  <motion.button
                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleLike(index)}
                  >
                    <Heart 
                      className={`w-5 h-5 transition-colors ${
                        likedItems.includes(index) 
                          ? 'text-red-500 fill-red-500' 
                          : 'text-gray-600'
                      }`}
                    />
                  </motion.button>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                    <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                  </div>

                  <motion.button
                    className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </motion.button>
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
