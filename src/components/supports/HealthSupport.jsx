import { useLoaderData, useParams } from "react-router-dom";
import Support from "./Support";
import Navbar from "../../shared/Navbar";

const HealthSupport = () => {
    
    const { id } = useParams();
  const allSupport = useLoaderData();

  const selectedSupport = allSupport.filter(
    (SupportCard) => SupportCard.s_id === parseInt(id)
  );
  
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar/>
            <div>
                {
                    selectedSupport.map(support => <Support key={support.s_id} support={support}/>)
                }
            </div>
        </div>
    );
};

export default HealthSupport;