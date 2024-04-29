import Image from "next/image";
import axios from "axios";
import { SpaceCats } from "../types/SpaceCats";

export default function Index(props: { spaceCats: Array<SpaceCats> }) {
  return (
    <div className="static">
      <h1 className="text-4xl text-center">SpaceCats!</h1>

      {/* Iterate over props.spaceCats and display them in a grid */}
        <div className="grid grid-cols-3 gap-4">
          {props.spaceCats.map((cat) => (
            <div key={cat.id} className="bg-gray-200 p-4">
          <h2 className="text-4xl font-bold text-center font-fun">{cat.name}</h2>

          <Image
            src={`/${cat.image}`} // Add a leading /
            layout="responsive" // Set the layout to responsive
            width={200}
            height={200}
            className=""
            alt={cat.name}
          />
          <p>{cat.description}</p>
          <p>{cat.profession}</p>
          <p>{cat.city}</p>
          <ul>
            {cat.planets.map((planet) => (
              <li key={planet}>{planet}</li>
            ))}
          </ul>
            </div>
          ))}
        </div>
    </div>
  );
}

// get data from an endpoint
export async function getServerSideProps() {
  // get data from an endpoint with axios
  const res = await axios.get("http://localhost:3001/api/get-spacecats");

  return {
    props: {
      spaceCats: res.data, // Remove the comma after res.data
    },
  };
}
