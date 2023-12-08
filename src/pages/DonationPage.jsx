import HealthsDonations from "../components/healthDonation/HealthsDonations";
import Banner from "../shared/Banner";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const DonationPage = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Navbar />
        <Banner />
        <h1 className="text-5xl md:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-200  mb-10">
          Our Donations
        </h1>
        <HealthsDonations />
      </div>
      <Footer />
    </div>
  );
};

export default DonationPage;
