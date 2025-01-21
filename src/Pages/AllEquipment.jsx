import React from "react";
import EquipmentCard from "./EquipmentCard";
import { useLoaderData } from "react-router-dom";

const AllEquipment = () => {
  const equipments = useLoaderData();
  console.log(equipments);

  // Check if equipments is defined and is an array
  if (!equipments || !Array.isArray(equipments)) {
    return <p>Loading equipment...</p>;
  }

  return (
    <div className="equipment-container container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">All Equipment</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipments.map((equipment) => (
          <EquipmentCard key={equipment._id} equipment={equipment} />
        ))}
      </div>
    </div>
  );
};

export default AllEquipment;
