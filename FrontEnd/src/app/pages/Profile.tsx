import { motion } from 'motion/react';
import { Settings, MapPin, Calendar, Heart, BookmarkCheck, Camera, Edit } from 'lucide-react';
import { ModernNavbar } from '../components/ModernNavbar';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Profile() {
  const savedCultures = [
    {
      title: 'Rajasthan Heritage',
      image: 'https://images.unsplash.com/photo-1757237367150-3c134720f075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSYWphc3RoYW4lMjBJbmRpYSUyMHBhbGFjZSUyMGNvbG9yZnVsfGVufDF8fHx8MTc3NDk0NzY0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'States',
    },
    {
      title: 'Kerala Backwaters',
      image: 'https://images.unsplash.com/photo-1593417034675-3ed7eda1bee9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBJbmRpYSUyMGJhY2t3YXRlcnMlMjBib2F0c3xlbnwxfHx8fDE3NzUwMjUyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'States',
    },
    {
      title: 'Pushkar Fair',
      image: 'https://images.unsplash.com/photo-1717131554010-06626b1cc138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQdXNoa2FyJTIwY2FtZWwlMjBmYWlyJTIwSW5kaWF8ZW58MXx8fHwxNzc1MDI1MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Events',
    },
    {
      title: 'Traditional Pottery',
      image: 'https://images.unsplash.com/photo-1768321481665-b40705ab11ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBoYW5kaWNyYWZ0cyUyMGFydGlzYW4lMjBwb3R0ZXJ5fGVufDF8fHx8MTc3NTAyNTI0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Handicrafts',
    },
  ];

  const userPosts = [
    {
      image: 'https://images.unsplash.com/photo-1608616693828-64dfd0f5c5ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdWphcmF0JTIwSW5kaWElMjBjdWx0dXJlJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzc1MDI1MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      likes: 345,
      comments: 23,
    },
    {
      image: 'https://images.unsplash.com/photo-1723118579792-e22d17b155ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQdW5qYWIlMjBJbmRpYSUyMGdvbGRlbiUyMHRlbXBsZXxlbnwxfHx8fDE3NzUwMjUyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      likes: 567,
      comments: 45,
    },
    {
      image: 'https://images.unsplash.com/photo-1700040224625-e502a5fbe7d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYWdhbGFuZCUyMHRyaWJhbCUyMGZlc3RpdmFsJTIwSW5kaWF8ZW58MXx8fHwxNzc1MDI1MjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      likes: 892,
      comments: 67,
    },
  ];

  const stats = [
    { label: 'Posts', value: '42' },
    { label: 'Following', value: '234' },
    { label: 'Followers', value: '1.2K' },
    { label: 'Saved', value: '156' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ModernNavbar />
      
      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Header */}
          <motion.div
            className="bg-white rounded-3xl shadow-lg p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile Picture */}
              <div className="relative">
                <motion.div 
                  className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-1"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-white overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1725611224180-4a50ef13a0e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ5NDUwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                <motion.button
                  className="absolute bottom-0 right-0 w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Camera className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Priya Sharma</h1>
                    <p className="text-gray-600">Cultural Enthusiast & Explorer</p>
                  </div>
                  <div className="flex gap-3 mt-4 md:mt-0">
                    <motion.button
                      className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Edit className="w-4 h-4" />
                      Edit Profile
                    </motion.button>
                    <motion.button
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700"
                      whileHover={{ scale: 1.05, backgroundColor: '#f3f4f6' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Settings className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-600" />
                    <span>Jaipur, Rajasthan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-600" />
                    <span>Joined March 2024</span>
                  </div>
                </div>

                <p className="text-gray-700 max-w-2xl mb-6">
                  Passionate about exploring India's rich cultural heritage. Love to travel, 
                  discover traditional arts, and support local artisans. 🇮🇳✨
                </p>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 bg-orange-50 rounded-2xl"
                      whileHover={{ scale: 1.05, backgroundColor: '#fed7aa' }}
                    >
                      <div className="text-2xl font-bold text-orange-600">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tabs */}
          <div className="mb-8">
            <div className="flex gap-2 border-b border-gray-200">
              {['My Posts', 'Saved Cultures', 'Liked'].map((tab, index) => (
                <motion.button
                  key={tab}
                  className={`px-6 py-3 font-semibold ${
                    index === 0 
                      ? 'text-orange-600 border-b-2 border-orange-600' 
                      : 'text-gray-600 hover:text-orange-600'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {tab}
                </motion.button>
              ))}
            </div>
          </div>

          {/* My Posts Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Camera className="w-6 h-6 text-orange-600" />
              My Posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {userPosts.map((post, index) => (
                <motion.div
                  key={index}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <ImageWithFallback
                    src={post.image}
                    alt={`Post ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white">
                    <div className="flex items-center gap-2">
                      <Heart className="w-6 h-6 fill-white" />
                      <span className="font-semibold">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Camera className="w-6 h-6" />
                      <span className="font-semibold">{post.comments}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Saved Cultures */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BookmarkCheck className="w-6 h-6 text-orange-600" />
              Saved Cultures
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {savedCultures.map((item, index) => (
                <motion.div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
