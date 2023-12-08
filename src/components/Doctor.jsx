/* eslint-disable react/prop-types */

import swal from "sweetalert";

const Doctor = ({ adoctor }) => {
  console.log(adoctor);
  // eslint-disable-next-line no-unused-vars
  const {
    d_name,
    d_img,
    d_qualification,
    d_phone_number,
    d_email,
    d_website,
    d_address,
    d_visit,
    d_chamber_location,
    d_description,
    d_details,
  } = adoctor || {};

  const handleDoctor = () => {
    swal("Success",'Please wait patiently for us to call you from our team.', 'success',)
  }
  return (
    <div>
      <div className="md:grid grid-cols-4 items-center justify-center gap-6 p-4 border border-orange-200 mb-16 rounded-md">
        <div className="col-span-2">
          <img className="rounded-lg" src={d_img} alt="" />
        </div>
        <div className="col-span-2 mt-4 md:mt-0 md:ml-16">
          <h2 className="text-3xl font-semibold">{d_name}</h2>
          <p>
            <span className="text-lg font-medium">Qualification:</span>{" "}
            {d_qualification}
          </p>
          <p>
            <span className="text-lg font-medium">Phone Number:</span>{" "}
            {d_phone_number}
          </p>
          <p>
            <span className="text-lg font-medium">Email:</span> {d_email}
          </p>
          <p>
            <span className="text-lg font-medium">Website:</span> {d_website}
          </p>
          <p>
            <span className="text-lg font-medium">Address:</span> {d_address}
          </p>
          <p>
            <span className="text-lg font-medium">Visit:</span> ${d_visit}
          </p>
          <p>
            <span className="text-lg font-medium">Chamber Location:</span>{" "}
            {d_chamber_location}
          </p>
          <button onClick={handleDoctor} className="btn bg-gray-400 text-white w-full mt-5 mb-5 md:mb-0">Contact For Serial</button>
        </div>
        <div className="col-span-4">
          <p>
            <span className="text-lg font-medium">Description: </span>
            {d_description}
          </p>
          <p>
            <span className="text-lg font-medium">Details: </span>
            {d_details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
