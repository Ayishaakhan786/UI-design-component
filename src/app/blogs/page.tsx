import Image from "next/image";
import Link from "next/link";

import Saddar from './pics/saddar.jpg';
import Nazimabad from './pics/nazimabad.jpg';
import Food from './pics/foodstreet.jpg';
import Beach from './pics/beach.jpg';

export default function Blogs() {
  return (
    <div className="bg-white font-sans p-4">
      <div className="max-w-5xl mx-auto">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800 text-center md:text-left">
            EXPLORE KARACHI
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Blog Card 1 */}
          <div className="flex flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
            <div className="h-64">
              <Image
                src={Saddar}
                alt="Saddar: Where Culture Meets Commerce"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                Saddar: Where Culture Meets Commerce
              </h3>
              <span className="text-xs md:text-sm block text-gray-400 mt-2">
                10 FEB 2023 | BY AK SoftTech
              </span>
              <p className="text-xs md:text-sm text-gray-500 mt-4">
                Saddar is the beating heart of Karachi, where historical landmarks blend seamlessly with bustling markets. It’s a place where tradition thrives alongside modern-day commerce, offering a true glimpse into the city’s rich heritage and dynamic lifestyle.
              </p>
              <Link
                href="/blogs/saddar"
                className="mt-4 inline-block text-blue-600 font-semibold text-xs md:text-sm hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="flex flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
            <div className="h-64">
              <Image
                src={Nazimabad}
                alt="The Vibrant Spirit of Nazimabad"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                The Vibrant Spirit of Nazimabad
              </h3>
              <span className="text-xs md:text-sm block text-gray-400 mt-2">
                7 JUN 2023 | BY Influx Era
              </span>
              <p className="text-xs md:text-sm text-gray-500 mt-4">
                Nazimabad embodies the lively essence of Karachi, known for its close-knit community and bustling streets. It’s a hub of cultural diversity, where traditions flourish, local flavors delight, and everyday life reflects the city’s energetic charm.
              </p>
              <Link
                href="/blogs/nazimabad"
                className="mt-4 inline-block text-blue-600 font-semibold text-xs md:text-sm hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="flex flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
            <div className="h-64">
              <Image
                src={Beach}
                alt="Escape to the Waves, Let Nature Heal Your Soul"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                Escape to the Waves, Let Nature Heal Your Soul
              </h3>
              <span className="text-xs md:text-sm block text-gray-400 mt-2">
                5 OCT 2023 | BY Laiba
              </span>
              <p className="text-xs md:text-sm text-gray-500 mt-4">
                The beach offers a peaceful retreat where the rhythmic sound of the waves and the refreshing sea breeze calm the mind. It’s a perfect escape from the hustle and bustle, allowing nature’s beauty to recharge your spirit and bring tranquility to your heart.
              </p>
              <Link
                href="/blogs/beach"
                className="mt-4 inline-block text-blue-600 font-semibold text-xs md:text-sm hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Blog Card 4 */}
          <div className="flex flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
            <div className="h-64">
              <Image
                src={Food}
                alt="Every Street is a Celebration of Flavors in Karachi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                Every Street is a Celebration of Flavors in Karachi
              </h3>
              <span className="text-xs md:text-sm block text-gray-400 mt-2">
                10 DEC 2023 | BY Ayisha Khan
              </span>
              <p className="text-xs md:text-sm text-gray-500 mt-4">
                Karachi’s streets are alive with an explosion of tastes, from savory snacks to aromatic biryanis. Each corner offers a unique culinary experience, reflecting the city’s diverse cultures and vibrant food scene.
              </p>
              <Link
                href="/blogs/streets"
                className="mt-4 inline-block text-blue-600 font-semibold text-xs md:text-sm hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
