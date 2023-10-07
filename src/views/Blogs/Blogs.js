import Navbar from "../../components/Navbar/Navbar";
import blogData from "./../../CityData/blog-data.json"
import BlogCard from "../../components/BlogCard/BolgCard";
import Footer from "./../../components/Footer/Footer";

const Blogs = () => {
  return (
    <>
      <Navbar />
      {
        blogData.map((blog, index) => {
            return <BlogCard key={index} id={blog.id} title={blog.title} Author={blog.Author} Description={blog.Description} Content={blog.Content} />
        })
      }
      <Footer/>
    </>
  );
};
export default Blogs;
