import { ShoppingBag, Heart, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useNavigate } from 'react-router';

export function MarketplaceSection() {
  const navigate = useNavigate();
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const products = [
    {
      name: 'Banarasi Silk Saree',
      price: '₹8,999',
      originalPrice: '₹12,999',
      image: 'https://images.unsplash.com/photo-1742287721821-ddf522b3f37b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzaWxrJTIwc2FyZWUlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NzUwMjY1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      sold: 234,
      tag: 'Bestseller',
    },
    {
      name: 'Traditional Gold Necklace',
      price: '₹45,999',
      originalPrice: '₹59,999',
      image: 'https://images.unsplash.com/photo-1769706039344-7ad8d7ec2442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBqZXdlbHJ5JTIwbmVja2xhY2UlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NzUwMjY1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5.0,
      sold: 89,
      tag: 'Premium',
    },
    {
      name: 'Handcrafted Pottery Set',
      price: '₹2,499',
      originalPrice: '₹3,499',
      image: 'https://images.unsplash.com/photo-1768321481665-b40705ab11ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBoYW5kaWNyYWZ0cyUyMGFydGlzYW4lMjBwb3R0ZXJ5fGVufDF8fHx8MTc3NTAyNTI0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.6,
      sold: 145,
      tag: 'Handmade',
    },
    {
      name: 'Spice Collection Box',
      price: '₹1,299',
      originalPrice: '₹1,799',
      image: 'https://images.unsplash.com/photo-1772460759097-ad68b3232a4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzcGljZXMlMjBtYXJrZXQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzUwMjUyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      sold: 312,
      tag: 'Organic',
    },
  ];

  const toggleLike = (index: number) => {
    setLikedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full font-semibold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Shop Authentic
          </motion.span>
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
            Cultural <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Marketplace</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover authentic Indian products directly from local artisans
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Tag Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full">
                    {product.tag}
                  </span>
                </div>

                {/* Like Button */}
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

                {/* Quick Add Overlay */}
                <motion.div
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  <motion.button
                    className="w-full py-2 bg-white text-orange-600 rounded-full font-semibold flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Quick Add
                  </motion.button>
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({product.sold} sold)</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                  <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                </div>

                <motion.button
                  className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/marketplace')}
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
