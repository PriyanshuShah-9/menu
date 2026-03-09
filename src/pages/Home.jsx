import React from "react";

const Home = ({ categories, onSelectCategory }) => {

  const getCategoryImage = (cat) => {
    const images = {
      'Ice Cream': '/categories/ice-cream.png',
      'Sundaes': '/categories/sundae.png',
      'Shakes': '/categories/shake.png',
      'Lassi': '/categories/lassi.png',
      'Shrikhand': '/categories/shrikhand.png',
      'Extra Toppings': '/categories/topping.png'
    };
    return images[cat] || '/categories/default.jpg';
  };

  return (
    <div className="max-w-md mx-auto pb-8 bg-amber-50 min-h-screen">

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-amber-100 via-amber-200 to-yellow-100 rounded-b-3xl shadow-md overflow-hidden">

        <div className="relative px-6 py-12 text-center">

          <div className="flex justify-center items-center mb-4">
            <img
              src="/shop_icon.png"
              alt="Logo"
              className="w-32 h-32 object-contain"
            />
          </div>

          <h1 className="text-3xl font-semibold text-black font-[Playfair_Display]">
            Satyanarayan
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Ice cream & Shakes
          </p>

        </div>

      </div>

      {/* Categories */}
      <div className="px-4 mt-8">

        <h3 className="text-lg font-semibold text-amber-900 mb-4 px-2">
          Explore Our Menu
        </h3>

        <div className="grid grid-cols-3 gap-3">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md hover:bg-amber-50 hover:scale-105 transition-all duration-200"
            >

              <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden flex items-center justify-center">

                <img
                  src={getCategoryImage(category)}
                  alt={category}
                  className="w-10 h-10 object-contain"
                />

              </div>

              <p className="font-semibold text-sm text-gray-800">
                {category}
              </p>

            </button>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Home;