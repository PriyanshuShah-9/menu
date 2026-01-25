import React from "react";

const Home = ({ categories, onSelectCategory }) => {
  const getCategoryImage = (cat) => {
    const images = {
      'Ice Cream': '/categories/ice-cream.jpg',
      'Sundaes': '/categories/sundae.jpg',
      'Shakes': '/categories/thick-shake.jpg',
      'Lassi': '/categories/lassi.jpg',
      'Shrikhand': '/categories/shrikhand.jpg',
    };
    return images[cat] || '/categories/default.jpg';
  };

  return (
    <div className="max-w-md mx-auto pb-8">
      {/* Hero */}
      <div className="relative bg-linear-to-br from-amber-800 via-amber-700 to-stone-800 rounded-b-3xl shadow-2xl overflow-hidden">
        <div className="relative px-6 py-12 text-center">
          <div className="flex justify-center items-center mb-4">
            <img src="/shop_icon.png" alt="Logo" className="w-32 h-32 object-contain" />
          </div>
          <h1 className="text-3xl font-[--font-poppins] font-semibold text-amber-50">Satyanarayan</h1>
          <p className="mt-2 text-sm text-amber-200 font-(--font-montserrat)">Ice cream & Shakes</p>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mt-8">
        <h3 className="text-lg font-semibold text-stone-800 mb-4 px-2">
          Explore Our Menu
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden">
                <img src={getCategoryImage(category)} alt={category} />
              </div>
              <p className="font-semibold text-sm">{category}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;