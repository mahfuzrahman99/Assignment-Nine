import { useLoaderData, useParams } from "react-router-dom";
import Donation from "./Donation";
import Navbar from "../../shared/Navbar";


const HealthDonation = () => {

    const {id} = useParams()
    const allDonation = useLoaderData();

  const selectedDonation = allDonation.filter(
    (donatedCard) => donatedCard.m_id === parseInt(id)
  );
console.log(selectedDonation);
    return (
        <div>
          <Navbar/>
            <div>
              {
                selectedDonation.map((donatedCard) => (
                    <Donation key={donatedCard.m_id} aDonation={donatedCard}/>
                ))
              }
            </div>
        </div>
    );
};

export default HealthDonation;