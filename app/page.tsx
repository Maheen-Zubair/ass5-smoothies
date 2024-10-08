import Image from "next/image";
import image from "../app/public/yello-blue.jpeg"
import Link from "next/link";
export default function Home() {
  return (
   <div>
    <div className=" relative h-screen">
  <div className=" absolute inset-0 z-0 ">
    <Image
    src={image}
    alt="background-image"
    layout="fill"
    objectFit="cover"
    />
 
 <div className="flex flex-col justify-center items-center  h-screen relative z-10">
  
  <h1 className="text-white text-4xl font-semibold mb-[4%] ">THICK & DELICIOUS </h1>
  <div className="mx-auto mb-[2%]">
  <hr className="border-black border-[3px] my-3" />
  <h1 className=" tracking-in-expand smoothies text-5xl font-semibold"> SMOOTHIES</h1>
  <hr className="border-black border-[3px] my-3" />
  </div>
  <h3 className="text-xl text-gray-700 ">In six exciting flavours!</h3>
  <div className=" space-x-4">
<Link href={"/second-page"}><button className=" text-black text-xl mt-8 bg-transparent border-[2px] border-white pr-4 pl-4 pt-4 pb-4 rounded-md hover:bg-white hover:text-orange-500 ">Smoothies </button>
</Link>
</div>

</div>
</div>
  </div>

   </div>
   
  );
}
