import Image from "next/image";

import aboutPic from './aboutpic.jpg';

export default function About() {
  return (
    <div className="grid md:grid-cols-2 items-center gap-4 md:gap-8 font-[sans-serif] max-w-5xl mx-auto p-4 md:p-8">
      {/* Text Section */}
      <div className="text-center md:text-left">
        <h3 className="text-gray-800 text-2xl md:text-3xl leading-8 md:leading-10 px-2 md:px-5 mt-3">
          Discover Karachi "The City of Lights and Stories".
        </h3>
        <p className="mt-3 text-sm md:text-base text-black px-2 md:px-5 mb-3">
          Karachi, the largest and most diverse city in Pakistan, is renowned for 
          its vibrant culture and bustling lifestyle. Known as the "City of Lights," 
          it is a melting pot of people from various backgrounds and regions. The 
          city’s culture is a harmonious blend of different traditions and ethnicities, 
          making it uniquely dynamic. The people of Karachi are known for their friendliness 
          and hospitality, celebrating every festival, whether it’s Eid, Christmas, 
          or Holi, with enthusiasm and joy. Karachi’s street food scene is iconic, 
          featuring delicacies like bun kebabs, nihari, haleem, and its world-famous 
          biryani. Areas such as Saddar and Burns Road are particularly famous for their
          food offerings.
        </p>
        <p className="text-sm md:text-base text-black px-2 md:px-5">
          For recreation, places like Clifton Beach and Hawksbay provide
         popular seaside escapes, drawing crowds for leisure and family 
         gatherings. The city is also a hub of art and entertainment. 
         Institutions like the National Academy of Performing Arts (NAPA) and
         venues like Frere Hall showcase Karachi's rich artistic talent. 
         Events such as the Karachi Literature Festival and exhibitions at the
         Expo Centre offer educational and cultural engagement. A unique aspect
         of Karachi is its ceaseless energy, with markets and streets alive at 
         all hours. Additionally, as Pakistan's trade and economic hub, the city’s
         ports and industries play a pivotal role in the country’s economy. 
         The coexistence of diverse languages, religions, and lifestyles teaches
         mutual respect and coexistence, further enriching Karachi's vibrant and
         inclusive cultural tapestry.
        </p>
      </div>
      {/* Image Section */}
      <div className="h-[300px] md:h-[470px] flex items-center justify-center">
        <Image
          src={aboutPic}
          alt="About Karachi"
          className="w-full h-full object-cover md:object-contain rounded-md"
        />
      </div>
    </div>
  );
}
