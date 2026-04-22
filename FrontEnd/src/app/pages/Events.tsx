import { motion } from 'motion/react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { ModernNavbar } from '../components/ModernNavbar';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Events() {
  const upcomingEvents = [
    {
      name: 'Pushkar Camel Fair',
      date: 'November 1-8, 2026',
      time: '9:00 AM - 6:00 PM',
      location: 'Pushkar, Rajasthan',
      attendees: '2.5K',
      image: 'https://images.unsplash.com/photo-1717131554010-06626b1cc138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQdXNoa2FyJTIwY2FtZWwlMjBmYWlyJTIwSW5kaWF8ZW58MXx8fHwxNzc1MDI1MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Festival',
      price: 'Free',
    },
    {
      name: 'Hornbill Festival',
      date: 'December 1-10, 2026',
      time: '10:00 AM - 8:00 PM',
      location: 'Kohima, Nagaland',
      attendees: '1.8K',
      image: 'https://images.unsplash.com/photo-1700040224625-e502a5fbe7d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYWdhbGFuZCUyMHRyaWJhbCUyMGZlc3RpdmFsJTIwSW5kaWF8ZW58MXx8fHwxNzc1MDI1MjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Cultural',
      price: '₹500',
    },
    {
      name: 'Kumbh Mela 2027',
      date: 'Jan 14 - Feb 26, 2027',
      time: 'All Day',
      location: 'Prayagraj, UP',
      attendees: '10K+',
      image: 'https://images.unsplash.com/photo-1578064875345-77fa5f1fc1f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLdW1iaCUyME1lbGElMjBJbmRpYSUyMHNwaXJpdHVhbHxlbnwxfHx8fDE3NzUwMjUyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Spiritual',
      price: 'Free',
    },
    {
      name: 'Gujarat Navratri',
      date: 'October 15-24, 2026',
      time: '7:00 PM - 12:00 AM',
      location: 'Ahmedabad, Gujarat',
      attendees: '3.2K',
      image: 'https://images.unsplash.com/photo-1608616693828-64dfd0f5c5ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdWphcmF0JTIwSW5kaWElMjBjdWx0dXJlJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzc1MDI1MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Festival',
      price: '₹200',
    },
  ];

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
              Cultural <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Events</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join upcoming cultural festivals and events across India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="md:flex">
                  <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full">
                        {event.tag}
                      </span>
                    </div>
                  </div>

                  <div className="md:w-3/5 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.name}</h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-600">
                        <Calendar className="w-5 h-5 text-orange-600" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Clock className="w-5 h-5 text-orange-600" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin className="w-5 h-5 text-orange-600" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Users className="w-5 h-5 text-orange-600" />
                        <span>{event.attendees} interested</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Entry Fee</p>
                        <p className="text-2xl font-bold text-orange-600">{event.price}</p>
                      </div>
                      <motion.button
                        className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Register Now
                      </motion.button>
                    </div>
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
