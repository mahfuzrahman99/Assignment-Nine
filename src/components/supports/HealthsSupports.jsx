import { useEffect, useState } from "react";
import HealthSupports from "./HealthSupports";


const HealthsSupports = () => {
    const [health, setHealth] = useState([])

    useEffect(()=>{
        fetch('support.json')
       .then(res => res.json())
       .then(data => setHealth(data))
    },[])
    
    return (
        <div className="mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4">
            {
                health.map(health => <HealthSupports key={health.s_id} health={health}/>)
            }
            </div>
        </div>
    );
};

export default HealthsSupports;