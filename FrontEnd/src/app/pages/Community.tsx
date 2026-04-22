import { motion } from 'motion/react';
import { Heart, MessageCircle, Share2, Bookmark, Plus } from 'lucide-react';
import { useState } from 'react';
import { ModernNavbar } from '../components/ModernNavbar';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Community() {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const posts = [
    {
      user: {
        name: 'Priya Sharma',
        avatar: 'https://images.unsplash.com/photo-1725611224180-4a50ef13a0e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ5NDUwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        location: 'Jaipur, Rajasthan',
      },
      image: 'https://images.unsplash.com/photo-1757237367150-3c134720f075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSYWphc3RoYW4lMjBJbmRpYSUyMHBhbGFjZSUyMGNvbG9yZnVsfGVufDF8fHx8MTc3NDk0NzY0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Exploring the magnificent Hawa Mahal at sunset 🌅 #RajasthanDiaries',
      likes: 1234,
      comments: 89,
      time: '2 hours ago',
    },
    {
      user: {
        name: 'Arjun Patel',
        avatar: 'https://images.unsplash.com/photo-1774437678561-c321687f6986?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBtYW4lMjB0cmFkaXRpb25hbCUyMGF0dGlyZXxlbnwxfHx8fDE3NzUwMjY1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        location: 'Kerala',
      },
      image: 'https://images.unsplash.com/photo-1593417034675-3ed7eda1bee9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBJbmRpYSUyMGJhY2t3YXRlcnMlMjBib2F0c3xlbnwxfHx8fDE3NzUwMjUyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Peaceful morning in the backwaters of Kerala 🚤 #GodsOwnCountry',
      likes: 2156,
      comments: 134,
      time: '5 hours ago',
    },
    {
      user: {
        name: 'Anjali Reddy',
        avatar: 'https://images.unsplash.com/photo-1759840278276-fe8d58873dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBwZXJzb24lMjB0cmFkaXRpb25hbCUyMGRyZXNzfGVufDF8fHx8MTc3NTAyNjU1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        location: 'Varanasi, UP',
      },
      image: 'https://images.unsplash.com/photo-1578064875345-77fa5f1fc1f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLdW1iaCUyME1lbGElMjBJbmRpYSUyMHNwaXJpdHVhbHxlbnwxfHx8fDE3NzUwMjUyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Spiritual vibes at the Ganga Aarti ceremony 🪔 #VaranasiMagic',
      likes: 3421,
      comments: 198,
      time: '1 day ago',
    },
    {
      user: {
        name: 'Rohit Singh',
        avatar: 'https://images.unsplash.com/photo-1774437678561-c321687f6986?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBtYW4lMjB0cmFkaXRpb25hbCUyMGF0dGlyZXxlbnwxfHx8fDE3NzUwMjY1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        location: 'Amritsar, Punjab',
      },
      image: 'https://images.unsplash.com/photo-1723118579792-e22d17b155ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQdW5qYWIlMjBJbmRpYSUyMGdvbGRlbiUyMHRlbXBsZXxlbnwxfHx8fDE3NzUwMjUyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Golden Temple looking absolutely divine today 🙏 #PunjabVibes',
      likes: 2876,
      comments: 156,
      time: '1 day ago',
    },
    {
      user: {
        name: 'Maya Gupta',
        avatar: 'https://images.unsplash.com/photo-1725611224180-4a50ef13a0e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ5NDUwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        location: 'Ahmedabad, Gujarat',
      },
      image: 'https://images.unsplash.com/photo-1608616693828-64dfd0f5c5ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdWphcmF0JTIwSW5kaWElMjBjdWx0dXJlJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzc1MDI1MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Navratri nights are pure magic! 💃 #GujaratFestival',
      likes: 1987,
      comments: 112,
      time: '2 days ago',
    },
    {
      user: {
        name: 'Vikram Kumar',
        avatar: 'https://images.unsplash.com/photo-1774437678561-c321687f6986?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBtYW4lMjB0cmFkaXRpb25hbCUyMGF0dGlyZXxlbnwxfHx8fDE3NzUwMjY1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        location: 'Pushkar, Rajasthan',
      },
      image: 'https://images.unsplash.com/photo-1717131554010-06626b1cc138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQdXNoa2FyJTIwY2FtZWwlMjBmYWlyJTIwSW5kaWF8ZW58MXx8fHwxNzc1MDI1MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'The incredible Pushkar Camel Fair experience! 🐪 #RajasthanCulture',
      likes: 3654,
      comments: 223,
      time: '3 days ago',
    },
  ];

  const toggleLike = (index: number) => {
    setLikedPosts(prev => 
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
            className="flex items-center justify-between mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Community <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Feed</span>
              </h1>
              <p className="text-xl text-gray-600">
                Share and explore cultural experiences from across India
              </p>
            </div>
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-5 h-5" />
              Create Post
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* User Header */}
                <div className="p-4 flex items-center gap-3">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ImageWithFallback
                      src={post.user.avatar}
                      alt={post.user.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-orange-200"
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{post.user.name}</h4>
                    <p className="text-sm text-gray-500">{post.user.location}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Bookmark className="w-5 h-5 text-gray-400 hover:text-orange-600" />
                  </motion.button>
                </div>

                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Actions */}
                <div className="p-4">
                  <div className="flex items-center gap-4 mb-3">
                    <motion.button
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleLike(index)}
                    >
                      <Heart 
                        className={`w-6 h-6 transition-colors ${
                          likedPosts.includes(index) 
                            ? 'text-red-500 fill-red-500' 
                            : 'text-gray-600'
                        }`}
                      />
                      <span className="font-semibold text-gray-700">
                        {likedPosts.includes(index) ? post.likes + 1 : post.likes}
                      </span>
                    </motion.button>

                    <motion.button
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <MessageCircle className="w-6 h-6 text-gray-600" />
                      <span className="font-semibold text-gray-700">{post.comments}</span>
                    </motion.button>

                    <motion.button
                      className="ml-auto"
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Share2 className="w-6 h-6 text-gray-600" />
                    </motion.button>
                  </div>

                  <p className="text-gray-900 mb-2">{post.caption}</p>
                  <p className="text-sm text-gray-500">{post.time}</p>
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
