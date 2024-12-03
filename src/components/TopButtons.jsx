import React from "react";

const TopButton = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      name: "chennai"
    },
    {
      id: 2,
      name: "bengaluru"
    },
    {
      id: 3,
      name: "delhi"
    },
    {
      id: 4,
      name: "hyderabad"
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center my-6 space-x-2 space-y-2 md:space-y-0 md:space-x-4">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in w-full sm:w-auto"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButton;
