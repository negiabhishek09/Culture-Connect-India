import { useState, useEffect } from 'react';
import { Menu, X, User, Search, ShoppingBag, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router';
import logoImg from '../../imports/AZ1HylrRIHU2bgVKHbaC2A-AZ1HylrSZmM6JSLqFu-l_w.jpg';

export function ModernNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'Events', path: '/events' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Community', path: '/community' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
          >
            <img 
              src={logoImg} 
              alt="Cultural Connect India" 
              className="h-12 w-12 rounded-xl shadow-lg object-cover"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Cultural Connect
              </span>
              <span className="text-xs text-indigo-600 -mt-1 font-semibold">India</span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`px-6 py-2 rounded-full font-medium transition-all relative ${
                  isActive(item.path)
                    ? 'text-orange-600'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-orange-600 rounded-full"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right Side Icons & Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button 
              className="p-2.5 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Search size={20} />
            </motion.button>
            
            <motion.button 
              className="p-2.5 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingBag size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </motion.button>

            <motion.button 
              className="p-2.5 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </motion.button>

            <motion.button 
              className="px-6 py-2.5 text-orange-600 border-2 border-orange-600 rounded-full hover:bg-orange-50 transition-all font-semibold"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(251, 146, 60, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/login')}
            >
              Login
            </motion.button>

            <div className="relative">
              <motion.button 
                className="p-2 w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <User size={20} />
              </motion.button>

              <AnimatePresence>
                {showUserMenu && (
                  <motion.div
                    className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-4 border-b border-gray-100">
                      <p className="font-semibold text-gray-900">Guest User</p>
                      <p className="text-sm text-gray-500">guest@example.com</p>
                    </div>
                    <button 
                      className="w-full text-left px-4 py-3 hover:bg-orange-50 transition-colors text-gray-700"
                      onClick={() => navigate('/profile')}
                    >
                      My Profile
                    </button>
                    <button className="w-full text-left px-4 py-3 hover:bg-orange-50 transition-colors text-gray-700">
                      Saved Items
                    </button>
                    <button className="w-full text-left px-4 py-3 hover:bg-orange-50 transition-colors text-gray-700">
                      Settings
                    </button>
                    <button className="w-full text-left px-4 py-3 hover:bg-red-50 transition-colors text-red-600 border-t border-gray-100">
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden py-4 border-t border-gray-200 bg-white"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => {
                    navigate(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-3 px-4 ${
                    isActive(item.path)
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-gray-700 hover:bg-orange-50'
                  } transition-colors`}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <div className="flex items-center gap-3 px-4 mt-4">
                <button 
                  className="flex-1 px-6 py-2 text-orange-600 border-2 border-orange-600 rounded-full hover:bg-orange-50 transition-all"
                  onClick={() => navigate('/login')}
                >
                  Login
                </button>
                <button 
                  className="p-2 w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white"
                  onClick={() => navigate('/profile')}
                >
                  <User size={18} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
