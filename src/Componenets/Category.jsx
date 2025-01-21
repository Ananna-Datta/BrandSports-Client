import React from 'react';

const Category = () => {
  const categories = [
    { title: "Golf" },
    { title: "Skating" },
    { title: "Football" },
    { title: "Outdoor" },
    { title: "Running"},
    { title: "Drones"},
    { title: "Camping"},
    { title: "Skateboarding" },
    { title: "Basketball" },
  ];

  return (
        <div><h1 className='text-6xl font-bold p-4'>Category</h1 >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-slate-400">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`card w-96 shadow-xl ${
                category.isPrimary ? "bg-primary text-primary-content" : "bg-base-100"
              }`}
            >
              <div className="card-body">
                <h2 className="card-title">{category.title}</h2>
                <div className="card-actions justify-end">
                  
                </div>
              </div>
            </div>
          ))}
        </div></div>
  );
};

export default Category;
