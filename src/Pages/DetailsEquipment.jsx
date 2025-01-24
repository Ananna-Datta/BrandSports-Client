import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const DetailsEquipment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [equipment, setEquipment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://brand-sports.vercel.app/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch equipment details');
        }
        const data = await response.json();
        setEquipment(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEquipment();
  }, [id]);

  // Delete function
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this equipment?");
    if (confirmDelete) {
      try {
        await fetch(`https://brand-sports.vercel.app/equipment/${id}`, {
          method: 'DELETE',
        });
        alert("Equipment deleted successfully.");
        Swal.fire({
          title: 'Success!',
          text: 'Deleted successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
      });
        navigate('/'); // Redirect to home page after deletion
      } catch (error) {
        setError("Failed to delete equipment");
      }
    }
  };

  // Update function (navigate to an update page or show a modal)
  const handleUpdate = () => {
    navigate(`/equipment/update/${id}`); // Navigate to an update page
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!equipment) {
    return <div className="text-center">No equipment found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Equipment Header */}
        <div className="flex justify-between items-center p-6 bg-blue-500 text-white">
          <h1 className="text-3xl font-semibold">{equipment.name}</h1>
          <p className="text-xl">{equipment.category}</p>
        </div>

        {/* Equipment Image and Details */}
        <div className="p-6 flex gap-8">
          <div className="w-1/3">
            <img
              src={equipment.photo}
              alt={equipment.name}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="w-2/3">
            <p className="text-lg text-gray-700 mb-4">{equipment.description}</p>
            <div className="mb-4">
              <p className="text-gray-600 font-semibold">Price: ${equipment.prize}</p>
              <p className="text-gray-600 font-semibold">Rating: {equipment.rating} ★</p>
              <p className="text-gray-600 font-semibold">Customization: {equipment.customization}</p>
              <p className="text-gray-600 font-semibold">Available: {equipment.available ? 'Yes' : 'No'}</p>
            </div>
            <div className="border-t border-gray-300 pt-4">
              <p className="text-gray-600 font-semibold">Posted By: {equipment.UserName}</p>
              <p className="text-gray-600">Contact: {equipment.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsEquipment;
