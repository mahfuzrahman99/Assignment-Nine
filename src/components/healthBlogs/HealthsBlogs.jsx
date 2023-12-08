import { useState } from "react";
import { useEffect } from "react";
import HealthBlogs from "./HealthBlogs";


const HealthsBlogs = () => {

    const [healthsBlogs, setHealthsBlogs] = useState([])

    useEffect(()=>{
        fetch('blod.json')
        .then(res => res.json())
        .then(data => setHealthsBlogs(data))
    },[])

    return (
        <div className="mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4">
                {
                    healthsBlogs.map(healths => <HealthBlogs key={healths.b_id} healths={healths}/>)
                }
            </div>
        </div>
    );
};

export default HealthsBlogs;