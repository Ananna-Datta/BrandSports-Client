import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllEquipments = () => {
  const equipments = useLoaderData();
  const [sortedEquipments, setSortedEquipments] = useState([...equipments]);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = () => {
    const sorted = [...sortedEquipments].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.prize - b.prize; // Ascending order
      } else {
        return b.prize - a.prize; // Descending order
      }
    });
    setSortedEquipments(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle sort order
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-4">
        Welcome to Equipment Home: {sortedEquipments.length}
      </h2>

      {/* Sort Button */}
      <div className="text-center my-4">
        <button
          onClick={handleSort}
          className="btn btn-primary"
          aria-label={`Sort by price in ${sortOrder === "asc" ? "descending" : "ascending"} order`}
        >
          Sort by Price ({sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>
      </div>

      {sortedEquipments.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Category</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedEquipments.map((equipment, index) => (
                <tr key={equipment._id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{equipment.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{equipment.category}</td>
                  <td className="border border-gray-300 px-4 py-2">{equipment.prize}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <Link
                      to={`/equipment/${equipment._id}`}
                      className="text-blue-600 hover:underline font-medium"
                      aria-label={`View details of ${equipment.name}`}
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center mt-4">
          <p className="text-gray-500">No equipment found.</p>
          <Link to="/add" className="btn btn-primary mt-2">
            Add Equipment
          </Link>
        </div>
      )}
    </div>
  );
};

export default AllEquipments;
