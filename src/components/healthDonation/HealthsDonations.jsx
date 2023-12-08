import { useEffect, useState } from "react";
import HealthDonations from "./HealthDonations";


const HealthsDonations = () => {

    const [healthDonation, setHealthDonations] = useState([])

    useEffect(()=>{
        fetch("donation.json")
        .then(res => res.json())
        .then(data => setHealthDonations(data))
    },[])
    
    return (
        <div className="mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4">
                {
                    healthDonation?.map(donation => <HealthDonations key={donation.m_id} donation={donation}/>)
                }
            </div>
        </div>
    );
};

export default HealthsDonations;