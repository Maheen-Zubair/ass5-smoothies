import Link from "next/link"
import Image from "next/image"
import image from "../public/IMG_20241006_212754-removebg-preview.png"
import image2 from "../public/pink.png"
import image3 from "../public/bludge.png"
import image4 from "../public/purple.png"
import image5 from "../public/dark green.png"
import image6 from "../public/orange.png"
export default function Second(){
  return(
     <div className="second">
             {/* main*/}
<div className="md:flex md:flex-row md:justify-start items-center md:gap-[50px] md:overflow-x-scroll md:h-screen">
             <div className="  imgsec h-[480px] w-[300px] mx-auto rounded-3xl hover:border-black shadow-lg transform hover:shadow-2xl transition-shadow duration-300 ">
             <div className="flex items-end justify-center inset-0 h-[300px] w-[300px] mx-auto mt-[30%] rounded-full bg-transparent box-shadow-black ">
                <Image
                 className=" h-[320px] w-auto mx-auto hover:h-[390px] transition ease-in-out delay-0.5s duration-300"
                src={image}
                alt="div-pic"
                objectFit="cover
                "/>
               </div>  
               <div className=" flex justify-center text-3xl font-sens mt-4">Avacado Boost</div>
               <Link href={"/green-details"} className=" green flex justify-center mt-3 text-xl pt-2  pb-2 mr-20 ml-20 text-white rounded-md transition duration-300"> <button className="">Details</button></Link>
               </div>

                        {/*second pink */}

            <div className="  imgsec h-[480px] w-[300px] mx-auto rounded-3xl hover:border-black shadow-lg transform hover:shadow-2xl transition-shadow duration-300 ">
         <div className="flex items-end justify-center inset-0 h-[300px] w-[300px] mx-auto mt-[30%] rounded-full bg-transparent box-shadow-black ">
                <Image
                 className=" h-[320px] w-auto mx-auto hover:h-[390px] transition ease-in-out delay-0.5s duration-300"
                src={image2}
                alt="div-pic"
                objectFit="cover
                "/>
               </div>  
               <div className=" flex justify-center text-3xl font-sens mt-4">Strawberry Boost</div>
               <Link href={"/pink.details"} className=" pink flex justify-center mt-3 text-xl pt-2  pb-2 mr-20 ml-20 text-white rounded-md transition duration-300"> <button className="">Details</button></Link>
               </div>


              {/*third bludge */}

            <div className="  imgsec h-[480px] w-[300px] mx-auto rounded-3xl hover:border-black shadow-lg transform hover:shadow-2xl transition-shadow duration-300 ">
         <div className="flex items-end justify-center inset-0 h-[300px] w-[300px] mx-auto mt-[30%] rounded-full bg-transparent box-shadow-black ">
                <Image
                 className=" h-[320px] w-auto mx-auto hover:h-[390px] transition ease-in-out delay-0.5s duration-300"
                src={image3}
                alt="div-pic"
                objectFit="cover
                "/>
               </div>  
               <div className=" flex justify-center text-3xl font-sens mt-4">Vanila Boost</div>
               <Link href={"/bludge-details"} className=" bludge flex justify-center mt-3 text-xl pt-2  pb-2 mr-20 ml-20 text-white rounded-md transition duration-300"> <button className="">Details</button></Link>
               </div>

               {/* fourth purple*/}

            <div className="  imgsec h-[480px] w-[300px] mx-auto rounded-3xl hover:border-black shadow-lg transform hover:shadow-2xl transition-shadow duration-300 ">
         <div className="flex items-end justify-center inset-0 h-[300px] w-[300px] mx-auto mt-[30%] rounded-full bg-transparent box-shadow-black ">
                <Image
                 className=" h-[320px] w-auto mx-auto hover:h-[390px] transition ease-in-out delay-0.5s duration-300"
                src={image4}
                alt="div-pic"
                objectFit="cover
                "/>
               </div>  
               <div className=" flex justify-center text-3xl font-sens mt-4">Grapes Boost</div>
               <Link href={"/purple-details"} className=" purple flex justify-center mt-3 text-xl pt-2  pb-2 mr-20 ml-20 text-white rounded-md transition duration-300"> <button className="">Details</button></Link>
               </div>

               {/*fifth dark green */}

            <div className="  imgsec h-[480px] w-[300px] mx-auto rounded-3xl hover:border-black shadow-lg transform hover:shadow-2xl transition-shadow duration-300 ">
         <div className="flex items-end justify-center inset-0 h-[300px] w-[300px] mx-auto mt-[30%] rounded-full bg-transparent box-shadow-black ">
                <Image
                 className=" h-[320px] w-auto mx-auto hover:h-[390px] transition ease-in-out delay-0.5s duration-300"
                src={image5}
                alt="div-pic"
                objectFit="cover
                "/>
               </div>  

               <div className=" flex justify-center text-3xl font-sens mt-4">Kiwi Boost</div>
               <Link href={"/darkGreen-details"} className=" darkGreen flex justify-center mt-3 text-xl pt-2  pb-2 mr-20 ml-20 text-white rounded-md transition duration-300"> <button className="">Details</button></Link>
               </div>

               {/*sixth orange */}

            <div className="  imgsec h-[480px] w-[300px] mx-auto rounded-3xl hover:border-black shadow-lg transform hover:shadow-2xl transition-shadow duration-300 ">
         <div className="flex items-end justify-center inset-0 h-[300px] w-[300px] mx-auto mt-[30%] rounded-full bg-transparent box-shadow-black ">
                <Image
                 className=" h-[320px] w-auto mx-auto hover:h-[390px] transition ease-in-out delay-0.5s duration-300"
                src={image6}
                alt="div-pic"
                objectFit="cover
                "/>
               </div>  
               <div className=" flex justify-center text-3xl font-sens mt-4">Orange Boost</div>
               <Link href={"/orange-details"} className=" orange flex justify-center mt-3 text-xl pt-2  pb-2 mr-20 ml-20 text-white rounded-md transition duration-300"> <button className="">Details</button></Link>
               </div>
               </div>
        </div>
    )

}