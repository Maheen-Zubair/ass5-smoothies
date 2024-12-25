import Link from "next/link";
import CommentSection from "@/app/comment/page";
interface params {
  id: number;
}
export default function Green({ params }: { params: params }) {
  interface information {
    [key: number]: {
      title: string;
      name: string;
      bgColor: string;
    };
  }
  const information: information = {
    1: { title: "Avacado Boost", name: "avacado", bgColor: "green" },
    2: { title: "Strawberry Boost", name: "strawberry", bgColor: "pink" },
    3: { title: "Vanila Boost", name: "vanila", bgColor: "bludge" },
    4: { title: "Grapes Boost", name: "graphes", bgColor: "graphes" },
    5: { title: "Kiwi Boost", name: "kiwi", bgColor: "darkGreen" },
    6: { title: "Orange Boost", name: "orange", bgColor: "orange" },
  };

  const names = information[params.id];

  return (
    <div>
      <div className=" all-smoothies-detail flex flex-col pl-3 pt-3 gap-3 text-xl ">
        <h1 className="text-3xl">Title:</h1>
        {names.title}
        <h1 className="text-3xl">Description:</h1>
        <p>
          Indulge in the velvety texture and delicious taste of our Avocado
          Bliss Smoothie, packed with: <br />{" "}
        </p>
        - Fresh avocados for healthy fats and creamy texture <br />
        - Boosts energy and supports weight management <br />
        - Rich in vitamins C, E, and potassium <br />
        - Supports heart health and digestion <br />
        <h1 className="text-3xl">Ingredients:</h1>- 1 ripe {names.name} <br />
        - 1/2 banana <br />
        - 1/2 cup almond milk <br />
        - 1 tablespoon honey <br />
        - Ice cubes (optional) <br />
        <h1 className="text-3xl">Nutritional Benefits:</h1>
        - Calories: 250 <br />
        - Protein: 3g <br />
        - Fat: 15g
        <br />
        - Carbohydrates: 30g
        <br />
        - Fiber: 7g
        <br />
        <CommentSection/>

        <Link
          href={"/second-page"}
          className={`${names.bgColor} flex justify-center mt-3 text-xl pt-2  pb-2 mr-20 ml-20 text-white rounded-md transition duration-300`}
        >
          <button>Back On Smoothies</button>
        </Link>
      </div>
    </div>
  );
}
