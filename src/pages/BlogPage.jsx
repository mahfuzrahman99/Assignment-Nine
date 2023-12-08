import HealthsBlogs from "../components/healthBlogs/HealthsBlogs";
import Banner from "../shared/Banner";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const BlogPage = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Navbar />
        <Banner />
        <h1 className="text-5xl md:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-200  mb-10">
          Our Blogs
        </h1>
        <HealthsBlogs />
      </div>
      <Footer />
    </div>
  );
};

BlogPage.propTypes = {};

export default BlogPage;
