import blogData from "./../../CityData/blog-data.json";
import "./BlogCard.css";


const BlogCard = ({id,image, title,Author,Description,Content,Publish}) => {
  return (
    <>
    
        <div className="blogCard">
          <div className="blog-img">
          <img className="blog-img-content" src={image} alt="image"/>
          </div>
          <p>{title}</p>
          <p>{Description}</p>
          <p>{Content}</p>
          <p>{Publish}</p>
        </div>

    </>
  );
};

export default BlogCard;