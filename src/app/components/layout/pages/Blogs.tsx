import SubTitle from "@/app/components/reusable/SubTitle";
import Title from "@/app/components/reusable/Title";
import Blog from "../../reusable/blog/Blog";
import { blogs } from "@/app/helpers/stub-data/blogs";
// import SeeMore from "@/app/components/reusable/SeeMore";

export default function Blogs() {
  return (
    <div
      id="blog"
      className="min-h-screen w-[94vw] flex flex-col items-center p-6 mt-6"
    >
      <Title title="Blogs" />
      <SubTitle text="Check this valuable insights" />
      <div className="w-full flex flex-col lg:flex-row justify-between my-6 gap-4">
        <Blog
          classNames="flex-col justify-center  w-full lg:w-1/2 "
          textClassNames="w-full lg:w-[32vw] font-medium text-center"
          image={blogs[0].image}
          imageAlt={blogs[0].imageAlt}
          description={blogs[0].description}
          month={blogs[0].month}
          minutes={blogs[0].minutes}
        />
        <div className="flex flex-col  w-full lg:w-1/2 gap-4">
          {blogs.slice(1, 4).map((blog) => (
            <Blog
              key={blog.id}
              image={blog.image}
              imageAlt={blog.imageAlt}
              description={blog.description}
              month={blog.month}
              minutes={blog.minutes}
              classNames="flex-col lg:flex-row items-center"
              imageClassNames="w-full"
              textClassNames=" text-center lg:text-start"
              widthSize={280}
              heightSize={179}
            />
          ))}
          {/* <SeeMore label="Read more blogs" classNames="self-end" /> */}
        </div>
      </div>
    </div>
  );
}
