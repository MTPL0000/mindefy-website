import Image from "next/image";
import { blogData } from "@/app/utils/blogData";

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const blog = blogData.find((blog) => blog.id === slug);

  return (
    <section className="mx-auto ">
      <div className="w-full flex justify-center pt-12">
        <div className="container relative aspect-[2/1] rounded-4xl">
          <Image
            src="../../images/blog1.webp"
            fill
            alt="Blog Image"
            className="object-cover rounded-4xl"
          />
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="container mt-8">
          <div className="container flex justify-center">
            <h1 className="text-4xl font-bold text-[#000000] mt-4">
              {blog?.title}
            </h1>
          </div>
          <div className="container flex justify-end">
            <div>
              <p className="text-xl font-medium text-[#444444] mt-4">
                By {blog?.author}
              </p>
              <p className="font-medium text-normal text-[#444444]">
                {blog?.date}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="container mt-5">
          {blog?.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg font-normal text-[#444444] mt-3">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
