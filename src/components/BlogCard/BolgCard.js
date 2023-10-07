import blogData from "./../../CityData/blog-data.json";


const BlogCard = ({id, title,Author,Description,Content}) => {
  return (
    <>
        <div>
          <h1>{title}</h1>
          <span>{Author}</span>
          <p>{Description}</p>
          <p>{Content}</p>
        </div>

    </>
  );
};

export default BlogCard;