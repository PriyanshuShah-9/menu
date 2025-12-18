import React, { useState, lazy, Suspense } from "react";
import menuData from "./menuData";

const Home = lazy(() => import("./pages/Home"));
const Category = lazy(() => import("./pages/Category"));

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 to-amber-100">
      <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
        {!selectedCategory ? (
          <Home
            categories={Object.keys(menuData)}
            onSelectCategory={setSelectedCategory}
          />
        ) : (
          <Category
            selectedCategory={selectedCategory}
            menuData={menuData}
            onBack={() => setSelectedCategory(null)}
          />
        )}
      </Suspense>
    </div>
  );
};

export default App;