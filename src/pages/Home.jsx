import React from "react";

const Home = ({ categories, onSelectCategory }) => {
  const getCategoryImage = (cat) => {
    const images = {
      'Ice Cream': '/categories/ice-cream.jpg',
      'Sundaes': '/categories/sundae.jpg',
      'Thick Shakes': '/categories/thick-shake.jpg',
      'Milk Shakes': '/categories/milk-shake.jpg',
      'Lassi': '/categories/lassi.jpg',
      'Falooda': '/categories/falooda.jpg',
      'Shrikhand': '/categories/shrikhand.jpg',
      'Liquid Sweet': '/categories/liquid-sweet.jpeg',
      'Kulfi': '/categories/kulfi.jpeg'
    };
    return images[cat] || '/categories/default.jpg';
  };

  return (
    <div className="max-w-md mx-auto pb-8">
      {/* Hero */}
      <div className="relative bg-linear-to-br from-amber-800 via-amber-700 to-stone-800 rounded-b-3xl shadow-2xl overflow-hidden">
        <div className="relative px-6 py-12 text-center">
          <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-2xl p-2">
            <img src="/shop_icon.jpg" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-3xl font-bold text-amber-50">Shree Satyanarayan</h1>
          <p className="text-amber-200 mt-2 text-sm">Premium Desserts & Treats</p>
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