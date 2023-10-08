import blogData from "./../../CityData/blog-data.json";
import "./BlogCard.css";


const BlogCard = ({id,image, title,Author,Description,Content,Publish}) => {
  return (
    <>
    
        <div className="blogCard">
          <div className="blog-img">
          <img className="blog-img-content" src={image} alt="image"/>
          </div>
          <p className="txt-center">{title}</p>
          <p className="txt-center">{Description}</p>
          <p className="txt-center">{Content}</p>
          <a className="readpost-btn">Read more</a>
        </div>

    </>
  );
};

export default BlogCard;