import React from "react";
import { ChevronLeft } from "lucide-react";

const Category = ({ selectedCategory, menuData, onBack }) => {

  const groupItemsByPrice = (items) => {
    const grouped = {};

    items.forEach(item => {
      if (item.variants) {
        const variantKey = item.variants
          .map(v => `${v.quantity}-${v.price}`)
          .join("|");

        const avgPrice =
          item.variants.reduce((sum, v) => sum + v.price, 0) /
          item.variants.length;

        if (!grouped[variantKey]) {
          grouped[variantKey] = {
            items: [],
            variants: item.variants,
            hasVariants: true,
            sortPrice: avgPrice
          };
        }
        grouped[variantKey].items.push(item);
      } else {
        const priceKey = `price-${item.price}`;

        if (!grouped[priceKey]) {
          grouped[priceKey] = {
            items: [],
            price: item.price,
            hasVariants: false,
            sortPrice: item.price
          };
        }
        grouped[priceKey].items.push(item);
      }
    });

    return Object.values(grouped).sort(
      (a, b) => b.sortPrice - a.sortPrice
    );
  };

  return (
    <div className="max-w-md mx-auto pb-8 bg-amber-50 min-h-screen">

      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-amber-100 via-amber-200 to-yellow-100 rounded-b-3xl shadow-md">
        <div className="px-4 py-6">

          <button
            onClick={onBack}
            className="flex items-center text-black mb-4 hover:bg-white/40 rounded-lg px-3 py-2 transition"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back
          </button>

          <h2 className="text-2xl font-bold text-amber-900">
            {selectedCategory}
          </h2>

        </div>
      </div>

      {/* Menu Table */}
      <div className="px-4 mt-6">
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-amber-200">

          {/* Table Header */}
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 px-4 py-3">
            <div className="grid grid-cols-4 gap-2 text-black font-semibold text-sm">
              <div className="col-span-1">Item Name</div>

              {menuData[selectedCategory][0]?.variants ? (
                menuData[selectedCategory][0].variants.map((v, i) => (
                  <div key={i} className="text-center">
                    {v.quantity}
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center">Price</div>
              )}

            </div>
          </div>

          {/* Table Body */}
          <div>
            {groupItemsByPrice(menuData[selectedCategory]).map(
              (group, groupIndex) => (
                <div key={groupIndex}>
                  {group.items.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-4 gap-2 px-4 py-3 border-b border-amber-100 hover:bg-amber-50 transition-colors"
                    >

                      <div className="col-span-1 font-medium text-gray-800 text-sm flex items-center">
                        {item.name}
                      </div>

                      {item.variants ? (
                        item.variants.map((variant, vIndex) => (
                          <div
                            key={vIndex}
                            className="text-center font-semibold text-amber-900 text-sm flex items-center justify-center"
                          >
                            ₹{variant.price}
                          </div>
                        ))
                      ) : (
                        <div className="col-span-3 text-center font-semibold text-amber-900 text-sm flex items-center justify-center">
                          ₹{item.price}
                        </div>
                      )}

                    </div>
                  ))}

                  {groupIndex <
                    groupItemsByPrice(menuData[selectedCategory]).length - 1 && (
                    <div className="border-b-2 border-amber-200"></div>
                  )}

                </div>
              )
            )}
          </div>

        </div>
      </div>

    </div>
  );
};

export default Category;