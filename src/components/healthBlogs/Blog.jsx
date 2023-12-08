/* eslint-disable react/prop-types */


const Blog = ({blog}) => {
    // eslint-disable-next-line no-unused-vars
    const {b_id, b_title, b_img, b_details} = blog || {};
    return (
        <div className="max-w-6xl mx-auto">
            <div className="bg-gray-200 p-4 border  space-y-2 rounded-md flex flex-col justify-between ">
            <h2 className="text-xl my-6 font-semibold">{b_title}</h2>
            <div>
                <div><img className="rounded-xl md:h-[500px] w-full" src={b_img} alt="" /></div>
            </div>
            <p className=" font-medium">{b_details}</p>
            </div>
        </div>
    );
};

export default Blog;