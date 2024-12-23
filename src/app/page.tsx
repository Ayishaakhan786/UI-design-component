import Image from "next/image";
import Link from "next/link";

import Tomb from "./Quaid-Tomb.jpg";

export default function Home() {
  return (
    <div className="grid md:grid-cols-2 items-center gap-4 md:gap-8 font-[sans-serif] max-w-5xl mx-auto p-4 md:p-8">
      {/* Text Section */}
      <div className="text-center md:text-left">
        <h3 className="text-gray-800 text-2xl md:text-3xl leading-8 md:leading-10 px-2 md:px-5">
          Discover Karachi "The City of Lights and Stories".
        </h3>
        <p className="mt-4 text-sm md:text-base text-gray-600 px-2 md:px-5">
          "Discover Karachi, where the brilliance of city lights meets the depth of untold stories. Wander through its lively bazaars, savor its iconic street food, and experience a culture as diverse as its people. It’s not just a city; it’s an adventure wrapped in history and modern charm."
        </p>
        <p className="mt-4 text-sm md:text-base text-gray-600 px-2 md:px-5">
          Are you Ready to explore?
        </p>
        <Link href="/explore">
          <button
            type="button"
            className="px-4 md:px-5 py-2 mt-6 rounded text-sm md:text-base outline-none tracking-wide bg-blue-600 text-white hover:bg-blue-700">
            Explore
          </button>
        </Link>
      </div>
      {/* Image Section */}
      <div className="h-[300px] md:h-[470px] flex items-center justify-center">
        <Image
          src={Tomb}
          alt="Karachi Tomb"
          className="w-full h-full object-cover md:object-contain rounded-md"
        />
      </div>
    </div>
  );
}
