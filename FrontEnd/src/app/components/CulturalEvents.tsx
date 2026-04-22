import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CulturalEvents() {
  const events = [
    {
      name: 'Pushkar Camel Fair',
      date: 'November 1-8, 2026',
      location: 'Pushkar, Rajasthan',
      description: 'The world-famous annual fair featuring camels, cultural performances, and vibrant celebrations.',
      image: 'https://images.unsplash.com/photo-1717131554010-06626b1cc138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQdXNoa2FyJTIwY2FtZWwlMjBmYWlyJTIwSW5kaWF8ZW58MXx8fHwxNzc1MDI1MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Cultural Fair',
    },
    {
      name: 'Hornbill Festival',
      date: 'December 1-10, 2026',
      location: 'Kohima, Nagaland',
      description: 'A spectacular showcase of Naga heritage, traditional arts, dances, and indigenous games.',
      image: 'https://images.unsplash.com/photo-1700040224625-e502a5fbe7d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYWdhbGFuZCUyMHRyaWJhbCUyMGZlc3RpdmFsJTIwSW5kaWF8ZW58MXx8fHwxNzc1MDI1MjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Tribal Festival',
    },
    {
      name: 'Kumbh Mela',
      date: 'January 14 - February 26, 2027',
      location: 'Prayagraj, Uttar Pradesh',
      description: 'The world\'s largest peaceful gathering, a sacred Hindu pilgrimage held every 12 years.',
      image: 'https://images.unsplash.com/photo-1578064875345-77fa5f1fc1f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLdW1iaCUyME1lbGElMjBJbmRpYSUyMHNwaXJpdHVhbHxlbnwxfHx8fDE3NzUwMjUyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Spiritual Gathering',
    },
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Upcoming Cultural <span className="text-orange-600">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the grandeur of India's most celebrated cultural events and festivals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-orange-600 text-white text-sm font-semibold rounded-full">
                    {event.tag}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {event.name}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4 text-orange-600" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 text-orange-600" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{event.description}</p>

                <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-4">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
