import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Componenets/Banner";
import Category from "../Componenets/Category";
import Form from "../Componenets/Form";
import TopBrand from "../Componenets/TopBrand";


const Home = () => {
  const loader = useLoaderData();

  return (
    <div>
      {/* Banner Section */}
      <Banner />

      {/* Category Section */}
      <Category />

      

      {/* Equipment Section */}
      <h1 className="text-4xl font-bold p-10">All Equipments:</h1>
      <div className="grid md:grid-cols-3 min-h-full gap-y-6">
        {loader.slice(0, 6).map((item) => (
          <div key={item._id} className="flex justify-center">
            <div className="card bg-base-300 w-96 shadow-xl h-full flex flex-col">
              <figure className="px-10 pt-10">
                <img src={item.photo} alt={item.name} className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center flex-grow">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.description}</p>
                <div className="card-actions mt-auto">
                  <Link
                    to={`/equipment/${item._id}`}
                    className="btn btn-primary"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right p-4">
        <Link to="/all" className="btn btn-outline">
          View More
        </Link>
      </div>

      {/* Top Brand Section */}
      <TopBrand />

      {/* Form Section */}
      <Form />
    </div>
  );
};

export default Home;
