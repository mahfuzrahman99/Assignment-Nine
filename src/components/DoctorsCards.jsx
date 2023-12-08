import { useEffect, useState } from "react";
import DoctorsCard from "./DoctorsCard";


const DoctorsCards = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(()=>{
        fetch('doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <div className="mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
                {
                    doctors.map(doctor => <DoctorsCard key={doctor.d_id} doctor={doctor}/>)
                }
            </div>
        </div>
    );
};

export default DoctorsCards;