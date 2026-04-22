import { Sparkles, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-indigo-50"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="text-orange-500 w-5 h-5" />
          <span className="text-orange-600 font-semibold tracking-wide">
            Discover the Real India
          </span>
          <Sparkles className="text-orange-500 w-5 h-5" />
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Explore India's Rich
          <br />
          <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Cultural Heritage
          </span>
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Connect with authentic Indian traditions, festivals, local artisans, and
          businesses. Experience the diversity and richness of India's cultural tapestry.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
            Explore Culture
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white text-orange-600 border-2 border-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105">
            Join Community
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '29', label: 'States & UTs' },
            { number: '1000+', label: 'Festivals' },
            { number: '500+', label: 'Artisans' },
            { number: '22', label: 'Languages' },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
