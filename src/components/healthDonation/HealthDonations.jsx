import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const HealthDonations = ({ donation }) => {
  // eslint-disable-next-line no-unused-vars
  const { m_id, m_title, m_img, m_details } = donation || {};

  return (
    <div
    >
      <div className="p-4 bg-rose-200 border md:h-[700px] lg:h-[650px] space-y-2 rounded-md flex flex-col justify-between ">
        <h3 className="text-xl mb-4 font-semibold">{m_title}</h3>
        <div>
          <img
            className="rounded-xl h-[300px] mb-3 w-full"
            src={m_img}
            alt={m_title}
          />
        </div>
        <p className=" font-medium">
          <span className="text-lg font-semibold">Details: </span>
          {m_details.slice(0, 200)}
          <Link
            to={`/donation/${m_id}`}
            className="uppercase text-red-500 font-semibold"
          >
            {" "}
            <br />
            Read More..!
          </Link>
        </p>
        <hr className="h-1 bg-red-600" />
        <div>
          <h2 className="text-3xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-black  ">
            For Donation
          </h2>
          <div className="flex justify-between mt-2 items-center">
            <div className="md:text-2xl font-bold text-center col-span-3">
              Please Contact
            </div>
            <button className="md:btn btn-sm rounded-md bg-red-400 md:bg-red-400 ">
              <Link to={`/donation/${m_id}`}>Contact</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthDonations;
