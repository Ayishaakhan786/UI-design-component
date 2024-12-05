import Image from "next/image";
import Tomb from "./Quaid-Tomb.jpg"
export default function Home() {
  return (
    <div className="grid md:grid-cols-2 items-center md:gap-4 gap-8 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto">
    <div className="max-md:order-1 max-md:text-center">
      <h3 className="text-gray-800 md:text-3xl text-2xl md:leading-10 px-5">Discover Karachi "The City of Lights and Stories".</h3>
      <p className="mt-4 text-sm text-gray-600 px-5">"Discover Karachi, where the brilliance of city lights meets the depth of untold stories. Wander through its lively bazaars, savor its iconic street food, and experience a culture as diverse as its people. It’s not just a city; it’s an adventure wrapped in history and modern charm."</p>
      <p className="mt-4 text-sm text-gray-600 px-5">Are you Ready to explore?</p>
      <button type="button" className="px-5 py-2.5 mt-6 ml-3 rounded text-sm outline-none tracking-wide bg-blue-600 text-white hover:bg-blue-700">Explore</button>
    </div>
    <div className="md:h-[470px]">
      <Image src={Tomb} alt = "img"className="w-full h-full md:object-contain" />
    </div>
  </div>
  );
}
