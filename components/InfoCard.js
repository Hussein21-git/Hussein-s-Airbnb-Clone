import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid"

function InfoCard({img, location, title, description, star, price, total }) {
    return (
        <div className="flex py-7 px2 border-b cursor-pointer hover:opacity-80 active:scale-90 hover:shadow-2xl pr-4 transition duration-200 first:border-t">
           <div className="relative h-27 w-47 md:h-60 md:w-80 flex-shrink-0 ">
               <Image className="rounded-full" 
               src={img}
               layout="fill"
               objectFit="cover" className="rounded-2xl"
               />
               </div>
               <div className="flex flex-col flex-grow pl-5">
                   <div className="flex justify-between">
                       <p>{location}</p>
                       <HeartIcon className="h-7 cursor-pointer"/>
                   </div>
                   <h4 className="text-xl">{title}</h4>
                   <div className="broder-b w-10 pt-2"/>
                  <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
                   <div className="flex justify-between items-end pt-5">
                       <p className="flex items-center"> {star}
                       <StarIcon  className="h-5 text-red-400"/>
                       </p>
                   
                   <div>
                       <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
                       <p className="text-right font-extralight">{total}</p>
                       </div>
                   </div>
               </div>
        </div>
    )
}

export default InfoCard
