import { apps } from '@/config/apps.config';
import { siteConfig } from '@/config/site.config';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            {siteConfig.hero.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {siteConfig.hero.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app) => (
            <div 
              key={app.id} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16">
                  <Image
                    src={app.logo}
                    alt={`${app.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-gray-800">{app.name}</h2>
                  <p className="text-blue-600">{app.company}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{app.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {app.features?.map((feature) => (
                  <span 
                    key={feature}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {app.platforms?.map((platform) => (
                  <span 
                    key={platform}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {platform}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium">
                  {app.category}
                </span>
                <a
                  href={app.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-colors font-medium"
                >
                  {siteConfig.navigation.visitWebsite}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
