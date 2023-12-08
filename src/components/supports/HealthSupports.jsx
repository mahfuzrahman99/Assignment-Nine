/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const HealthSupports = ({ health }) => {
  const { s_id, s_name, s_img, s_price, s_features, s_description } =
    health || {};
  return (
    <div>
      <div
        className="h-[700px] md:h-[600px] lg:h-[500px] flex flex-col justify-between  rounded-lg bg-orange-200 p-4"
      >
        <div>
          <img
            className=" w-full mx-auto h-60 rounded-xl"
            src={s_img}
            alt={s_name}
          />
        </div>
        <h2 className="text-lg font-semibold">Category Name: {s_name}</h2>
        <p className="text-xl">
          Features: <span className="text-base">{s_features}</span>
        </p>

        <p className=" text-xl">
          Descriptions:{" "}
          <span className="text-base">{s_description.slice(0, 200)}</span>
          <Link
            to={`/support/${s_id}`}
            className="uppercase text-red-500 font-semibold"
          >
            Read More..!
          </Link>
        </p>
        <div className="flex justify-between items-center">
          <p className="text-xl">
            Price: <span className="text-base text-red-800">${s_price}</span>
          </p>
          <button className="btn btn-error btn-sm text-white ">
            <Link to={`/support/${s_id}`}>Perches</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthSupports;
// to={`/support/${s_id}`}
