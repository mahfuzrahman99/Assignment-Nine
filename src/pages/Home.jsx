import DoctorsCards from "../components/DoctorsCards";
import HealthsBlogs from "../components/healthBlogs/HealthsBlogs";
import HealthsDonations from "../components/healthDonation/HealthsDonations";
import HealthsSupports from "../components/supports/HealthsSupports";
import Banner from "../shared/Banner";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const Home = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
      <div>
      <Navbar />
      <Banner />
      </div>
      <div className="border border-gray-200 p-2 rounded-md">
        <h1 className="text-5xl md:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-t from-red-600 to-orange-200  mb-10">
          Our Services
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">Our Doctor services:</h2>
        <DoctorsCards />
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Our Health Support services:
        </h2>
        <HealthsSupports />
      </div>
      <div className="border border-gray-200 p-2 mt-5 rounded-md">
        <h1 className="text-5xl md:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-200  mb-10">
          Our Blogs
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">Our Health Blogs:</h2>
        <HealthsBlogs />
      </div>
      <div className="border border-gray-200 p-2 mt-5 rounded-md mb-8">
        <h1 className="text-5xl md:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-orange-200  mb-10">
         Our Donations
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">Our Donation Events:</h2>
        <HealthsDonations />
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Home;
