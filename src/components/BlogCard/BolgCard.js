import blogData from "./../../CityData/blog-data.json";
import "./BlogCard.css";


const BlogCard = ({id,image, title,Author,Description,Content,Publish}) => {
  return (
    <>
    
        <div className="blogCard">
          <div className="blog-img">
          <img className="blog-img-content" src={image} alt="image"/>
          </div>
          <p className="txt-center fs-larg">{title}</p>
          <p className="txt-center">{Description}</p>
          <p className="txt-center">{Content}</p>
          <a href="" className="readpost-btn">Read Post</a>
        </div>

    </>
  );
};

export default BlogCard;