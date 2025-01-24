import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/Authprovider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyEquipment = () => {
    const [equip, setequip] = useState([]);
    const { user, loading } = useContext(AuthContext);

    useEffect(() => {
        // Fetch equipment only if the user and their email are available
        if (!loading && user?.email) {
            fetch(`https://brand-sports.vercel.app/equipment?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => setequip(data))
                .catch((err) => console.error("Error fetching equipment:", err));
        }
    }, [user?.email, loading]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brand-sports.vercel.app/equipment/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your equipment has been deleted.", "success");

                            // Update the equipment state
                            const remainingEquip = equip.filter((item) => item._id !== _id);
                            setequip(remainingEquip);
                        }
                    })
                    .catch((err) => console.error("Error deleting equipment:", err));
            }
        });
    };

    // Show loading state if the data is being fetched
    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // Fallback if no user is available
    if (!user) {
        return <div>Please log in to view your equipment.</div>;
    }

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-6">My Equipment: {equip.length}</h2>
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
                <table className="table w-full border-collapse border-gray-300">
                    {/* Table Head */}
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                                Select
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                                Photo
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                                Prize
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                                email
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                                Category
                            </th>
                            <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {equip.map((item) => (
                            <tr key={item._id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <input type="checkbox" className="checkbox" />
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.photo}
                                                    alt="Equipment"
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-700 font-medium">{item.prize}</td>
                                <td className="px-6 py-4 text-gray-700">{item.category}</td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center gap-2">
                                        {/* Navigate to an edit page with the equipment ID */}
                                        <Link to={`/updateequip/${item._id}`}>
                                            <button className="btn btn-sm btn-primary" title="Edit Equipment">
                                                Edit
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn btn-sm btn-error"
                                            title="Delete Equipment"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEquipment;
