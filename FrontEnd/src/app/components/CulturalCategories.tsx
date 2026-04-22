import { PartyPopper, Utensils, Music, Flower2, Shirt, Palette } from 'lucide-react';

export function CulturalCategories() {
  const categories = [
    {
      icon: PartyPopper,
      name: 'Festivals',
      description: 'Celebrate vibrant festivals',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Utensils,
      name: 'Food',
      description: 'Discover regional cuisines',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: Music,
      name: 'Dance',
      description: 'Experience traditional dances',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Flower2,
      name: 'Traditions',
      description: 'Learn age-old customs',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      icon: Shirt,
      name: 'Clothing',
      description: 'Explore ethnic fashion',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: Palette,
      name: 'Handicrafts',
      description: 'Support local artisans',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
    },
  ];

  return (
    <section id="explore" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Cultural <span className="text-orange-600">Categories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dive deep into the diverse aspects of Indian culture and heritage
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group p-8 ${category.bgColor} rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-current`}
              style={{ borderColor: category.bgColor }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
              >
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600">{category.description}</p>
              <div className="mt-4 text-orange-600 font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Explore →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
