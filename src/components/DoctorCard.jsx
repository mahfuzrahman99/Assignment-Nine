
import {  useLoaderData, useParams } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Doctor from "./Doctor";
// import Doctor from "./Doctor";

const DoctorCard = () => {

    const { id } = useParams();
  const allDoctors = useLoaderData();

  const selectedDoctor = allDoctors.filter(
    (DoctorCard) => DoctorCard.d_id === parseInt(id)
  );
console.log(selectedDoctor);
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar />
            <div className="">
            <div className="">
              {selectedDoctor.map((adoctor) => (
                <Doctor key={selectedDoctor.d_id} adoctor={adoctor}></Doctor>
              ))}
            </div>
        </div>
        </div>
    );
};

export default DoctorCard;
