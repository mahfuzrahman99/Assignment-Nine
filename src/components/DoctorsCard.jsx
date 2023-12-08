/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const DoctorsCard = ({ doctor }) => {
  // eslint-disable-next-line no-unused-vars
  const {
    d_id,
    d_name,
    d_img,
    d_qualification,
    d_phone_number,
    d_email,
    d_address,
  } = doctor || {};
  return (
    <div>
      <div
        className="flex justify-between items-center p-3 shadow-lg rounded-xl bg-sky-200 gap-3 md:h-44"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div>
          <img
            className="w-[130px] h-[100px] rounded-3xl"
            src={d_img}
            alt={d_name}
          />
        </div>
        <div>
          <h2 className="text-lg">{d_name}</h2>
          <p className="text-xs">Qualification: {d_qualification}</p>
          <p className="text-xs">Phone Number: {d_phone_number}</p>
          <p className="text-xs">Email: {d_email}</p>
          <p className="text-xs">Address: {d_address}</p>
          <button>
            For Serial Please{" "}
            <Link
              to={`/doctor/${d_id}`}
              className="uppercase text-red-500 font-semibold"
            >
              Contact
            </Link>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
