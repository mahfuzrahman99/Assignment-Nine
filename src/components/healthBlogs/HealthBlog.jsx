import { useLoaderData, useParams } from "react-router-dom";
import Blog from "./Blog";
import Navbar from "../../shared/Navbar";


const HealthBlog = () => {

     
    const { id } = useParams();
  const allBlog = useLoaderData();
  console.log(allBlog);

  const selectedBlog = allBlog.filter(
    (BlogCard) => BlogCard.b_id === parseInt(id)
  );
console.log(selectedBlog);
    return (
        <div>
            <Navbar/>
            <div>
                {
                    selectedBlog.map((blog) => <Blog key={blog.b_id} blog={blog}/>)
                }
            </div>
        </div>
    );
};

export default HealthBlog;