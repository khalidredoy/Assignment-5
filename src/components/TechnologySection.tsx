import { useEffect, useState } from "react";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

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

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
          />
        ))}
      </div>
    </section>
  );
};

export default TechnologySection;