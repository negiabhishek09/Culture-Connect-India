import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useNavigate } from 'react-router';

export function CommunitySection() {
  const navigate = useNavigate();
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const posts = [
    {
      user: {
        name: 'Priya Sharma',
        avatar: 'https://images.unsplash.com/photo-1725611224180-4a50ef13a0e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ5NDUwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        location: 'Jaipur, Rajasthan',
      },
      image: 'https://images.unsplash.com/photo-1757237367150-3c134720f075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSYWphc3RoYW4lMjBJbmRpYSUyMHBhbGFjZSUyMGNvbG9yZnVsfGVufDF8fHx8MTc3NDk0NzY0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Exploring the magnificent Hawa Mahal at sunset 🌅',
      likes: 1234,
      comments: 89,
      time: '2 hours ago',
    },
    {
      user: {
        name: 'Abhishek Singh',
        avatar: 'https://images.unsplash.com/photo-1774437678561-c321687f6986?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBtYW4lMjB0cmFkaXRpb25hbCUyMGF0dGlyZXxlbnwxfHx8fDE3NzUwMjY1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        location: 'Kerala',
      },
      image: 'https://images.unsplash.com/photo-1593417034675-3ed7eda1bee9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBJbmRpYSUyMGJhY2t3YXRlcnMlMjBib2F0c3xlbnwxfHx8fDE3NzUwMjUyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Peaceful morning in the backwaters of Kerala 🚤',
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
      caption: 'Spiritual vibes at the Ganga Aarti ceremony 🪔',
      likes: 3421,
      comments: 198,
      time: '1 day ago',
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
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full font-semibold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Join the Community
          </motion.span>
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
            Community <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Feed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Share your cultural experiences and connect with fellow enthusiasts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
              <div className="relative h-72 overflow-hidden">
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

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-10 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/community')}
          >
            Explore Community
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
