import React from "react";
import { Link } from "react-router-dom"; // Don't forget to import Link

const EquipmentCard = ({ equipment }) => {
  const { name, photo, description, _id } = equipment;
  
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
            <Link
              to={`/equipment/${_id}`} // Corrected the interpolation
              className="text-blue-600 hover:underline font-medium"
              aria-label={`View details of ${name}`}
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard;
