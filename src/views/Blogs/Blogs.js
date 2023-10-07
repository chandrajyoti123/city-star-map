import Navbar from "../../components/Navbar/Navbar";
import blogData from "./../../CityData/blog-data.json";
import BlogCard from "../../components/BlogCard/BolgCard";
import Footer from "./../../components/Footer/Footer";
import "./Blogs.css"

const Blogs = () => {
  return (
    <>
      <Navbar />
      <div className=".blogCards-container">
        {blogData.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              id={blog.id}
              image={blog.image}
              title={blog.title}
              Author={blog.Author}
              Description={blog.Description}
              Content={blog.Content}
              Publish={blog.Publish}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};
export default Blogs;
