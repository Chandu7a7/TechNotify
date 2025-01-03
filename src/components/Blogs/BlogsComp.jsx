import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/blog/blog1.png";
import Img2 from "../../assets/blog/blog2.png";
import Img3 from "../../assets/blog/blog3.png";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Latest Tech Jobs",
    description:
      "Explore the latest tech job news, including hiring trends, in-demand skills, and exciting career opportunities. Stay informed about the evolving technology job market to take the next step in your career.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 2,
    image: Img2,
    title: "Software Engineering",
    description:
      "Discover the latest in software engineering with news on cutting-edge technologies, emerging tools, industry trends, and innovations. Stay informed and ahead in the ever-evolving world of software development. ",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 3,
    image: Img3,
    title: "Tech News",
    description:
      "Stay updated with the latest tech news, featuring breakthroughs, innovations, and trends shaping the future of technology and its impact on industries worldwide.",
    author: "Someone",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
          <span id="blog"></span>

      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Our Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center">
            <button className="primary-btn">View All Posts</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
