import Link from "next/link"
export default function Pink(){
    return(
        <div className="">
            <div className=" all-smoothies-detail flex flex-col pl-3 pt-3 gap-3 text-xl ">
<h1 className="text-3xl">Title:</h1>
 Strawberry Boost

<h1 className="text-3xl">Description:</h1>

<p>Indulge in the velvety texture and delicious taste of our Strawberry Bliss Smoothie, packed with: <br /> </p>
- Fresh avocados for healthy fats and creamy texture <br />
- Boosts energy and supports weight management <br />
- Rich in vitamins C, E, and potassium <br />
- Supports heart health and digestion <br />

<h1 className="text-3xl">Ingredients:
</h1>
- 1 ripe strawberry <br />
- 1/2 banana <br />
- 1/2 cup almond milk <br />
- 1 tablespoon honey <br />
- Ice cubes (optional) <br />

<h1 className="text-3xl">Nutritional Benefits:</h1>

- Calories: 250 <br />
- Protein: 3g <br />
- Fat: 15g<br />
- Carbohydrates: 30g<br />
- Fiber: 7g<br />

<Link href={"/second-page"} className="  pink flex justify-center mt-3 text-xl pt-2  pb-2 mr-20 ml-20 text-white rounded-md transition duration-300"> <button className="">Back On Smoothies</button></Link>
 
</div>

        </div> 
    )
}