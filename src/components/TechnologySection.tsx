import { useEffect, useState } from "react";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  const [stack, setStack] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (technology: Technology) => {
    setStack((prevStack) => [...prevStack, technology]);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-4xl font-bold text-gray-900">
        Explore <span className="text-pink-500">Technologies</span>
      </h2>

      <p className="mt-2 text-gray-500">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="lg:col-span-3 grid grid-cols-1 gap-6 md:grid-cols-2">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              onAddToStack={handleAddToStack}
            />
          ))}
        </div>

        <div>
          <YourStack stack={stack} />
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
