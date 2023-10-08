import Navbar from "../../components/Navbar/Navbar";
import blogData from "./../../CityData/blog-data.json";
import BlogCard from "../../components/BlogCard/BolgCard";
import Footer from "./../../components/Footer/Footer";
import "./Blogs.css";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <div className="blogBanner-container">
        <div className="blogBanner-card">
          <div className="blogBanner-img">
            <img
              className="blogBanner-imgsrc"
              src="https://www.shikhar.com/blog/wp-content/uploads/2020/02/India-Cultural-Tours2-1024x560.jpg"
              alt=""
            />
          </div>
          <div className="blogBanner-content">
            <h2 className="blogBanner-title">
              Top 06 Most Famous Places to Visit
            </h2>
            <p className="blogBanner-description">
              Find out how six cultures around the world say hello and welcome.
            </p>
            <button className="blogBanner-btn">Read Post</button>
          </div>
        </div>
      </div>
      <div className="blogCard-container-main">
        <div className="blogCards-container">
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
      </div>
      <Footer />
    </>
  );
};
export default Blogs;
