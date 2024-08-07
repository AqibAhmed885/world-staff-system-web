import React from "react";
import background from "/japan.jpg";

const Benefits = () => {
  return (
    <div
  className="relative bg-fixed bg-cover bg-gray-100"
  style={{ backgroundImage: `url(${background})` }}
>
  <div className="lg:w-[80%] w-full mx-auto py-10 gap-4 bg-gray-900 bg-opacity-50 p-6">
    <h1 className="text-xl md:text-2xl lg:text-3xl text-center font-bold text-white mb-5">
      Benefits of Studying <span className="text-custom"> in Japan</span>
    </h1>
    <p className="text-sm md:text-base lg:text-lg text-white px-4 py-2 rounded-lg">
      Study Abroad benefits include exploring a new culture, becoming more
      independent while studying in a foreign country, building a network of
      friends from around the world, experiencing a different education
      style, and standing out to future employers. Learning doesn't just
      happen in the classroom; meeting people from different cultures and
      making friends from all over the world are also important parts of
      growing up.
    </p>
    <ul className="list-disc list-inside mt-5 text-white text-sm md:text-base">
      <li>Japan has a high-quality of education.</li>
      <li>Excellent employment opportunities for international students.</li>
      <li>Affordable tuition fees & generous scholarship.</li>
      <li>Safe and secure, with an excellent medical system.</li>
      <li>You can earn a degree and learn Japanese at the same time.</li>
      <li>Learn about Japanese culture, history, and nature.</li>
      <li>Great quality of life.</li>
      <li>Japan fosters your self-discovery and adventurous spirit.</li>
      <li>Lifelong friendships and future career connections.</li>
      <li>Japanese food tastes better in Japan.</li>
    </ul>
  </div>
</div>
  );
};

export default Benefits;
