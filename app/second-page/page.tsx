import Link from "next/link";
import Image from "next/image";
export default function Second() {
  const blogs = [
    {
      id: 1,
      name: "Avacado Boost",
      bgColor: "green",
      image: "/IMG_20241006_212754-removebg-preview.png",
    },
    { id: 2, name: "Strawberry Boost", bgColor: "pink", image: "/pink.png" },
    { id: 3, name: "Vanila Boost", bgColor: "bludge", image: "/bludge.png" },
    { id: 4, name: "Grapes Boost", bgColor: "purple", image: "/purple.png" },
    {
      id: 5,
      name: "Kiwi Boost",
      bgColor: "darkGreen",
      image: "/dark green.png",
    },
    { id: 6, name: "Orange Boost", bgColor: "orange", image: "/orange.png" },
  ];

  return (
    <div className="second">
      <div className="pt-[5%] pb-[15%] md:pb-0 md:pt-0 md:flex md:flex-row md:justify-start items-center md:gap-[50px] md:overflow-x-scroll md:h-screen">
        {/* ---------apply map for blogs--------- */}
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="  mt-[18%] md:mt-[7%] md:ml-5 imgsec h-[480px] w-[300px] mx-auto rounded-3xl hover:border-black shadow-lg transform hover:shadow-2xl transition-shadow duration-300 "
          >
            <div className="flex items-end justify-center inset-0 h-[300px] w-[300px] mx-auto rounded-full bg-transparent box-shadow-black ">
              <Image
                className=" h-[320px] w-auto mx-auto hover:h-[390px] transition ease-in-out delay-0.5s duration-300"
                src={blog.image}
                alt={blog.name}
                width={300}
                height={300}
              />
            </div>
            <div className=" flex justify-center text-3xl font-sens mt-4">
              {blog.name}
            </div>
            <Link
              href={`/second-page/${blog.id}`}
              className={`${blog.bgColor} flex justify-center mt-3 text-xl pt-2  pb-2 mr-20 ml-20 text-white rounded-md transition duration-300`}
            >
              <button>Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
