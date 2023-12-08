/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Support = ({ support }) => {
  const { s_name, s_img, s_price, s_features, s_description } = support || {};

  const handlePerches = () => {
    swal("Success!", "Your Perches Is Successfully Done!", "success");
  };
  return (
    <div>
      <div className="flex flex-col justify-between space-y-3 mb-16 rounded-lg bg-orange-200 p-4">
        <div>
          <img
            className="rounded-xl h-[300px] md:h-[500px] w-full"
            src={s_img}
            alt={s_name}
          />
        </div>
        <h2 className="text-lg md:text-3xl font-semibold">
          Category Name: {s_name}
        </h2>
        <p className="text-xl">
          Features: <span className="text-base">{s_features}</span>
        </p>

        <p className=" text-xl">
          Descriptions: <span className="text-base">{s_description}</span>
        </p>
        <div className="flex justify-between items-center">
          <p className="text-xl">
            Price: <span className="text-base text-red-800">${s_price}</span>
          </p>
          <button className="btn btn-error text-red-600 ">
            <Link onClick={handlePerches}>Perches</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
