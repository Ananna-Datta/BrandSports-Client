import React, { useContext } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import { AuthContext } from "../Provider/AuthProvider";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Extract values from form
    const name = e.target.name.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const prize = e.target.prize.value;
    const rating = e.target.rating.value;
    const customization = e.target.customization.value;
    const time = e.target.time.value;
    const available = e.target.available.checked;
    const photo = e.target.photo.value;
    const email = user.email;

    const newEquipment = {
      name,
      category,
      description,
      prize,
      rating,
      customization,
      time,
      available,
      photo,
      email,
    };

    console.log(newEquipment);

    // API submission logic
    fetch("http://localhost:5000/equipment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // Show success alert
          Swal.fire({
            title: "Success!",
            text: "Equipment added successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });
          e.target.reset();
        } else {
          // Show error alert if something goes wrong
          Swal.fire({
            title: "Error!",
            text: "Failed to add equipment. Please try again.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "An unexpected error occurred. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Add Equipment!</h1>
      </div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleSubmit}>
          {/* Form first row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Equipment Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Equipment Category"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* Form second row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Prize</span>
              </label>
              <input
                type="number"
                name="prize"
                placeholder="Prize"
                className="input input-bordered"
                min="0"
                required
              />
            </div>
          </div>

          {/* Form third row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                name="rating"
                placeholder="Rating"
                className="input input-bordered"
                min="0"
                max="5"
                step="0.1"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Customization</span>
              </label>
              <input
                type="text"
                name="customization"
                placeholder="Customization"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* Processing Time */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <input
              type="text"
              name="time"
              placeholder="Processing Time"
              className="input input-bordered"
              required
            />
          </div>

          {/* Photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>

          {/* Available Checkbox */}
          <div className="form-check mt-4">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              name="available"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Available
            </label>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Add Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEquipment;
