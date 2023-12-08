/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const HealthBlogs = ({ healths }) => {
  const { b_id, b_title, b_img, b_details } = healths || {};
  return (
    <div
    >
      <div className="bg-gray-200 p-4 border md:h-[700px] lg:h-[590px] space-y-2 rounded-md flex flex-col justify-between ">
        <h2 className="text-xl mb-4 font-semibold">{b_title}</h2>
        <div>
          <div>
            <img className="rounded-xl h-[300px] w-full" src={b_img} alt="" />
          </div>
        </div>
        <p className=" font-medium">
          {b_details.slice(0, 400)}
          <Link
            to={`/blog/${b_id}`}
            className="uppercase text-red-500 font-semibold"
          >
            {" "}
            <br />
            Read More..!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HealthBlogs;
